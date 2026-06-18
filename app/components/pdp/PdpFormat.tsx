import type {PdpSpec} from '~/lib/etch-pdp';

export function PdpFormat({specs}: {specs: PdpSpec[]}) {
  return (
    <section className="etch-section parchment">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">Format &amp; access</p>
          <h2>
            Read anywhere. <span className="serif">Update forever.</span>
          </h2>
        </div>
        <div className="spec-table" data-reveal>
          {specs.map((s) => (
            <div className="spec-row" key={s.label}>
              <span className="spec-label">{s.label}</span>
              <span className="spec-value">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
