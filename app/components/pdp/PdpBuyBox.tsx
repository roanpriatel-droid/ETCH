import {Link} from 'react-router';
import {type MappedProductOptions} from '@shopify/hydrogen';
import type {ProductFragment} from 'storefrontapi.generated';
import {ProductPrice} from '~/components/ProductPrice';
import {ProductForm} from '~/components/ProductForm';
import {MethodOrderBump} from './MethodOrderBump';
import type {PdpContent} from '~/lib/etch-pdp';

function BuyShell({content, children}: {content: PdpContent; children: React.ReactNode}) {
  const isDigital = content.kind === 'digital';
  return (
    <div className="pdp-buy">
      {content.isSet ? (
        <span className="pdp-set-tag">
          <span aria-hidden="true">●</span>
          {content.edition}
        </span>
      ) : (
        <p className="eyebrow pdp-edition">{content.edition}</p>
      )}
      <h1 className="pdp-name">
        {content.name.split('—')[0]?.trim()}
        {content.name.includes('—') ? (
          <>
            {' — '}
            <span className="serif">{content.name.split('—')[1]?.trim()}</span>
          </>
        ) : null}
      </h1>
      <p className="pdp-target">{content.target}</p>
      <p className="pdp-shortdesc">{content.shortDesc}</p>

      <ul className="pdp-mini-benefits">
        {content.benefits.slice(0, 3).map((b) => (
          <li key={b.title}>
            <strong>{b.title}.</strong> {b.text}
          </li>
        ))}
      </ul>

      {children}

      {/* Order bump is the device → Method upsell. Skip on digital (it IS the
          Method) and on pads (consumable, not a device kit). */}
      {!isDigital && !content.isPads ? <MethodOrderBump /> : null}

      {isDigital ? (
        <div className="pdp-trust-row">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v12" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="4" y1="20" x2="20" y2="20" />
            </svg>
            Instant access
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 5h7a3 3 0 0 1 3 3v12" />
              <path d="M20 5h-7a3 3 0 0 0-3 3v12" />
            </svg>
            PDF + web reader
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
              <polyline points="21,3 21,8 16,8" />
              <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
              <polyline points="3,21 3,16 8,16" />
            </svg>
            Lifetime updates
          </span>
        </div>
      ) : (
        <div className="pdp-trust-row">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            60-night money-back
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7h11v9H3z" />
              <path d="M14 10h4l3 3v3h-7" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="17" cy="18" r="2" />
            </svg>
            Free shipping
          </span>
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
              <path d="M12 7v5l3 2" />
            </svg>
            2-year warranty
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * Real buy box — used when Shopify returns a product for this handle.
 * Wraps the existing ProductForm (variants + AddToCartButton).
 */
export function PdpRealBuyBox({
  content,
  productOptions,
  selectedVariant,
}: {
  content: PdpContent;
  productOptions: MappedProductOptions[];
  selectedVariant: ProductFragment['selectedOrFirstAvailableVariant'];
}) {
  return (
    <BuyShell content={content}>
      <div className="pdp-price-row">
        <ProductPrice
          price={selectedVariant?.price}
          compareAtPrice={selectedVariant?.compareAtPrice}
        />
      </div>
      <ProductForm
        productOptions={productOptions}
        selectedVariant={selectedVariant}
      />
    </BuyShell>
  );
}

/**
 * Placeholder buy box — used when the handle is in PDP_CONTENT but Shopify has
 * no product for it. CTA is presentational. To wire to a real variant once the
 * Shopify product exists: simply create the product with this handle in Shopify
 * admin — the loader will pick up the real product and route through the Real
 * buy box automatically.
 */
export function PdpPlaceholderBuyBox({content}: {content: PdpContent}) {
  return (
    <BuyShell content={content}>
      <div className="pdp-price-row">
        <span className="pdp-price">{content.price}</span>
      </div>

      {content.isPads ? (
        <div className="pdp-pads-ctas">
          <Link className="btn" to="/pages/subscription">
            Start subscription — $24/mo
          </Link>
          <Link className="btn-ghost" to="/pages/pads">
            Buy a single set →
          </Link>
        </div>
      ) : (
        <button
          type="button"
          className="btn pdp-cta"
          onClick={() =>
            window.alert(
              'Add to cart will activate when the Shopify product is linked. (Presentational on Mock.shop.)',
            )
          }
        >
          Add to kit
        </button>
      )}

      {!content.isPads && content.kind !== 'digital' ? (
        <p className="pdp-founding-line">
          Founding release — each unit numbered, limited allocation.
        </p>
      ) : null}
    </BuyShell>
  );
}
