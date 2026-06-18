import {NavLink} from 'react-router';

type Col = {heading: string; links: {label: string; to: string}[]};

const COLS: Col[] = [
  {
    heading: 'Shop',
    links: [
      {label: 'Flux Core — Abs', to: '/products/etch-flux-core'},
      {label: 'Flux Form — Glutes', to: '/products/etch-flux-form'},
      {label: 'The ETCH Set', to: '/products/the-etch-set'},
      {label: 'Pad refills', to: '/pages/pads'},
      {label: 'Subscription', to: '/pages/subscription'},
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
    heading: 'Company',
    links: [
      {label: 'Contact', to: '/pages/contact'},
      {label: 'Returns', to: '/pages/returns'},
      {label: 'Warranty', to: '/pages/warranty'},
      {label: 'Policies', to: '/policies'},
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="brand-mark">
              ETCH<span className="dot">.</span>
            </div>
            <div className="footer-tag">Definition, engineered.</div>
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
          </div>
        </div>
        <div className="footer-rule" aria-hidden="true" />
        <p className="footer-legal">
          ETCH devices use electrical muscle stimulation intended to tone, firm
          and strengthen muscle. They are not weight-loss or fat-reduction
          devices, and results vary with use and individual physiology. Consult
          a physician before use if you have a cardiac condition, are pregnant,
          or use an implanted electronic device.
          <br />
          © 2026 ETCH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
