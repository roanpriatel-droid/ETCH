import {Await, useLoaderData, Link} from 'react-router';
import type {Route} from './+types/_index';
import {Suspense} from 'react';
import type {RecommendedProductsQuery} from 'storefrontapi.generated';
import {ProductItem} from '~/components/ProductItem';
import {MockShopNotice} from '~/components/MockShopNotice';

export const meta: Route.MetaFunction = () => {
  return [{title: 'ETCH — Definition, engineered'}];
};

export async function loader(args: Route.LoaderArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context}: Route.LoaderArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
  ]);
  return {
    isShopLinked: Boolean(context.env.PUBLIC_STORE_DOMAIN),
    featuredCollection: collections.nodes[0],
  };
}

function loadDeferredData({context}: Route.LoaderArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error: Error) => {
      console.error(error);
      return null;
    });
  return {recommendedProducts};
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="home">
      {data.isShopLinked ? null : <MockShopNotice />}
      <Hero />
      <Mechanism />
      <Instruments products={data.recommendedProducts} />
      <Method />
      <Founding />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <header className="etch-hero">
      <div className="wrap">
        <div>
          <p className="eyebrow">EMS muscle activation</p>
          <h1>
            Definition,
            <br />
            <span className="serif">engineered.</span>
          </h1>
          <p className="lede">
            Twenty-minute sessions of deep electrical muscle activation — firing
            the fibres ordinary training leaves dormant. Build a stronger, more
            defined body on your schedule.
          </p>
          <div className="cta-row">
            <Link className="btn" to="/collections/all">
              Build your kit
            </Link>
            <Link className="btn-ghost" to="/pages/the-method">
              See how it works →
            </Link>
          </div>
          <div className="trust">
            <div className="item">
              <div className="k">Rated</div>
              <div className="v">
                <span className="stars">★★★★★</span> 4.9 / 2,300+
              </div>
            </div>
            <div className="item">
              <div className="k">Guarantee</div>
              <div className="v">60 nights, refunded</div>
            </div>
            <div className="item">
              <div className="k">Shipping</div>
              <div className="v">Free, carbon-neutral</div>
            </div>
          </div>
        </div>
        <div className="hero-figure">
          <Engraving />
        </div>
      </div>
    </header>
  );
}

/* ---------------- MECHANISM ---------------- */
function Mechanism() {
  const cells = [
    {
      n: '01 — ACTIVATE',
      h: 'Reach what you can’t recruit',
      p: 'Electrical impulses contract the deep fibres voluntary effort rarely reaches — every session, with no load on the joint.',
    },
    {
      n: '02 — DEFINE',
      h: 'Tone and strengthen',
      p: 'Twelve modes, nineteen intensities. Progressive overload you dial in by feel, building visible definition through the muscle.',
    },
    {
      n: '03 — RECOVER',
      h: 'Flush, on the off days',
      p: 'Low-frequency cycles drive circulation through worked tissue to ease soreness — so it earns its place on rest days too.',
    },
  ];
  return (
    <section className="etch-section bone">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">The method</p>
          <h2>
            Not a shortcut. A <span className="serif">second channel</span> to
            the muscle.
          </h2>
        </div>
        <div className="mech-grid">
          {cells.map((c) => (
            <div className="mech-cell" key={c.n}>
              <div className="n">{c.n}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSTRUMENTS (products) ---------------- */
function Instruments({
  products,
}: {
  products: Promise<RecommendedProductsQuery | null>;
}) {
  return (
    <section className="etch-section paper">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">The instruments</p>
          <h2>
            One system. <span className="serif">Two</span> places to sculpt.
          </h2>
        </div>
        <Suspense fallback={<div>Loading…</div>}>
          <Await resolve={products}>
            {(response) => (
              <div className="shop-grid">
                {response
                  ? response.products.nodes.map((product) => (
                      <ProductItem key={product.id} product={product} />
                    ))
                  : null}
              </div>
            )}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}

/* ---------------- THE METHOD ---------------- */
function Method() {
  const rows = [
    'The 8-week protocol, matched to your device',
    'Exact settings, sessions and intensity ramps',
    'The training and fuel that reveal the work',
    'Free with every device — yours forever',
  ];
  return (
    <section className="etch-section plate">
      <div className="wrap method">
        <div>
          <p className="eyebrow">The protocol</p>
          <h2>
            A device gives you a tool.
            <br />
            <span className="serif">The Method</span> gives you the system.
          </h2>
          <p className="lede" style={{color: 'rgba(246,242,234,.74)'}}>
            Eight weeks of the exact settings, sessions, training and fuel that
            turn activation into a visibly defined result — included with every
            ETCH device.
          </p>
          <Link className="btn" to="/pages/the-method" style={{marginTop: 8}}>
            Read the Method
          </Link>
        </div>
        <div className="method-card">
          {rows.map((r) => (
            <div className="row" key={r}>
              <Check />
              <span>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOUNDING BAND ---------------- */
function Founding() {
  return (
    <section className="etch-section plate founding" style={{paddingTop: 0}}>
      <div className="wrap">
        <div>
          <p className="eyebrow">Founding release · No. 001</p>
          <h2>
            The first run is <span className="serif">numbered</span> — and
            limited.
          </h2>
        </div>
        <div className="founding-meta">
          <div className="meter">
            <i />
          </div>
          <div className="meter-label">
            <span>Allocation claimed</span>
            <span>68%</span>
          </div>
          <div className="guarantee">
            <Shield />
            Train for 60 nights. Send it back for a full refund if it isn’t for
            you.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- icons / art ---------------- */
function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function Shield() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brass-soft)" strokeWidth="1.6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function Engraving() {
  return (
    <svg viewBox="0 0 400 460" aria-hidden="true">
      <path className="engrave faint" d="M200 40 L200 420" />
      <g className="engrave">
        <path d="M120 90 C150 70 250 70 280 90" />
        <path d="M108 130 C150 104 250 104 292 130" />
        <path d="M100 175 C145 146 255 146 300 175" />
        <path d="M98 222 C145 192 255 192 302 222" />
        <path d="M100 270 C148 240 252 240 300 270" />
        <path d="M108 316 C152 288 248 288 292 316" />
        <path d="M120 360 C158 336 242 336 280 360" />
        <path d="M140 398 C168 382 232 382 260 398" />
      </g>
      <g className="engrave">
        <path d="M150 150 C140 175 140 200 150 222" />
        <path d="M250 150 C260 175 260 200 250 222" />
        <path d="M152 250 C142 272 142 294 152 314" />
        <path d="M248 250 C258 272 258 294 248 314" />
      </g>
      <rect x="158" y="196" width="84" height="118" rx="22" fill="none" stroke="var(--brass-soft)" strokeWidth="1.4" opacity=".85" />
      <circle cx="200" cy="240" r="9" fill="none" stroke="var(--brass-soft)" strokeWidth="1.2" />
      <circle cx="200" cy="240" r="3" fill="var(--brass)" />
    </svg>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image { id url altText width height }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes { ...FeaturedCollection }
    }
  }
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange { minVariantPrice { amount currencyCode } }
    featuredImage { id url altText width height }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes { ...RecommendedProduct }
    }
  }
` as const;
