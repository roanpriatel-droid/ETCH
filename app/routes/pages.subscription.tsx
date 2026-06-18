import {Link} from 'react-router';
import type {Route} from './+types/pages.subscription';
import {PageHero} from '~/components/PageHero';
import {SUBSCRIPTION_HOW, SUBSCRIPTION_PERKS} from '~/lib/etch-pages';

export const meta: Route.MetaFunction = () => [
  {title: 'Subscription — ETCH'},
  {
    name: 'description',
    content:
      'Auto-ship fresh pads every 4–6 weeks. The lowest per-session cost. Skip, pause, or cancel anytime.',
  },
];

export default function Subscription() {
  return (
    <>
      <PageHero
        eyebrow="Subscription"
        headline="Never miss"
        serif="a session"
        lede="The protocol runs on consistency. Pads auto-ship every 4–6 weeks so a dead set never costs you a session — and you pay the lowest per-session price."
        ctas={[
          {label: 'Start your subscription', to: '/products/flux-pads'},
        ]}
      />

      {/* HOW IT WORKS */}
      <section className="etch-section ivory">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">How it works</p>
            <h2>
              Three things. <span className="serif">All adjustable.</span>
            </h2>
          </div>
          <div className="steps-vertical">
            {SUBSCRIPTION_HOW.map((s, i) => (
              <div
                className="step-row"
                key={s.n}
                data-reveal
                style={{['--reveal-delay' as string]: `${i * 80}ms`}}
              >
                <div className="numeral">{s.n}</div>
                <div>
                  <h3>
                    {s.title} — <span className="serif">your cadence</span>
                  </h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="etch-section parchment">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Why subscribe</p>
            <h2>
              Five reasons. <span className="serif">All real.</span>
            </h2>
            <p className="lede">
              No fake perks, no padded numbers — just the things that genuinely
              make the protocol cheaper and easier to stick to.
            </p>
          </div>
          <ul className="perks-list" data-reveal>
            {SUBSCRIPTION_PERKS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="etch-section plate">
        <div className="wrap">
          <div className="cta-split">
            <div data-reveal>
              <p className="col-eyebrow">No lock-in</p>
              <h3>
                Skip, pause, <span className="serif">cancel</span> anytime.
              </h3>
              <p>
                Travel weeks, a deload, a couple of months off — manage the
                schedule in your account, no email gymnastics. The free
                shipping and member pricing stay.
              </p>
              <div style={{display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap'}}>
                <Link className="btn" to="/products/flux-pads">
                  Start your subscription
                </Link>
                <Link className="btn-ghost" to="/pages/pads">
                  About pads →
                </Link>
              </div>
            </div>
            <div
              className="panel"
              data-reveal
              style={{['--reveal-delay' as string]: '120ms'}}
            >
              <p className="col-eyebrow">Pricing</p>
              <div className="price">$24/mo</div>
              <div className="price-note">
                One set per cycle · free shipping · member pricing on
                accessories · early access to releases
              </div>
              <Link className="btn" to="/products/flux-pads">
                Start subscription
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
