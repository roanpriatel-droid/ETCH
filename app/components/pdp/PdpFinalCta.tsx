import {Link} from 'react-router';
import type {PdpContent} from '~/lib/etch-pdp';

export function PdpFinalCta({
  content,
  productUrl,
}: {
  content: PdpContent;
  productUrl: string;
}) {
  return (
    <section className="etch-section plate">
      <div className="wrap">
        <div className="final-cta">
          <div className="final-pillars" data-reveal>
            <div className="final-pillar">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--brass-light)"
                strokeWidth="1.5"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <div>
                <div className="fp-k">Guarantee</div>
                <div className="fp-v">60-night money-back</div>
              </div>
            </div>
            <div className="final-pillar">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--brass-light)"
                strokeWidth="1.5"
              >
                <path d="M3 7h11v9H3z" />
                <path d="M14 10h4l3 3v3h-7" />
                <circle cx="7" cy="18" r="2" />
                <circle cx="17" cy="18" r="2" />
              </svg>
              <div>
                <div className="fp-k">Shipping</div>
                <div className="fp-v">Free, carbon-neutral</div>
              </div>
            </div>
            <div className="final-pillar">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--brass-light)"
                strokeWidth="1.5"
              >
                <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
                <path d="M12 7v5l3 2" />
              </svg>
              <div>
                <div className="fp-k">Warranty</div>
                <div className="fp-v">2-year limited</div>
              </div>
            </div>
          </div>

          <div className="final-pitch" data-reveal style={{['--reveal-delay' as string]: '120ms'}}>
            <p className="eyebrow">Ready</p>
            <h2>
              Forge what voluntary effort <span className="serif">leaves on the table</span>.
            </h2>
            <p className="lede">
              {content.guarantee}. Sixty nights to decide it's for you.
            </p>
            <div style={{display: 'flex', gap: 16, marginTop: 22, flexWrap: 'wrap'}}>
              <Link className="btn" to={productUrl} prefetch="intent">
                {content.isPads ? 'Start subscription' : 'Add to kit'}
              </Link>
              <Link className="btn-ghost" to="/pages/the-method" prefetch="intent">
                Read the Method →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
