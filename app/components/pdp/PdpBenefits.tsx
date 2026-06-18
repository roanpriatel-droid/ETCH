import type {PdpBenefit} from '~/lib/etch-pdp';
import {SmallEngrave} from './PdpArt';

export function PdpBenefits({benefits}: {benefits: readonly PdpBenefit[]}) {
  return (
    <section className="etch-section ivory">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">What it does</p>
          <h2>
            Four reasons. <span className="serif">All real.</span>
          </h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <article
              className="benefit-card"
              key={b.title}
              data-reveal
              style={{['--reveal-delay' as string]: `${i * 80}ms`}}
            >
              <SmallEngrave className="benefit-engrave" />
              <h3>
                {b.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="serif">{b.title.split(' ').slice(-1)}</span>
              </h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
