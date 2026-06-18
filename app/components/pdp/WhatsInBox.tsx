export function WhatsInBox({items}: {items: string[]}) {
  return (
    <section className="etch-section paper">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">What's in the box</p>
          <h2>
            Everything you need, <span className="serif">nothing</span> you
            don't.
          </h2>
        </div>
        <div className="box-grid">
          {items.map((item) => (
            <div className="box-row" key={item}>
              <span className="box-mark" aria-hidden="true">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="box-name">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
