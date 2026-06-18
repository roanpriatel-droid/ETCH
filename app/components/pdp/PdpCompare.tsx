import {Link} from 'react-router';
import {DeviceOutline} from './PdpArt';

type CompareItem = {
  name: string;
  serifAccent: string;
  target: string;
  price: string;
  blurb: string;
  url: string;
  handle: string;
  isSet?: boolean;
};

const COMPARE: CompareItem[] = [
  {
    name: 'Flux',
    serifAccent: 'Core',
    target: 'Abs · Obliques',
    price: '$199',
    blurb:
      'Deep abdominal activation. Twenty minutes, on your schedule. Ships with The ETCH Method: Core.',
    url: '/products/etch-flux-core',
    handle: 'etch-flux-core',
  },
  {
    name: 'Flux',
    serifAccent: 'Form',
    target: 'Glutes',
    price: '$199',
    blurb:
      'Wake, work and build the glutes. Twenty minutes, on your schedule. Ships with The ETCH Method: Form.',
    url: '/products/etch-flux-form',
    handle: 'etch-flux-form',
  },
  {
    name: 'The ETCH',
    serifAccent: 'Set',
    target: 'Complete physique',
    price: '$349',
    blurb:
      'Both devices, both protocols, Method: Complete included free. Save $49 versus separate.',
    url: '/products/the-etch-set',
    handle: 'the-etch-set',
    isSet: true,
  },
];

export function PdpCompare({currentHandle}: {currentHandle: string}) {
  return (
    <section className="etch-section ivory">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">Compare</p>
          <h2>
            Two places. <span className="serif">One</span> system.
          </h2>
          <p className="lede">
            Run one. Run both. The Set bundles them with the combined protocol
            for less than buying apart.
          </p>
        </div>
        <div className="compare-grid">
          {COMPARE.map((c, i) => {
            const isCurrent = c.handle === currentHandle;
            return (
              <article
                key={c.handle}
                className={`compare-card${c.isSet ? ' is-set' : ''}${isCurrent ? ' is-current' : ''}`}
                data-reveal
                style={{['--reveal-delay' as string]: `${i * 90}ms`}}
              >
                {c.isSet ? (
                  <span className="compare-tag">Save $49 · Best value</span>
                ) : null}
                {isCurrent ? (
                  <span className="compare-current">You're viewing</span>
                ) : null}
                <div className="compare-art" aria-hidden="true">
                  {c.isSet ? (
                    <>
                      <DeviceOutline />
                      <DeviceOutline />
                    </>
                  ) : (
                    <DeviceOutline />
                  )}
                </div>
                <h3 className="compare-name">
                  {c.name} <span className="serif">{c.serifAccent}</span>
                </h3>
                <div className="compare-target">{c.target}</div>
                <p className="compare-blurb">{c.blurb}</p>
                <div className="compare-foot">
                  <span className="compare-price">{c.price}</span>
                  <Link
                    className={c.isSet ? 'btn' : 'btn-ghost'}
                    to={c.url}
                    prefetch="intent"
                  >
                    {isCurrent ? 'View again' : c.isSet ? 'Get the Set' : 'Learn more →'}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
