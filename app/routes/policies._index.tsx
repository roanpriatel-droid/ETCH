import {Link, useLoaderData} from 'react-router';
import type {Route} from './+types/policies._index';
import type {PoliciesQuery, PolicyItemFragment} from 'storefrontapi.generated';
import {PageHero} from '~/components/PageHero';

export const meta: Route.MetaFunction = () => [
  {title: 'Policies — ETCH'},
  {name: 'description', content: 'Privacy, shipping, returns and terms.'},
];

export async function loader({context}: Route.LoaderArgs) {
  // Policies may not exist on Mock.shop — never 404 the index.
  let policies: PolicyItemFragment[] = [];
  try {
    const data: PoliciesQuery = await context.storefront.query(POLICIES_QUERY);
    const shop = data.shop;
    policies = [
      shop?.privacyPolicy,
      shop?.shippingPolicy,
      shop?.termsOfService,
      shop?.refundPolicy,
      shop?.subscriptionPolicy,
    ].filter((p): p is PolicyItemFragment => p != null);
  } catch {
    policies = [];
  }

  return {policies};
}

// fallback list — shown when the shop has no policies yet (Mock.shop or pre-launch)
const FALLBACK = [
  {title: 'Privacy policy', handle: 'privacy-policy'},
  {title: 'Shipping policy', handle: 'shipping-policy'},
  {title: 'Terms of service', handle: 'terms-of-service'},
  {title: 'Refund policy', handle: 'refund-policy'},
];

export default function Policies() {
  const {policies} = useLoaderData<typeof loader>();
  const items = policies.length > 0 ? policies : FALLBACK;

  return (
    <>
      <PageHero
        eyebrow="The policies"
        headline="Honest"
        serif="specifics"
        lede="Privacy, shipping, refunds, terms. The boring legal-grade reading — kept plain and easy to find."
      />

      <section className="etch-section ivory">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Read</p>
            <h2>
              All policies, <span className="serif">in one place</span>.
            </h2>
          </div>
          <div className="policy-list" data-reveal>
            {items.map((p) => (
              <Link
                className="policy-row"
                key={p.handle}
                to={`/policies/${p.handle}`}
                prefetch="intent"
              >
                <span className="policy-name">{p.title}</span>
                <span className="policy-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
          {policies.length === 0 ? (
            <p className="lede" style={{marginTop: 28}}>
              Mock.shop hasn’t published policies yet — the entries above link
              to where they’ll live. Once the live Shopify store is wired, each
              page renders its real body.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}

const POLICIES_QUERY = `#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }
  query Policies ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy { ...PolicyItem }
      shippingPolicy { ...PolicyItem }
      termsOfService { ...PolicyItem }
      refundPolicy { ...PolicyItem }
      subscriptionPolicy { id title handle }
    }
  }
` as const;
