import {Link, useLoaderData} from 'react-router';
import type {Route} from './+types/policies.$handle';
import {type Shop} from '@shopify/hydrogen/storefront-api-types';
import {PageHero} from '~/components/PageHero';

type SelectedPolicies = keyof Pick<
  Shop,
  'privacyPolicy' | 'shippingPolicy' | 'termsOfService' | 'refundPolicy'
>;

const POLICY_TITLES: Record<string, string> = {
  'privacy-policy': 'Privacy policy',
  'shipping-policy': 'Shipping policy',
  'terms-of-service': 'Terms of service',
  'refund-policy': 'Refund policy',
};

export const meta: Route.MetaFunction = ({data}) => [
  {title: `${data?.policy?.title ?? 'Policy'} — ETCH`},
  {
    name: 'description',
    content: 'ETCH policy — privacy, shipping, refunds and terms.',
  },
];

export async function loader({params, context}: Route.LoaderArgs) {
  if (!params.handle) {
    throw new Response('No handle was passed in', {status: 404});
  }

  const policyName = params.handle.replace(
    /-([a-z])/g,
    (_: unknown, m1: string) => m1.toUpperCase(),
  ) as SelectedPolicies;

  let policy: {title: string; body: string; handle: string} | null = null;
  try {
    const data = await context.storefront.query(POLICY_CONTENT_QUERY, {
      variables: {
        privacyPolicy: false,
        shippingPolicy: false,
        termsOfService: false,
        refundPolicy: false,
        [policyName]: true,
        language: context.storefront.i18n?.language,
      },
    });
    const raw = data.shop?.[policyName];
    if (raw) {
      policy = {title: raw.title, body: raw.body, handle: raw.handle};
    }
  } catch {
    policy = null;
  }

  return {
    handle: params.handle,
    policy,
  };
}

export default function Policy() {
  const {handle, policy} = useLoaderData<typeof loader>();
  const fallbackTitle = POLICY_TITLES[handle] ?? 'Policy';

  return (
    <>
      <PageHero
        eyebrow="Policy"
        headline={policy?.title?.split(' ').slice(0, -1).join(' ') || fallbackTitle.split(' ').slice(0, -1).join(' ') || 'The'}
        serif={
          policy?.title?.split(' ').slice(-1)[0] ||
          fallbackTitle.split(' ').slice(-1)[0] ||
          'policy'
        }
        lede="Read in full. Updated when the policy itself changes."
      />

      <section className="etch-section ivory">
        <div className="wrap">
          <div className="policy-back" data-reveal>
            <Link to="/policies" prefetch="intent">
              ← All policies
            </Link>
          </div>
          {policy ? (
            <article
              className="policy-body prose-html"
              data-reveal
              dangerouslySetInnerHTML={{__html: policy.body}}
            />
          ) : (
            <div className="empty-state" data-reveal>
              <p className="eyebrow">Pending publication</p>
              <h2>
                Body copy is being <span className="serif">finalised</span>.
              </h2>
              <p className="lede">
                This policy will be published when the live Shopify store is
                wired. The substance — 60-night money-back on devices, 2-year
                warranty, free carbon-neutral shipping, no hidden fees — is
                already in force.
              </p>
              <div style={{display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap'}}>
                <Link className="btn" to="/pages/contact" prefetch="intent">
                  Contact support
                </Link>
                <Link className="btn-ghost" to="/policies" prefetch="intent">
                  All policies →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

const POLICY_CONTENT_QUERY = `#graphql
  fragment Policy on ShopPolicy {
    body
    handle
    id
    title
    url
  }
  query Policy(
    $country: CountryCode
    $language: LanguageCode
    $privacyPolicy: Boolean!
    $refundPolicy: Boolean!
    $shippingPolicy: Boolean!
    $termsOfService: Boolean!
  ) @inContext(language: $language, country: $country) {
    shop {
      privacyPolicy @include(if: $privacyPolicy) { ...Policy }
      shippingPolicy @include(if: $shippingPolicy) { ...Policy }
      termsOfService @include(if: $termsOfService) { ...Policy }
      refundPolicy @include(if: $refundPolicy) { ...Policy }
    }
  }
` as const;
