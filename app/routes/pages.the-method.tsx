import {Link} from 'react-router';
import type {Route} from './+types/pages.the-method';
import {PageHero} from '~/components/PageHero';
import {METHOD_PILLARS, METHOD_MODULES, METHOD_OPTIONS} from '~/lib/etch-pages';
import {THE_SET} from '~/lib/etch-products';

export const meta: Route.MetaFunction = () => [
  {title: 'The Method — ETCH'},
  {
    name: 'description',
    content:
      'The 8-week protocol that turns activation into a visibly defined result. Free with every device.',
  },
];

export default function TheMethod() {
  return (
    <>
      <PageHero
        eyebrow="The 8-week protocol"
        headline="The ETCH"
        serif="Method"
        lede="A device gives you a tool. The Method gives you the system — eight weeks of exact sessions, training, fuel and recovery that turn activation into a visibly defined result."
        ctas={[
          {label: 'Get the Set', to: THE_SET.url},
          {label: 'See the science →', to: '/pages/science', variant: 'ghost'},
        ]}
      />

      {/* THREE PILLARS */}
      <section className="etch-section ivory">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">The three pillars</p>
            <h2>
              Pull any one. <span className="serif">Progress stalls.</span>
            </h2>
            <p className="lede">
              The Method only works because the three sit alongside each other.
              Activation without load, or load without fuel, leaves work on the
              table.
            </p>
          </div>
          <div className="pillar-grid">
            {METHOD_PILLARS.map((p, i) => (
              <div
                className="pillar-cell"
                key={p.n}
                data-reveal
                style={{['--reveal-delay' as string]: `${i * 100}ms`}}
              >
                <div className="n">{p.n} — {p.title.toUpperCase()}</div>
                <h3>
                  {p.title} — <span className="serif">the channel</span>
                </h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="etch-section parchment">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">What's inside</p>
            <h2>
              Eight modules. <span className="serif">One</span> protocol.
            </h2>
          </div>
          <div className="modules-grid">
            {METHOD_MODULES.map((m, i) => (
              <div
                className="module-cell"
                key={m.n}
                data-reveal
                style={{['--reveal-delay' as string]: `${i * 60}ms`}}
              >
                <div className="n">{m.n}</div>
                <h4>{m.title}</h4>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE WAYS TO GET IT */}
      <section className="etch-section ivory">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Three ways to get it</p>
            <h2>
              Free with the device. Or <span className="serif">on its own.</span>
            </h2>
          </div>
          <div className="options-grid">
            {METHOD_OPTIONS.map((opt, i) => (
              <article
                key={opt.name}
                className={`option-card${i === 0 ? ' featured' : ''}`}
                data-reveal
                style={{['--reveal-delay' as string]: `${i * 100}ms`}}
              >
                <h3 className="opt-name">{opt.name}</h3>
                <div className="opt-price">{opt.price}</div>
                <p className="opt-blurb">{opt.blurb}</p>
                <ul className="opt-bullets">
                  {opt.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {opt.cta ? (
                  <Link className="btn opt-cta" to={opt.cta.to}>
                    {opt.cta.label}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE + CTA */}
      <section className="etch-section plate">
        <div className="wrap">
          <div className="split-row">
            <div data-reveal>
              <p className="col-eyebrow">The guarantee</p>
              <h3>
                Train for 60 nights. <span className="serif">Or send it back.</span>
              </h3>
              <p>
                Sixty-night money-back guarantee on every device. Two-year
                limited warranty. Free, carbon-neutral shipping worldwide. The
                Method PDF is yours either way.
              </p>
              <div style={{display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap'}}>
                <Link className="btn" to={THE_SET.url}>
                  Get the Set
                </Link>
                <Link className="btn-ghost" to="/pages/faq">
                  Read the FAQ →
                </Link>
              </div>
            </div>
            <div data-reveal style={{['--reveal-delay' as string]: '120ms'}}>
              <p className="col-eyebrow">For the cohort</p>
              <h3>
                The first run is <span className="serif">numbered.</span>
              </h3>
              <p>
                The Method ships in lockstep with the founding release of Flux
                Core, Flux Form and the Set — limited allocation, the founding
                price, the matched 30-page protocol included.
              </p>
              <Link
                className="btn-ghost"
                to="/products/etch-flux-core"
                style={{marginTop: 16}}
              >
                See Flux Core →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
