import {useLoaderData, Link} from 'react-router';
import type {Route} from './+types/_index';
import {MockShopNotice} from '~/components/MockShopNotice';
import {DEVICES, THE_SET, type EtchProduct} from '~/lib/etch-products';

export const meta: Route.MetaFunction = () => {
  return [{title: 'ETCH — Definition, engineered'}];
};

export async function loader({context}: Route.LoaderArgs) {
  return {
    isShopLinked: Boolean(context.env.PUBLIC_STORE_DOMAIN),
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="home">
      {data.isShopLinked ? null : <MockShopNotice />}
      <Hero />
      <TrustStrip />
      <ProductsShowcase />
      <SetBand />
      <HowItWorks />
      <Method />
      <Results />
      <Founding />
      <Faq />
      <EmailCapture />
    </div>
  );
}

/* ================================================================
   HERO — full viewport, ember-bg, engraving backdrop + framed device
   ================================================================ */
function Hero() {
  return (
    <header className="etch-hero">
      <div className="wrap">
        <div data-reveal>
          <p className="eyebrow">EMS muscle activation</p>
          <h1>
            Definition,
            <br />
            <span className="serif">engineered.</span>
          </h1>
          <p className="lede">
            Twenty minutes of deep EMS — recruiting the fibres voluntary effort
            leaves dormant. The 8-week protocol that turns activation into a
            visibly defined result.
          </p>
          <div className="cta-row">
            <Link className="btn" to={THE_SET.url}>
              Build your kit
            </Link>
            <Link className="btn-ghost" to="/pages/science">
              See the science →
            </Link>
          </div>
          <div className="trust">
            <div className="item">
              <div className="k">Rated</div>
              <div className="v">
                <span className="stars">★★★★★</span> 4.9 · 2,300+ reviews
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
        <div
          className="hero-stage"
          data-reveal
          style={{['--reveal-delay' as string]: '140ms'}}
        >
          <HeroEngrave />
          <div className="hero-frame">
            <DeviceOutline />
          </div>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <span className="cue-bar" />
      </div>
    </header>
  );
}

/* ================================================================
   TRUST STRIP — placeholder review numbers + "as featured in" logos
   (replace with real PR placements + verified review counts when live)
   ================================================================ */
const STATS = [
  {k: 'Trained', v: '40,000+'},
  {k: 'Rating', v: '4.9 ★'},
  {k: 'Modes', v: '12'},
  {k: 'Warranty', v: '2-year'},
];

const LOGOS = ['FORBES', 'GQ', 'MEN’S HEALTH', 'WIRED'];

function TrustStrip() {
  return (
    <section className="trust-strip" data-reveal>
      <div className="wrap">
        <div className="stat-grid">
          {STATS.map((s) => (
            <div className="stat-cell" key={s.k}>
              <div className="k">{s.k}</div>
              <div className="v">{s.v}</div>
            </div>
          ))}
        </div>
        <div className="logo-row">
          <span className="label">As featured in</span>
          {LOGOS.map((l) => (
            <span className="logo-slot" key={l}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PRODUCTS SHOWCASE — config-driven, always renders Core + Form
   ================================================================ */
function ProductsShowcase() {
  return (
    <section className="etch-section ivory">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">The instruments</p>
          <h2>
            One system. <span className="serif">Two</span> places to sculpt.
          </h2>
          <p className="lede">
            Each Flux device is calibrated to its muscle group and ships with
            the matching ETCH Method protocol — the eight-week system that
            turns activation into a visibly defined result.
          </p>
        </div>
        <div className="products-row">
          {DEVICES.map((p, i) => (
            <ProductCardLg key={p.handle} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCardLg({
  product,
  index,
}: {
  product: EtchProduct;
  index: number;
}) {
  const [head, tail] = product.name.split('—').map((s) => s.trim());
  return (
    <article
      className="product-card-lg"
      data-reveal
      style={{['--reveal-delay' as string]: `${index * 100}ms`}}
    >
      <div className="pc-image">
        <DeviceOutline />
      </div>
      <div className="pc-body">
        <span className="pc-target">{product.target}</span>
        <h3 className="pc-name">
          {head}
          {tail ? (
            <>
              {' — '}
              <span className="serif">{tail}</span>
            </>
          ) : null}
        </h3>
        <p className="pc-tag">{product.tagline}</p>
        <ul className="pc-bullets">
          {product.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="pc-foot">
          <span className="pc-price">{product.price}</span>
          <div className="pc-actions">
            <Link className="btn" to={product.url}>
              Add to cart
            </Link>
            <Link className="btn-ghost" to={product.url}>
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ================================================================
   THE SET — bundle band on dark ember
   ================================================================ */
function SetBand() {
  return (
    <section className="set-band">
      <div className="wrap">
        <div data-reveal>
          <p className="eyebrow">The complete physique</p>
          <h2>
            Both. <span className="serif">For the complete</span> physique.
          </h2>
          <p className="lede">
            Flux Core + Flux Form together — abs, obliques and glutes activated
            on one protocol. Includes <em className="serif">The ETCH Method:
            Complete</em> free with the Set.
          </p>
          <span className="set-tag">Save $49 · Best value</span>
          <div className="set-cta-row">
            <span className="price">
              <s>$398</s>
              {THE_SET.price}
            </span>
            <Link className="btn" to={THE_SET.url}>
              Get the Set
            </Link>
          </div>
        </div>
        <div
          className="set-stage"
          data-reveal
          style={{['--reveal-delay' as string]: '160ms'}}
        >
          <div className="set-frame">
            <DeviceOutline />
            <DeviceOutline />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   HOW IT WORKS — oversized numerals
   ================================================================ */
const HIW_STEPS = [
  {
    n: '01',
    t: 'Activate',
    s: 'Reach what you can’t recruit',
    p: 'Electrical impulses contract the deep fibres voluntary effort rarely reaches — every session, with no load on the joint.',
  },
  {
    n: '02',
    t: 'Define',
    s: 'Tone and strengthen',
    p: 'Twelve modes, nineteen intensities. Progressive overload you dial in by feel, building visible definition through the muscle.',
  },
  {
    n: '03',
    t: 'Recover',
    s: 'Flush, on the off days',
    p: 'Low-frequency cycles drive circulation through worked tissue to ease soreness — so it earns its place on rest days too.',
  },
];

function HowItWorks() {
  return (
    <section className="etch-section ivory">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">How it works</p>
          <h2>
            Not a shortcut. A <span className="serif">second channel</span> to
            the muscle.
          </h2>
        </div>
        <div className="hiw-grid">
          {HIW_STEPS.map((s, i) => (
            <div
              className="hiw-cell"
              key={s.n}
              data-reveal
              style={{['--reveal-delay' as string]: `${i * 110}ms`}}
            >
              <div className="numeral">{s.n}</div>
              <SmallEngrave className="hiw-engrave" />
              <h3>
                {s.t} — <span className="serif">{s.s}</span>
              </h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   THE METHOD — kept and upgraded
   ================================================================ */
function Method() {
  const rows = [
    'The 8-week protocol, matched to your device',
    'Exact settings, sessions and intensity ramps',
    'The training and fuel that reveal the work',
    'Included free with every ETCH device',
  ];
  return (
    <section className="etch-section plate">
      <div className="wrap method">
        <div data-reveal>
          <p className="eyebrow">The protocol</p>
          <h2>
            A device gives you a tool.
            <br />
            <span className="serif">The Method</span> gives you the system.
          </h2>
          <p className="lede">
            Eight weeks of the exact settings, sessions, training and fuel that
            turn activation into a visibly defined result — included with every
            ETCH device.
          </p>
          <Link className="btn" to="/pages/the-method" style={{marginTop: 8}}>
            Read the Method
          </Link>
        </div>
        <div
          className="method-card"
          data-reveal
          style={{['--reveal-delay' as string]: '140ms'}}
        >
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

/* ================================================================
   RESULTS — testimonials
   (PLACEHOLDER COPY — illustrative reviews until real ones exist)
   ================================================================ */
const TESTIMONIALS = [
  {
    quote:
      'Twenty minutes after work was simple. The contraction is unmistakable — by week six my obliques were sharper than I’d seen them in years.',
    name: 'Marcus T.',
    where: 'Verified owner — Toronto, ON',
    stars: 5,
  },
  {
    quote:
      'I used Flux Form during a lower-volume training block. The protocol made it easy to know exactly when, how long, and at what intensity.',
    name: 'Priya R.',
    where: 'Verified owner — Brooklyn, NY',
    stars: 5,
  },
  {
    quote:
      'The Method PDF is what I underestimated. Eight weeks of removed guesswork — the device just executes the plan.',
    name: 'Daniel K.',
    where: 'Verified owner — Berlin, DE',
    stars: 5,
  },
];

function Results() {
  return (
    <section className="etch-section parchment">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">From the cohort</p>
          <h2>
            The work, <span className="serif">noticed</span>.
          </h2>
          <p className="lede">
            Reports from owners on the eight-week protocol — tone and
            strengthen, on their own schedule. Individual results vary.
          </p>
        </div>
        <div className="results-grid">
          {TESTIMONIALS.map((t, i) => (
            <article
              className="testimonial"
              key={t.name}
              data-reveal
              style={{['--reveal-delay' as string]: `${i * 100}ms`}}
            >
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="who">
                <div>
                  <div className="name">{t.name}</div>
                  <div className="where">{t.where}</div>
                </div>
                <span className="verified-badge">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Verified
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   FOUNDING RELEASE — scarcity band (oxblood accent)
   ================================================================ */
function Founding() {
  return (
    <section className="etch-section plate founding">
      <div className="wrap">
        <div data-reveal>
          <span className="founding-tag">Founding release · No. 001</span>
          <h2>
            Numbered. <span className="serif">Limited.</span>
          </h2>
        </div>
        <div
          className="founding-meta"
          data-reveal
          style={{['--reveal-delay' as string]: '120ms'}}
        >
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

/* ================================================================
   FAQ — native <details> accordion (compliance-safe answers)
   ================================================================ */
const FAQS = [
  {
    q: 'What exactly does ETCH do?',
    a: 'EMS delivers a precisely-timed electrical impulse to the muscle, recruiting deep fibres that voluntary effort rarely reaches. It tones and strengthens — used alongside training and good fuel, definition builds across the eight-week protocol.',
  },
  {
    q: 'Will I lose weight or burn fat with it?',
    a: 'No. ETCH is not a weight-loss or fat-reduction device. It is a tone-and-strengthen instrument. Body composition change still comes from training, sleep and nutrition; The ETCH Method covers exactly how to align those alongside the device.',
  },
  {
    q: 'Does it hurt?',
    a: 'No. A strong, firm contraction, never sharp pain. If it stings, lower the intensity and check pad placement. The 20-minute session is designed to feel demanding — but tolerable from session one.',
  },
  {
    q: 'When will I see results?',
    a: 'Most owners feel the muscle firm up within 2–3 weeks. Visible change builds across the full eight weeks of the protocol with consistent training and fuel. Individual results vary with effort, physiology and adherence.',
  },
  {
    q: 'Who should not use it?',
    a: 'Do not use EMS with a pacemaker or implanted electronic device, a heart condition, epilepsy, or during pregnancy. Avoid use over open wounds or broken skin. Consult a physician if unsure.',
  },
  {
    q: 'How long do the gel pads last?',
    a: 'About 25 sessions per set. Refills are available on subscription at roughly $24/month, so you’re never caught short between sessions.',
  },
];

function Faq() {
  return (
    <section className="etch-section ivory">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">Questions, answered</p>
          <h2>
            The honest <span className="serif">specifics</span>.
          </h2>
        </div>
        <div className="faq-list" data-reveal>
          {FAQS.map((qa) => (
            <details className="faq-item" key={qa.q}>
              <summary>
                <span>{qa.q}</span>
                <span className="faq-toggle" aria-hidden="true">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="faq-answer">{qa.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   EMAIL CAPTURE — founding cohort signup (presentational)
   ================================================================ */
function EmailCapture() {
  return (
    <section className="email-capture">
      <div className="wrap">
        <div data-reveal>
          <p className="eyebrow">No. 001 · Founding cohort</p>
          <h2>
            Be among the first to <span className="serif">forge</span>.
          </h2>
          <p className="lede">
            The first run is numbered and limited. Join the cohort for early
            access, the founding price, and the eight-week protocol the day it
            ships.
          </p>
        </div>
        <form
          className="email-form"
          data-reveal
          style={{['--reveal-delay' as string]: '120ms'}}
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="label" htmlFor="email-cohort">
            Reserve your unit
          </label>
          <div className="row">
            <input
              id="email-cohort"
              type="email"
              required
              placeholder="you@anywhere.com"
              autoComplete="email"
            />
            <button type="submit" className="btn">
              Join the cohort
            </button>
          </div>
          <p className="fine">
            One email a week, no fluff. We never share your address — see our{' '}
            <a href="/policies/privacy-policy">privacy policy</a>.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ================================================================
   ICONS / ENGRAVING ART
   ================================================================ */
function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Shield() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--brass-light)"
      strokeWidth="1.6"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function SmallEngrave({className}: {className?: string}) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <g
        stroke="var(--brass)"
        strokeWidth=".8"
        fill="none"
        opacity=".8"
      >
        <path d="M14 18 C22 12 42 12 50 18" />
        <path d="M12 28 C22 22 42 22 52 28" />
        <path d="M14 38 C22 32 42 32 50 38" />
        <path d="M18 48 C24 44 40 44 46 48" />
      </g>
    </svg>
  );
}

/* Hero engraving — pure body-contour intaglio, no embedded device */
function HeroEngrave() {
  return (
    <svg
      className="hero-engrave engrave-draw"
      viewBox="0 0 600 720"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      data-reveal
    >
      <g className="engrave">
        <path className="faint" d="M300 30 L300 700" />
        <path d="M180 110 C220 80 380 80 420 110" />
        <path d="M160 170 C210 130 390 130 440 170" />
        <path d="M150 235 C205 195 395 195 450 235" />
        <path d="M148 308 C205 268 395 268 452 308" />
        <path d="M150 386 C208 345 392 345 450 386" />
        <path d="M158 460 C212 420 388 420 442 460" />
        <path d="M174 530 C220 498 380 498 426 530" />
        <path d="M200 596 C238 574 362 574 400 596" />
        <path d="M230 658 C260 644 340 644 370 658" />
        <path d="M225 200 C210 250 210 320 225 386" />
        <path d="M375 200 C390 250 390 320 375 386" />
        <path d="M232 420 C218 460 218 498 232 530" />
        <path d="M368 420 C382 460 382 498 368 530" />
      </g>
    </svg>
  );
}

/* Device outline — stylized Flux silhouette for frame slots */
function DeviceOutline() {
  return (
    <svg
      className="device-outline"
      viewBox="0 0 240 320"
      aria-hidden="true"
    >
      {/* outer body */}
      <rect
        x="58"
        y="60"
        width="124"
        height="220"
        rx="44"
        fill="none"
        stroke="var(--brass-light)"
        strokeWidth="1.4"
        opacity=".9"
      />
      {/* inner panel */}
      <rect
        x="72"
        y="74"
        width="96"
        height="192"
        rx="34"
        fill="none"
        stroke="var(--brass)"
        strokeWidth="1"
        opacity=".55"
      />
      {/* pulse lines */}
      <g stroke="var(--brass)" strokeWidth=".8" opacity=".5">
        <line x1="86" y1="118" x2="154" y2="118" />
        <line x1="86" y1="136" x2="154" y2="136" />
        <line x1="86" y1="208" x2="154" y2="208" />
        <line x1="86" y1="226" x2="154" y2="226" />
      </g>
      {/* upper waveform */}
      <path
        d="M86 96 Q98 88 110 96 T134 96 T158 96"
        stroke="var(--brass)"
        strokeWidth=".9"
        fill="none"
        opacity=".6"
      />
      {/* lower waveform */}
      <path
        d="M86 248 Q98 240 110 248 T134 248 T158 248"
        stroke="var(--brass)"
        strokeWidth=".9"
        fill="none"
        opacity=".6"
      />
      {/* SmartWave indicator */}
      <circle
        cx="120"
        cy="170"
        r="14"
        stroke="var(--brass)"
        strokeWidth="1"
        fill="none"
        opacity=".7"
      />
      <circle cx="120" cy="170" r="7" fill="var(--brass-light)" />
      <circle cx="120" cy="170" r="3" fill="var(--obsidian)" />
    </svg>
  );
}
