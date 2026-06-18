import {Link} from 'react-router';
import type {Route} from './+types/pages.science';
import {PageHero} from '~/components/PageHero';
import {
  SCIENCE_MUSCLES,
  SCIENCE_DOES,
  SCIENCE_DOESNT,
} from '~/lib/etch-pages';

export const meta: Route.MetaFunction = () => [
  {title: 'The Science — ETCH'},
  {
    name: 'description',
    content:
      'Not a shortcut. EMS as a second channel to the muscle — a physio-grade family of technology, tuned for definition.',
  },
];

export default function Science() {
  return (
    <>
      <PageHero
        eyebrow="The science"
        headline="Not a shortcut. A"
        serif="second channel"
        trail="."
        lede="Muscles contract when motor nerves fire them. EMS sends a mild, precisely-shaped current that evokes that contraction directly — recruiting fibres that voluntary effort rarely reaches. It is not a replacement for training; it is a second channel layered on top."
      />

      {/* HOW EMS WORKS */}
      <section className="etch-section ivory">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">How EMS works</p>
            <h2>
              The same instruction. <span className="serif">A different route.</span>
            </h2>
          </div>
          <div className="prose" data-reveal>
            <p>
              Voluntary movement starts in the brain: a motor signal travels
              down the nerve, reaches the muscle, and a contraction follows.
              EMS skips the brain and meets the nerve at the skin — a
              precisely-timed current that fires the same motor pathway from
              outside.
            </p>
            <p>
              Because the signal is external, ETCH can recruit deep fibres that
              voluntary effort under-uses, hold them under tension for the full
              twenty minutes, and do it without loading the joint. The
              contraction you feel is real — it's your own muscle, on a second
              channel.
            </p>
            <p>
              <strong>It does not replace training.</strong> Lifts, sleep and
              fuel still build the shape. EMS adds a layer of activation on top
              that voluntary effort alone won't reach.
            </p>
          </div>
        </div>
      </section>

      {/* THE MUSCLES */}
      <section className="etch-section parchment">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">The muscles</p>
            <h2>
              Each device, <span className="serif">tuned</span> to its place.
            </h2>
            <p className="lede">
              Pad shape, pulse mode and intensity ramp are calibrated to the
              muscle group. Deep stabilisers and overall shape come from the
              training built into The Method.
            </p>
          </div>
          <div className="muscles-grid">
            {SCIENCE_MUSCLES.map((m, i) => (
              <div
                className="muscle-card"
                key={m.name}
                data-reveal
                style={{['--reveal-delay' as string]: `${i * 100}ms`}}
              >
                <div className="m-name">
                  {m.name.split(' ')[0]}{' '}
                  <span className="serif">{m.name.split(' ').slice(1).join(' ')}</span>
                </div>
                <div className="m-target">{m.target}</div>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOES / DOESN'T */}
      <section className="etch-section ivory">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">What it does · what it doesn't</p>
            <h2>
              Honest about <span className="serif">both</span>.
            </h2>
            <p className="lede">
              Stating the limits is what keeps the rest credible. EMS tones and
              strengthens; visible definition and overall shape still require
              the training and fuel in The Method.
            </p>
          </div>
          <div className="does-grid">
            <div className="does-col does" data-reveal>
              <h3>What it does</h3>
              <ul>
                {SCIENCE_DOES.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div
              className="does-col doesnt"
              data-reveal
              style={{['--reveal-delay' as string]: '120ms'}}
            >
              <h3>What it doesn't</h3>
              <ul>
                {SCIENCE_DOESNT.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="etch-section plate">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Heritage</p>
            <h2>
              The same family of tech <span className="serif">physiotherapists</span>{' '}
              have used for decades.
            </h2>
          </div>
          <div className="prose" data-reveal>
            <p>
              EMS has been in clinical use for rehab, strength conditioning and
              recovery for over forty years — sports medicine, post-injury
              recovery, age-related muscle loss. The principle is the same; the
              packaging, the protocol and the calibration are what ETCH brings.
            </p>
            <p>
              Results are individual. Adherence to the 8-week schedule, the
              quality of the training, and the consistency of fuel and sleep
              determine how much the activation reveals. The Method handles
              every one of those.
            </p>
            <div style={{display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap'}}>
              <Link className="btn" to="/products/the-etch-set">
                Get the Set
              </Link>
              <Link className="btn-ghost" to="/pages/the-method">
                Read the Method →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
