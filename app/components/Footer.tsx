import {useEffect, useRef} from 'react';
import {useFetcher, NavLink} from 'react-router';

type Col = {heading: string; links: {label: string; to: string}[]};

const COLS: Col[] = [
  {
    heading: 'Shop',
    links: [
      {label: 'Flux Core — Abs', to: '/products/etch-flux-core'},
      {label: 'Flux Form — Glutes', to: '/products/etch-flux-form'},
      {label: 'The ETCH Set', to: '/products/the-etch-set'},
      {label: 'Method: Core', to: '/products/the-etch-method-core'},
      {label: 'Method: Form', to: '/products/the-etch-method-form'},
      {label: 'Pad refills', to: '/products/flux-pads'},
    ],
  },
  {
    heading: 'Learn',
    links: [
      {label: 'The Method', to: '/pages/the-method'},
      {label: 'The science', to: '/pages/science'},
      {label: 'How to use', to: '/pages/how-to-use'},
      {label: 'Journal', to: '/blogs/journal'},
      {label: 'FAQ', to: '/pages/faq'},
    ],
  },
  {
    heading: 'Help',
    links: [
      {label: 'Contact', to: '/pages/contact'},
      {label: 'Returns — 60 nights', to: '/pages/returns'},
      {label: 'Warranty — 2 years', to: '/pages/warranty'},
      {label: 'Subscription', to: '/pages/subscription'},
      {label: 'Policies', to: '/policies'},
    ],
  },
];

const COMMITMENTS = [
  'Free, carbon-neutral shipping',
  '60-night money-back',
  '2-year warranty',
  'Secure checkout',
  'No fake price anchors',
];

/** Plain-text payment marks — replace with SVG sprites if/when brand allows */
const PAYMENT_MARKS = [
  'Visa',
  'Mastercard',
  'Amex',
  'Apple Pay',
  'Shop Pay',
  'PayPal',
  'Klarna',
];

const SOCIALS = [
  {label: 'Instagram', href: 'https://instagram.com/etch', icon: <Igl />},
  {label: 'TikTok', href: 'https://tiktok.com/@etch', icon: <Tkl />},
  {label: 'YouTube', href: 'https://youtube.com/@etch', icon: <Ytb />},
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-mark">
              ETCH<span className="dot">.</span>
            </div>
            <div className="footer-tag">Definition, engineered.</div>
            <ul className="footer-socials" aria-label="ETCH on social">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={`ETCH on ${s.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-cols">
            {COLS.map((col) => (
              <div className="footer-col" key={col.heading}>
                <h5>{col.heading}</h5>
                {col.links.map((l) => (
                  <NavLink prefetch="intent" to={l.to} key={l.to}>
                    {l.label}
                  </NavLink>
                ))}
              </div>
            ))}
            <FooterNewsletterCol />
          </div>
        </div>

        <div
          className="footer-commit"
          role="list"
          aria-label="Service commitments"
        >
          {COMMITMENTS.map((c) => (
            <span className="commit-item" role="listitem" key={c}>
              <Tick />
              {c}
            </span>
          ))}
        </div>

        <div className="footer-pay" aria-label="Accepted payment methods">
          <span className="pay-label">We accept</span>
          {PAYMENT_MARKS.map((m) => (
            <span className="pay-mark" key={m}>
              {m}
            </span>
          ))}
        </div>

        <div className="footer-rule" aria-hidden="true" />
        <p className="footer-legal">
          ETCH devices use electrical muscle stimulation intended to tone, firm
          and strengthen muscle. They are not weight-loss or fat-reduction
          devices, and results vary with use and individual physiology. Consult
          a physician before use if you have a cardiac condition, are pregnant,
          or use an implanted electronic device.
          <br />© 2026 ETCH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterNewsletterCol() {
  const fetcher = useFetcher<{ok: boolean; message: string}>();
  const submitting = fetcher.state === 'submitting';
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (fetcher.data?.ok) formRef.current?.reset();
  }, [fetcher.data]);
  return (
    <div className="footer-col footer-news">
      <h5>Stay close</h5>
      <p className="footer-news-lede">
        Founding-cohort emails. The protocol when it ships. Nothing else.
      </p>
      <fetcher.Form
        method="post"
        action="/api/cohort"
        ref={formRef}
        className="footer-news-form"
      >
        <label className="sr-only" htmlFor="footer-newsletter">
          Email address
        </label>
        <input
          id="footer-newsletter"
          name="email"
          type="email"
          required
          placeholder="you@anywhere.com"
          autoComplete="email"
          disabled={submitting}
        />
        <button
          type="submit"
          className="btn-ghost btn-ghost--compact"
          disabled={submitting}
        >
          {submitting ? '…' : 'Join'}
        </button>
      </fetcher.Form>
      {fetcher.data ? (
        <p
          className="footer-news-status"
          role="status"
          data-ok={fetcher.data.ok}
        >
          {fetcher.data.message}
        </p>
      ) : null}
    </div>
  );
}

/* ----------- icons (no external lib) ----------- */
function Tick() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function Igl() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}
function Tkl() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M15 3v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M15 3c.5 2.5 2.5 4.5 5 5" />
    </svg>
  );
}
function Ytb() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
