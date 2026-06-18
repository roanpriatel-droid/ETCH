export function GuaranteeBand() {
  return (
    <section className="etch-section plate" style={{paddingTop: 0}}>
      <div className="wrap">
        <div className="guarantee-band">
          <div className="g-cell">
            <svg
              className="g-icon"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <div>
              <div className="g-k">Guarantee</div>
              <div className="g-v">60-night money-back</div>
              <div className="g-d">
                Train with it for 60 nights. Send it back for a full refund if
                it isn't for you.
              </div>
            </div>
          </div>
          <div className="g-cell">
            <svg
              className="g-icon"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
              <path d="M12 7v5l3 2" />
            </svg>
            <div>
              <div className="g-k">Warranty</div>
              <div className="g-v">2-year limited</div>
              <div className="g-d">
                Covered against defects in materials and workmanship from the
                day it ships.
              </div>
            </div>
          </div>
          <div className="g-cell">
            <svg
              className="g-icon"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 7h11v9H3z" />
              <path d="M14 10h4l3 3v3h-7" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="17" cy="18" r="2" />
            </svg>
            <div>
              <div className="g-k">Shipping</div>
              <div className="g-v">Free, carbon-neutral</div>
              <div className="g-d">
                Ships discreetly worldwide. Tracked, insured, and offset at the
                door.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
