import {Analytics, getShopAnalytics, useNonce} from '@shopify/hydrogen';
import {
  Outlet,
  useRouteError,
  isRouteErrorResponse,
  type ShouldRevalidateFunction,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
  Link,
} from 'react-router';
import type {Route} from './+types/root';
import {FOOTER_QUERY, HEADER_QUERY} from '~/lib/fragments';
import resetStyles from '~/styles/reset.css?url';
import appStyles from '~/styles/app.css?url';
import {PageLayout} from './components/PageLayout';
import {Grain} from './components/Grain';
import {SmoothScroll} from './components/SmoothScroll';
import {useReveal} from './hooks/useReveal';

export type RootLoader = typeof loader;

export const shouldRevalidate: ShouldRevalidateFunction = ({
  formMethod,
  currentUrl,
  nextUrl,
}) => {
  if (formMethod && formMethod !== 'GET') return true;
  if (currentUrl.toString() === nextUrl.toString()) return true;
  return false;
};

/**
 * Default site-wide meta — title, description, social share defaults.
 * Per-route meta() overrides these.
 */
export const meta: Route.MetaFunction = () => [
  {title: 'ETCH — Definition, engineered'},
  {
    name: 'description',
    content:
      'Premium EMS for tone and strength. Twenty minutes of deep activation, the 8-week Method, the founding release.',
  },
  {name: 'theme-color', content: '#141009'},
  {property: 'og:type', content: 'website'},
  {property: 'og:site_name', content: 'ETCH'},
  {property: 'og:title', content: 'ETCH — Definition, engineered'},
  {
    property: 'og:description',
    content:
      'Premium EMS for tone and strength. Twenty minutes of deep activation, the 8-week Method, the founding release.',
  },
  {name: 'twitter:card', content: 'summary_large_image'},
  {name: 'twitter:title', content: 'ETCH — Definition, engineered'},
  {
    name: 'twitter:description',
    content:
      'Premium EMS for tone and strength. Twenty minutes of deep activation.',
  },
];

export function links() {
  return [
    {rel: 'preconnect', href: 'https://cdn.shopify.com'},
    {rel: 'preconnect', href: 'https://shop.app'},
    {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=IBM+Plex+Mono:wght@400;500&display=swap',
    },
    {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
    {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png'},
    {rel: 'icon', href: '/favicon.ico', sizes: 'any'},
    {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
    {rel: 'manifest', href: '/site.webmanifest'},
  ];
}

export async function loader(args: Route.LoaderArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  const {storefront, env} = args.context;

  return {
    ...deferredData,
    ...criticalData,
    publicStoreDomain: env.PUBLIC_STORE_DOMAIN,
    shop: getShopAnalytics({
      storefront,
      publicStorefrontId: env.PUBLIC_STOREFRONT_ID,
    }),
    consent: {
      checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
      storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
      withPrivacyBanner: false,
      country: args.context.storefront.i18n.country,
      language: args.context.storefront.i18n.language,
    },
  };
}

async function loadCriticalData({context}: Route.LoaderArgs) {
  const {storefront} = context;
  const [header] = await Promise.all([
    storefront.query(HEADER_QUERY, {
      cache: storefront.CacheLong(),
      variables: {headerMenuHandle: 'main-menu'},
    }),
  ]);
  return {header};
}

function loadDeferredData({context}: Route.LoaderArgs) {
  const {storefront, customerAccount, cart} = context;
  const footer = storefront
    .query(FOOTER_QUERY, {
      cache: storefront.CacheLong(),
      variables: {footerMenuHandle: 'footer'},
    })
    .catch((error: Error) => {
      console.error(error);
      return null;
    });
  return {
    cart: cart.get(),
    isLoggedIn: customerAccount.isLoggedIn(),
    footer,
  };
}

export function Layout({children}: {children?: React.ReactNode}) {
  const nonce = useNonce();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#141009" />
        <link rel="stylesheet" href={resetStyles} />
        <link rel="stylesheet" href={appStyles} />
        <Meta />
        <Links />
      </head>
      <body>
        <Grain />
        <SmoothScroll />
        {children}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

export default function App() {
  const data = useRouteLoaderData<RootLoader>('root');
  useReveal();

  if (!data) {
    return <Outlet />;
  }

  return (
    <Analytics.Provider
      cart={data.cart}
      shop={data.shop}
      consent={data.consent}
    >
      <PageLayout {...data}>
        <Outlet />
      </PageLayout>
    </Analytics.Provider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;
  let isFourOhFour = false;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
    isFourOhFour = error.status === 404;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  if (isFourOhFour) {
    return <NotFoundScreen />;
  }

  return (
    <div className="route-error">
      <h1>Something stalled</h1>
      <h2>{errorStatus}</h2>
      {errorMessage && (
        <fieldset>
          <pre>{errorMessage}</pre>
        </fieldset>
      )}
      <div style={{marginTop: 28, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
        <Link className="btn" to="/">Back to the homepage</Link>
        <Link className="btn-ghost" to="/pages/contact">Contact support →</Link>
      </div>
    </div>
  );
}

function NotFoundScreen() {
  return (
    <div className="not-found">
      <div className="wrap" data-reveal>
        <svg className="nf-engrave" viewBox="0 0 200 280" aria-hidden="true">
          <g stroke="var(--brass)" strokeWidth="1" fill="none" opacity=".6">
            <path d="M100 20 L100 260" opacity=".24" />
            <path d="M50 60 C70 44 130 44 150 60" />
            <path d="M40 100 C70 76 130 76 160 100" />
            <path d="M36 140 C68 116 132 116 164 140" />
            <path d="M40 180 C70 160 130 160 160 180" />
            <path d="M50 220 C72 206 128 206 150 220" />
            <path d="M68 250 C84 240 116 240 132 250" />
          </g>
        </svg>
        <p className="eyebrow" style={{justifyContent: 'center', color: 'var(--brass-light)'}}>404 · Off the map</p>
        <h1>
          This page isn't <span className="serif">in the protocol.</span>
        </h1>
        <p className="lede">
          The link you followed doesn't lead anywhere we've built. The work is
          back this way.
        </p>
        <div className="cta-row">
          <Link className="btn" to="/">Back to the homepage</Link>
          <Link className="btn-ghost" to="/pages/the-method">Read the Method →</Link>
        </div>
      </div>
    </div>
  );
}
