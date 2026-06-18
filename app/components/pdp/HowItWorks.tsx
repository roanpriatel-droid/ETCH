import type {PdpStep} from '~/lib/etch-pdp';

export function HowItWorks({
  tagline,
  steps,
}: {
  tagline: string;
  steps: readonly PdpStep[];
}) {
  return (
    <section className="etch-section parchment">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">How it works</p>
          <h2>
            Three steps. <span className="serif">Twenty</span> minutes.
          </h2>
          <p className="pdp-lede">{tagline}</p>
        </div>
        <div className="pdp-steps">
          {steps.map((s, i) => (
            <div
              className="pdp-step"
              key={s.step}
              data-reveal
              style={{['--reveal-delay' as string]: `${i * 100}ms`}}
            >
              <div className="n">
                {s.step} — {s.title.toUpperCase()}
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
