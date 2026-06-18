import type {PdpSpec} from '~/lib/etch-pdp';

export function SpecTable({specs}: {specs: PdpSpec[]}) {
  return (
    <section className="etch-section bone">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">The instrument</p>
          <h2>
            Engineered to a <span className="serif">single</span> standard.
          </h2>
        </div>
        <div className="spec-table">
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
