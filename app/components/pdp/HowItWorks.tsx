import type {PdpContent} from '~/lib/etch-pdp';

export function HowItWorks({
  tagline,
  steps,
}: {
  tagline: string;
  steps: PdpContent['howItWorks'];
}) {
  return (
    <section className="etch-section paper">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">How it works</p>
          <h2>
            Three steps. <span className="serif">Twenty</span> minutes.
          </h2>
          <p className="pdp-lede">{tagline}</p>
        </div>
        <div className="pdp-steps">
          {steps.map((s, i) => (
            <div className="pdp-step" key={s.title}>
              <div className="n">
                {String(i + 1).padStart(2, '0')} — {s.title.toUpperCase()}
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
