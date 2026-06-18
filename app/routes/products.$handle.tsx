import {useRef} from 'react';
import {Link, useLoaderData} from 'react-router';
import type {Route} from './+types/products.$handle';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
} from '@shopify/hydrogen';
import type {ProductFragment} from 'storefrontapi.generated';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';
import {getPdpContent, type PdpContent} from '~/lib/etch-pdp';
import {PdpGallery} from '~/components/pdp/PdpGallery';
import {DigitalGallery} from '~/components/pdp/DigitalGallery';
import {
  PdpRealBuyBox,
  PdpPlaceholderBuyBox,
} from '~/components/pdp/PdpBuyBox';
import {PdpSections} from '~/components/pdp/PdpSections';
import {StickyBuyBar} from '~/components/StickyBuyBar';

export const meta: Route.MetaFunction = ({data}) => {
  const name = data?.content?.name ?? 'ETCH';
  return [
    {title: `${name} — ETCH`},
    {
      name: 'description',
      content:
        data?.content?.shortDesc ??
        'ETCH — Definition, engineered. Premium EMS for tone and strength.',
    },
    {
      rel: 'canonical',
      href: `/products/${data?.handle ?? ''}`,
    },
  ];
};

export async function loader(args: Route.LoaderArgs) {
  const criticalData = await loadCriticalData(args);
  return criticalData;
}

async function loadCriticalData({context, params, request}: Route.LoaderArgs) {
  const {handle} = params;
  const {storefront} = context;
  if (!handle) {
    throw new Response('Missing product handle', {status: 404});
  }

  // Look up config content. May be null for unknown handles.
  const content = getPdpContent(handle);

  // Try Shopify — Mock.shop or empty real shops will simply return no product.
  // Never throw here; we fall back to config when product is missing.
  let product: ProductFragment | null = null;
  try {
    const {product: shopifyProduct} = await storefront.query(PRODUCT_QUERY, {
      variables: {handle, selectedOptions: getSelectedProductOptions(request)},
    });
    if (shopifyProduct?.id) {
      product = shopifyProduct;
      redirectIfHandleIsLocalized(request, {handle, data: shopifyProduct});
    }
  } catch {
    // Storefront-API errors (network, missing config, etc.) are non-fatal here —
    // we fall back to config content. Real failures surface in monitoring.
    product = null;
  }

  // Hard 404 only when there's neither a real product nor config content for the handle.
  if (!product && !content) {
    throw new Response('Not Found', {status: 404});
  }

  return {
    handle,
    product,
    content,
    isPlaceholder: !product,
  };
}

export default function Product() {
  const {handle, product, content} = useLoaderData<typeof loader>();
  // content is guaranteed when we reach this component (else 404 above)
  const resolved = (content ?? null) as PdpContent | null;
  const buyBoxRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {resolved ? (
        <StickyBuyBar
          name={resolved.name}
          price={resolved.price}
          triggerRef={buyBoxRef}
          url={`/products/${handle}`}
        >
          <Link className="btn" to={`/products/${handle}`}>
            {resolved.isPads ? 'Choose pads' : 'Add to kit'}
          </Link>
        </StickyBuyBar>
      ) : null}

      <section className="pdp-top">
        {resolved?.kind === 'digital' ? (
          <DigitalGallery
            image={product?.selectedOrFirstAvailableVariant?.image ?? null}
            productName={resolved.name}
            label={
              resolved.matchedDevice?.handle === 'etch-flux-core'
                ? 'CORE'
                : resolved.matchedDevice?.handle === 'etch-flux-form'
                  ? 'FORM'
                  : 'THE METHOD'
            }
          />
        ) : (
          <PdpGallery
            image={product?.selectedOrFirstAvailableVariant?.image ?? null}
            isSet={resolved?.isSet}
            isPads={resolved?.isPads}
            productName={resolved?.name}
          />
        )}
        <div ref={buyBoxRef}>
          {product ? (
            <PdpRealBuy product={product} content={resolved!} />
          ) : (
            <PdpPlaceholderBuyBox content={resolved!} />
          )}
        </div>
      </section>

      {resolved ? (
        <PdpSections
          content={resolved}
          handle={handle}
          productUrl={`/products/${handle}`}
        />
      ) : null}
    </>
  );
}

/**
 * Real buy box wrapper — uses Shopify hooks only when a product is present.
 * Separated to keep hook order stable (we never conditionally call hooks).
 */
function PdpRealBuy({
  product,
  content,
}: {
  product: ProductFragment;
  content: PdpContent;
}) {
  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );
  useSelectedOptionInUrlParam(selectedVariant?.selectedOptions ?? []);
  const productOptions = getProductOptions({
    ...product,
    selectedOrFirstAvailableVariant: selectedVariant,
  });

  return (
    <>
      <PdpRealBuyBox
        content={content}
        productOptions={productOptions}
        selectedVariant={selectedVariant}
      />
      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: selectedVariant?.price.amount || '0',
              vendor: product.vendor,
              variantId: selectedVariant?.id || '',
              variantTitle: selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    encodedVariantExistence
    encodedVariantAvailability
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants (selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
` as const;
