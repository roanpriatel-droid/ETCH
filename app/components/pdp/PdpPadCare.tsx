export function PdpPadCare({items}: {items: string[]}) {
  return (
    <section className="etch-section plate">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">Pad care</p>
          <h2>
            Five habits. <span className="serif">More sessions</span> per set.
          </h2>
          <p className="lede">
            Pads are consumable — the conductive hydrogel wears with use. These
            habits get you closer to the upper end of the ~25-session range.
          </p>
        </div>
        <ul className="perks-list" data-reveal>
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
