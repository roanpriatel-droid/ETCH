/**
 * PLACEHOLDER testimonials — illustrative copy until real verified owner
 * reviews exist. Numbers and names are not real.
 */
const RESULTS = [
  {
    quote:
      'Twenty minutes after work was easy to keep. The contraction is unmistakable — by week six the abs were sharper than I’d seen them in years.',
    name: 'Marcus T.',
    where: 'Verified owner — Toronto, ON',
    stars: 5,
  },
  {
    quote:
      'Layered it during a lower-volume training block. The Method made it simple to know when to push and when to pull back.',
    name: 'Priya R.',
    where: 'Verified owner — Brooklyn, NY',
    stars: 5,
  },
  {
    quote:
      'The protocol is the part I underestimated. Eight weeks of removed guesswork — the device just executes the plan.',
    name: 'Daniel K.',
    where: 'Verified owner — Berlin, DE',
    stars: 5,
  },
];

export function PdpResults() {
  return (
    <section className="etch-section parchment">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">From the cohort</p>
          <h2>
            The work, <span className="serif">noticed</span>.
          </h2>
          <p className="lede">
            Reports from owners on the eight-week protocol — tone and
            strengthen, on their own schedule. Individual results vary.
          </p>
        </div>
        <div className="results-grid">
          {RESULTS.map((t, i) => (
            <article
              className="testimonial"
              key={t.name}
              data-reveal
              style={{['--reveal-delay' as string]: `${i * 100}ms`}}
            >
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="who">
                <div>
                  <div className="name">{t.name}</div>
                  <div className="where">{t.where}</div>
                </div>
                <span className="verified-badge">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Verified
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
