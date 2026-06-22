import type {Route} from './+types/api.cohort';

/**
 * Cohort newsletter signup — resource route used by both the homepage email
 * capture and the footer newsletter form (via `useFetcher`).
 *
 * Creates a Shopify customer with a random password. Subscribing them to
 * marketing has to be enabled separately in the Shopify admin notification
 * settings (post-2025 SF API removed `acceptsMarketing` on `customerCreate`
 * — emails are flagged for confirmation instead).
 *
 * For higher volume / better deliverability, swap the action body for a
 * Klaviyo / Mailchimp / Customer.io POST. The contract is the same: read
 * `email`, return `{ok: boolean; message: string}`.
 */
export async function action({request, context}: Route.ActionArgs) {
  const formData = await request.formData();
  const email = String(formData.get('email') ?? '').trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {ok: false, message: 'Please enter a valid email.'};
  }
  if (!context.env.PUBLIC_STORE_DOMAIN) {
    return {
      ok: false,
      message:
        'The store isn’t linked yet — cohort signup will activate once it is.',
    };
  }
  try {
    const password = `etch_${crypto.randomUUID()}`;
    const {customerCreate} = await context.storefront.mutate(
      CUSTOMER_CREATE_MUTATION,
      {variables: {input: {email, password}}},
    );
    const err = customerCreate?.customerUserErrors?.[0];
    if (err) {
      if (err.code === 'CUSTOMER_DISABLED' || err.code === 'TAKEN') {
        return {ok: true, message: 'You’re on the list.'};
      }
      return {ok: false, message: err.message || 'Something stalled. Try again.'};
    }
    return {ok: true, message: 'You’re on the list — watch for No. 001.'};
  } catch {
    return {ok: false, message: 'Something stalled. Try again.'};
  }
}

/** GET → 405, this route is action-only. */
export async function loader() {
  return new Response('Method not allowed', {status: 405});
}

const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation CohortCustomerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer { id }
      customerUserErrors { code field message }
    }
  }
` as const;
