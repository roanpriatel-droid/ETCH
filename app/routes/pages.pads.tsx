import {Link} from 'react-router';
import type {Route} from './+types/pages.pads';
import {PageHero} from '~/components/PageHero';
import {PADS_ROWS, PADS_CARE} from '~/lib/etch-pages';

export const meta: Route.MetaFunction = () => [
  {title: 'Pads & refills — ETCH'},
  {
    name: 'description',
    content:
      'Gel pads last ~25 sessions per set. Single refills or subscription — never caught short.',
  },
];

export default function Pads() {
  return (
    <>
      <PageHero
        eyebrow="Consumables"
        headline="Pads that"
        serif="keep up"
        lede="The conductive hydrogel that bonds pad to skin wears out after about 25 sessions. Refills are a single set or — better — a subscription that auto-ships with your protocol."
        ctas={[
          {label: 'Start a subscription', to: '/pages/subscription'},
          {label: 'Buy a single set', to: '/products/flux-pads', variant: 'ghost'},
        ]}
      />

      {/* SPECS */}
      <section className="etch-section ivory">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">The specifics</p>
            <h2>
              What pads <span className="serif">are</span> and aren't.
            </h2>
            <p className="lede">
              Pads are consumable. They aren't covered by the device warranty —
              but the subscription keeps them at the lowest per-session cost.
            </p>
          </div>
          <div className="info-rows" data-reveal>
            {PADS_ROWS.map((r) => (
              <div className="info-row" key={r.label}>
                <span className="ir-label">{r.label}</span>
                <span className="ir-value">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARE TIPS */}
      <section className="etch-section parchment">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Make them last</p>
            <h2>
              Four habits. <span className="serif">More sessions per set.</span>
            </h2>
          </div>
          <ul className="perks-list" data-reveal>
            {PADS_CARE.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA SPLIT */}
      <section className="etch-section plate">
        <div className="wrap">
          <div className="cta-split">
            <div data-reveal>
              <p className="col-eyebrow">The recommendation</p>
              <h3>
                Subscribe. <span className="serif">Never caught short.</span>
              </h3>
              <p>
                The protocol runs on consistency — and a dead pad two days
                before the next session interrupts that. Subscription is the
                lowest per-session cost and shows up before you need it.
              </p>
              <div style={{display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap'}}>
                <Link className="btn" to="/pages/subscription">
                  Start a subscription
                </Link>
                <Link className="btn-ghost" to="/products/flux-pads">
                  Single set →
                </Link>
              </div>
            </div>
            <div
              className="panel"
              data-reveal
              style={{['--reveal-delay' as string]: '120ms'}}
            >
              <p className="col-eyebrow">Subscription</p>
              <div className="price">$24/mo</div>
              <div className="price-note">
                Auto-ships every 4–6 weeks · free shipping · skip / pause / cancel anytime
              </div>
              <Link className="btn" to="/pages/subscription">
                See subscription
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
