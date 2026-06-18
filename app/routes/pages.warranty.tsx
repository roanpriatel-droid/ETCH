import {Link} from 'react-router';
import type {Route} from './+types/pages.warranty';
import {PageHero} from '~/components/PageHero';
import {WARRANTY_ROWS, WARRANTY_STEPS} from '~/lib/etch-pages';

export const meta: Route.MetaFunction = () => [
  {title: 'Warranty — ETCH'},
  {
    name: 'description',
    content:
      'Two-year limited warranty against manufacturing defects under normal use.',
  },
];

export default function Warranty() {
  return (
    <>
      <PageHero
        eyebrow="Warranty"
        headline="Two years,"
        serif="covered"
        lede="Every ETCH device is covered against manufacturing defects under normal use for two years from purchase. Hardware failures, battery degradation beyond spec — covered."
        ctas={[
          {label: 'File a claim', to: '/pages/contact'},
        ]}
      />

      {/* COVERAGE TABLE */}
      <section className="etch-section ivory">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Coverage</p>
            <h2>
              What's in. <span className="serif">What isn't.</span>
            </h2>
          </div>
          <div className="info-rows" data-reveal>
            {WARRANTY_ROWS.map((r) => (
              <div className="info-row" key={r.label}>
                <span className="ir-label">{r.label}</span>
                <span className="ir-value">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CLAIM */}
      <section className="etch-section parchment">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">How to claim</p>
            <h2>
              Three steps. <span className="serif">Same as returns.</span>
            </h2>
          </div>
          <div className="steps-vertical">
            {WARRANTY_STEPS.map((s, i) => (
              <div
                className="step-row"
                key={s.n}
                data-reveal
                style={{['--reveal-delay' as string]: `${i * 80}ms`}}
              >
                <div className="numeral">{s.n}</div>
                <div>
                  <h3>
                    {s.title} — <span className="serif">straightforward</span>
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
            <p className="eyebrow">Hardware acting up</p>
            <h2>
              Email support. <span className="serif">Photo helps.</span>
            </h2>
            <div style={{display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap'}}>
              <Link className="btn" to="/pages/contact">
                Contact support
              </Link>
              <Link className="btn-ghost" to="/pages/returns">
                Returns →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
