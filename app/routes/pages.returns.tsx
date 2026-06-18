import {Link} from 'react-router';
import type {Route} from './+types/pages.returns';
import {PageHero} from '~/components/PageHero';
import {RETURNS_ROWS, RETURNS_STEPS} from '~/lib/etch-pages';

export const meta: Route.MetaFunction = () => [
  {title: 'Returns — ETCH'},
  {
    name: 'description',
    content:
      'Sixty nights, risk-free. Full refund if ETCH isn’t for you — no hoops, no script.',
  },
];

export default function Returns() {
  return (
    <>
      <PageHero
        eyebrow="Returns"
        headline="60 nights,"
        serif="risk-free"
        lede="Train with it for sixty nights. If it isn't for you, send it back and we refund in full. The ETCH Method PDF is yours to keep either way."
        ctas={[
          {label: 'Start a return', to: '/pages/contact'},
        ]}
      />

      {/* THE POLICY (info rows) */}
      <section className="etch-section ivory">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">The policy</p>
            <h2>
              The honest <span className="serif">specifics</span>.
            </h2>
          </div>
          <div className="info-rows" data-reveal>
            {RETURNS_ROWS.map((r) => (
              <div className="info-row" key={r.label}>
                <span className="ir-label">{r.label}</span>
                <span className="ir-value">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="etch-section parchment">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">How it works</p>
            <h2>
              Three steps. <span className="serif">No hoops.</span>
            </h2>
          </div>
          <div className="steps-vertical">
            {RETURNS_STEPS.map((s, i) => (
              <div
                className="step-row"
                key={s.n}
                data-reveal
                style={{['--reveal-delay' as string]: `${i * 80}ms`}}
              >
                <div className="numeral">{s.n}</div>
                <div>
                  <h3>
                    {s.title} — <span className="serif">simple</span>
                  </h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="etch-section plate">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Ready to return</p>
            <h2>
              Email support. <span className="serif">We'll do the rest.</span>
            </h2>
            <div style={{display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap'}}>
              <Link className="btn" to="/pages/contact">
                Contact support
              </Link>
              <Link className="btn-ghost" to="/pages/warranty">
                Warranty →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
