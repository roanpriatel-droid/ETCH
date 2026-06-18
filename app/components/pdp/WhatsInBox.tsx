export function WhatsInBox({items}: {items: string[]}) {
  return (
    <section className="etch-section ivory">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">What's in the box</p>
          <h2>
            Everything you need, <span className="serif">nothing</span> you
            don't.
          </h2>
        </div>
        <div className="wib-stage" data-reveal>
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
          {/* placeholder box-shot slot — swap for real packshot when product photography is ready */}
          <div className="box-shot" aria-hidden="true">
            <svg viewBox="0 0 320 240" className="box-shot-svg">
              <defs>
                <linearGradient id="bs-lg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(220,179,106,.22)" />
                  <stop offset="100%" stopColor="rgba(20,16,9,0)" />
                </linearGradient>
              </defs>
              <rect
                x="40"
                y="40"
                width="240"
                height="160"
                rx="10"
                fill="url(#bs-lg)"
                stroke="var(--brass-deep)"
                strokeWidth="1.4"
              />
              <rect
                x="56"
                y="58"
                width="208"
                height="124"
                rx="6"
                fill="none"
                stroke="var(--brass)"
                strokeWidth="1"
                opacity=".55"
              />
              <g stroke="var(--brass)" strokeWidth=".8" opacity=".5">
                <line x1="80" y1="110" x2="240" y2="110" />
                <line x1="80" y1="124" x2="240" y2="124" />
              </g>
              <text
                x="160"
                y="148"
                textAnchor="middle"
                fill="var(--brass-light)"
                fontFamily="var(--font-mono)"
                fontSize="9"
                letterSpacing="3.2"
              >
                ETCH
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
