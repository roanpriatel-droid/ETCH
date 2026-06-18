import {Link} from 'react-router';

/**
 * TiersCallout — three-way framing shown on digital Method PDPs:
 * Free with device · Standalone $39 (current) · Coached $199.
 * Mirrors the structure on /pages/the-method.
 */
export function TiersCallout({deviceHandle}: {deviceHandle: string}) {
  return (
    <section className="etch-section ivory">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">Three ways to get it</p>
          <h2>
            Free with the device. Or <span className="serif">on its own.</span>
          </h2>
        </div>
        <div className="options-grid">
          <article className="option-card" data-reveal>
            <h3 className="opt-name">Free with the device</h3>
            <div className="opt-price">Included</div>
            <p className="opt-blurb">
              Every ETCH device ships with its matched Method protocol — free.
              If you’re leaning toward the device, this is the cleanest entry.
            </p>
            <ul className="opt-bullets">
              <li>Matched protocol included</li>
              <li>Lifetime updates</li>
              <li>No additional cost</li>
            </ul>
            <Link className="btn opt-cta" to={`/products/${deviceHandle}`}>
              See the device
            </Link>
          </article>

          <article
            className="option-card featured"
            data-reveal
            style={{['--reveal-delay' as string]: '90ms'}}
          >
            <h3 className="opt-name">
              Standalone <span className="serif">(this page)</span>
            </h3>
            <div className="opt-price">$39</div>
            <p className="opt-blurb">
              The full 30-page protocol on its own — for readers who don’t own
              a device yet, or who want to read the system before deciding.
            </p>
            <ul className="opt-bullets">
              <li>PDF + web reader</li>
              <li>Lifetime updates</li>
              <li>Instant delivery</li>
            </ul>
            <span className="opt-cta" aria-disabled="true" style={{opacity: 0.55}}>
              You’re viewing this tier
            </span>
          </article>

          <article
            className="option-card"
            data-reveal
            style={{['--reveal-delay' as string]: '180ms'}}
          >
            <h3 className="opt-name">Coached</h3>
            <div className="opt-price">$199</div>
            <p className="opt-blurb">
              A personalised 8-week plan from a short intake — training history,
              goals, equipment, schedule. Two coached check-ins included.
            </p>
            <ul className="opt-bullets">
              <li>Custom plan within 3 business days</li>
              <li>Two coached check-ins</li>
              <li>Direct email support across 8 weeks</li>
            </ul>
            <Link className="btn-ghost opt-cta" to="/pages/contact">
              Apply for Coached →
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
