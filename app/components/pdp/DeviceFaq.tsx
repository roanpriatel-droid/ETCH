import type {PdpFaq} from '~/lib/etch-pdp';

export function DeviceFaq({items}: {items: PdpFaq[]}) {
  return (
    <section className="etch-section bone">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Questions, answered</p>
          <h2>
            The honest <span className="serif">specifics</span>.
          </h2>
        </div>
        <div className="pdp-faq">
          {items.map((qa) => (
            <div className="pdp-qa" key={qa.q}>
              <h3 className="pdp-q">{qa.q}</h3>
              <p className="pdp-a">{qa.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
