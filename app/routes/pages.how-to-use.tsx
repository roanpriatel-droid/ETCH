import {Link} from 'react-router';
import type {Route} from './+types/pages.how-to-use';
import {PageHero} from '~/components/PageHero';
import {HOWTO_STEPS, HOWTO_SAFETY} from '~/lib/etch-pages';

export const meta: Route.MetaFunction = () => [
  {title: 'Getting started — ETCH'},
  {
    name: 'description',
    content:
      'Placement, intensity, the 20-minute session, and the safety rules. Your first ETCH session.',
  },
];

export default function HowToUse() {
  return (
    <>
      <PageHero
        eyebrow="Getting started"
        headline="Your first"
        serif="session"
        lede="Twenty minutes from the moment the pad sticks. Here's the rhythm — placement, dial, contraction, recovery — that gets you through it cleanly."
        ctas={[
          {label: 'Read the Method', to: '/pages/the-method'},
          {label: 'FAQ →', to: '/pages/faq', variant: 'ghost'},
        ]}
      />

      {/* STEPS */}
      <section className="etch-section ivory">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">The session</p>
            <h2>
              Four moments. <span className="serif">Twenty</span> minutes.
            </h2>
          </div>
          <div className="steps-vertical">
            {HOWTO_STEPS.map((s, i) => (
              <div
                className="step-row"
                key={s.n}
                data-reveal
                style={{['--reveal-delay' as string]: `${i * 80}ms`}}
              >
                <div className="numeral">{s.n}</div>
                <div>
                  <h3>
                    {s.title} — <span className="serif">the rhythm</span>
                  </h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="etch-section parchment">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Safety</p>
            <h2>
              The firm <span className="serif">rules</span>.
            </h2>
            <p className="lede">
              EMS is safe used sensibly within these guardrails. They are not
              suggestions — if any apply, do not use the device.
            </p>
          </div>
          <div className="safety-box" data-reveal>
            <span className="s-eyebrow">Contraindications</span>
            <h3>Do not use ETCH if…</h3>
            <ul>
              {HOWTO_SAFETY.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="etch-section plate">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Beyond session one</p>
            <h2>
              The Method has the <span className="serif">full</span> protocol.
            </h2>
            <p className="lede">
              Placement maps, intensity ramps across eight weeks, training to
              run alongside it, fuel and recovery. Free with every device.
            </p>
            <div style={{display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap'}}>
              <Link className="btn" to="/pages/the-method">
                Read the Method
              </Link>
              <Link className="btn-ghost" to="/products/the-etch-set">
                Get the Set →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
