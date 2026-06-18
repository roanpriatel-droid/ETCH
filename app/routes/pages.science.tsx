import {useEffect, useState} from 'react';
import {Link} from 'react-router';
import type {Route} from './+types/pages.science';
import {PageHero} from '~/components/PageHero';
import {SCIENCE_SECTIONS, SCIENCE_GLOSSARY} from '~/lib/etch-science';

export const meta: Route.MetaFunction = () => [
  {title: 'The Science — ETCH'},
  {
    name: 'description',
    content:
      'The honest mechanism behind ETCH — how EMS works, what it does, what it doesn’t, and why the 8-week protocol matters.',
  },
];

export default function Science() {
  const activeId = useActiveSection();

  return (
    <>
      <PageHero
        eyebrow="The science"
        headline="Not a shortcut. A"
        serif="second channel"
        trail="."
        lede="Voluntary effort runs the muscle through your nerves. EMS reaches the same nerves on a second channel — recruiting fibres that ordinary training under-uses, with no load on the joint. The honest mechanism, in detail."
      />

      <section className="etch-section ivory">
        <div className="wrap">
          <div className="science-layout">
            <nav className="section-nav" aria-label="Page sections">
              {SCIENCE_SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={activeId === s.id ? 'is-active' : undefined}
                >
                  {s.nav}
                </a>
              ))}
            </nav>

            <div className="science-body">
              <SecPremise />
              <SecContraction />
              <SecEms />
              <SecRecruitment />
              <SecMuscles />
              <SecLimits />
              <SecSystem />
              <SecEngine />
              <SecHeritage />
              <SecSafety />
              <SecExpectations />
              <SecGlossary />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="etch-section plate">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Ready</p>
            <h2>
              The mechanism is honest. <span className="serif">So is the work.</span>
            </h2>
            <p className="lede">
              Eight weeks of training, fuel and the second channel — built into
              one protocol. The Set is the cleanest way in.
            </p>
            <div style={{display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap'}}>
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

/* ================================================================
   SECTIONS — each is its own component for clean prose
   ================================================================ */

function SecPremise() {
  return (
    <section id="premise" data-reveal>
      <p className="eyebrow">01 · The premise</p>
      <h2>
        Why most muscle gadgets read as <span className="serif">gimmicks</span>.
      </h2>
      <p className="lede-dropcap">
        You know the category. A vibrating belt, a battery, a promise that
        twenty minutes of sitting on the couch will earn you the shape of
        someone who trains. It’s not just dishonest — it’s the reason serious
        people dismiss the whole space.
      </p>
      <p>
        ETCH is built from the opposite premise. EMS is a real,
        physiotherapy-grade tool. Used inside a real training programme, with
        real fuel and real recovery, it does specific work that voluntary
        effort under-recruits. Used as a replacement for training, it does
        almost nothing visible — and we’ll say that out loud on every page of
        this site.
      </p>
      <p>
        The job of this page is to give you the actual mechanism — what
        happens inside the muscle, what EMS adds, what it can’t replace — so
        you can decide whether ETCH belongs alongside the work you already do.
        If you’re a person who already trains and wants a precise instrument
        to layer on top, you’re who this is for.
      </p>
    </section>
  );
}

function SecContraction() {
  return (
    <section id="contraction" data-reveal>
      <p className="eyebrow">02 · How a muscle contracts</p>
      <h2>
        Brain to muscle, in <span className="serif">milliseconds</span>.
      </h2>
      <p className="lede-dropcap">
        Skeletal muscle doesn’t do anything on its own. Every voluntary
        movement begins as an electrical signal in your motor cortex, travels
        down a motor neuron through the spinal cord, and arrives at the
        muscle as a chemical instruction at the neuromuscular junction.
      </p>
      <p>
        Each motor neuron innervates a small bundle of muscle fibres. That
        neuron plus its fibres is called a <strong>motor unit</strong> — the
        smallest functional unit of voluntary movement. When the neuron
        fires, every fibre in the unit contracts together, all-or-nothing.
        Force is graded by recruiting more motor units, and by firing them
        more often.
      </p>
      <Diagram caption="Motor unit — neuron + fibres">
        <MotorUnitDiagram />
      </Diagram>
      <p>
        This is the route every voluntary contraction takes — the route that
        every lift, every squeeze, every conscious tense uses. It’s also the
        route that has a ceiling. Voluntary recruitment is biased: certain
        fibre types and certain muscles are easier to reach than others. Some
        deep stabilisers are notoriously hard to fully recruit on command.
      </p>
    </section>
  );
}

function SecEms() {
  return (
    <section id="ems" data-reveal>
      <p className="eyebrow">03 · What EMS actually does</p>
      <h2>
        Same nerve. A <span className="serif">different signal</span>.
      </h2>
      <p className="lede-dropcap">
        Electrical Muscle Stimulation works by skipping the brain. A
        precisely-shaped current is delivered through skin-mounted pads to
        the motor nerves underneath. That current depolarises the nerve
        directly, and the nerve, none the wiser, fires its motor unit
        exactly as if you had sent the signal yourself.
      </p>
      <p>
        The contraction that follows is real. It uses your actual muscle.
        It’s indistinguishable, at the cellular level, from a voluntary
        contraction at the same recruitment level. The difference is the
        origin of the signal — and that difference is the whole point.
      </p>
      <Diagram caption="Evoked contraction — external pulse to motor nerve">
        <EvokedPathwayDiagram />
      </Diagram>
      <p>
        A voluntary contraction is controlled by your cortex and shaped by
        whatever your nervous system decides to recruit in the moment. An
        evoked contraction sidesteps that decision. The Flux waveform fires
        the same motor units, in the same all-or-nothing way — for the full
        twenty-minute session, every two seconds, on a precise duty cycle.
      </p>
      <PullQuote>
        “Real contraction. Real muscle. A second route to the same nerve.”
      </PullQuote>
    </section>
  );
}

function SecRecruitment() {
  return (
    <section id="recruitment" data-reveal>
      <p className="eyebrow">04 · The recruitment science</p>
      <h2>
        Why a second channel <span className="serif">matters</span>.
      </h2>
      <p className="lede-dropcap">
        Muscle fibres come in broadly two kinds. Type I — slow-twitch,
        oxidative, endurance-leaning. Type II — fast-twitch, glycolytic,
        force-leaning. Type II is what carries most of the visible
        strength-and-shape work; Type I supports posture, stability and
        repetition.
      </p>
      <p>
        Under voluntary effort, your nervous system recruits motor units in
        roughly the <strong>size principle</strong> order. Small, low-force,
        Type-I-rich motor units fire first. As demand climbs, progressively
        larger, higher-threshold, Type-II-rich units are added. To touch the
        biggest motor units, you generally need either maximum voluntary
        effort or fatigue at lower loads.
      </p>
      <p>
        That ceiling is where EMS earns its place. A well-shaped electrical
        pulse can recruit large motor units that voluntary effort
        under-reaches in everyday training — without requiring the joint
        stress of maximum-load lifts. It does <em>not</em> bypass training.
        It layers on top of it: the same muscle, more fibres engaged for
        more total time-under-tension.
      </p>
      <p>
        This is the &ldquo;second channel&rdquo; framing. Voluntary effort runs
        the muscle one way. EMS runs it again, on a parallel signal, and
        catches the units that voluntary effort consistently under-recruits.
        Layered together over an 8-week protocol, the total stimulus is
        meaningfully higher than either alone.
      </p>
    </section>
  );
}

function SecMuscles() {
  return (
    <section id="muscles" data-reveal>
      <p className="eyebrow">05 · The muscles, in depth</p>
      <h2>
        Each device, <span className="serif">tuned</span> to its place.
      </h2>

      <h3>Flux Core — the abdominal wall</h3>
      <p>
        The abdominal wall has four layers. The <strong>rectus
        abdominis</strong> is the long, paired muscle running vertically
        from sternum to pubis — the visible &ldquo;six-pack&rdquo; surface,
        responsible for trunk flexion. Lateral to it sit the{' '}
        <strong>external obliques</strong> (closer to skin, with fibres
        running diagonally down toward the midline) and{' '}
        <strong>internal obliques</strong> (below them, running the other
        diagonal). They rotate and side-flex the trunk.
      </p>
      <p>
        Deeper still is the <strong>transversus abdominis</strong> — the
        deepest layer, wrapping the trunk horizontally like a corset. It’s
        almost entirely a stabiliser. It doesn’t respond well to crunches,
        and most lifters under-recruit it voluntarily because they can’t
        feel it firing.
      </p>
      <p>
        Flux Core’s pad array is shaped to cover the rectus abdominis with
        wings reaching the obliques. The contraction is felt as a hard
        brace — the same shape that stabilises a heavy squat or deadlift.
        The deep stabilisers (transversus, pelvic floor, diaphragm) still
        require the training in The Method to fully condition; the device
        is the second channel for the visible musculature.
      </p>
      <Diagram caption="The abdominal wall — four layers">
        <AbdominalDiagram />
      </Diagram>

      <h3>Flux Form — the glute group</h3>
      <p>
        The glute group is three muscles. <strong>Gluteus maximus</strong> is
        the largest and shallowest — the visible mass and shape, responsible
        for hip extension and external rotation. Underneath sit{' '}
        <strong>gluteus medius</strong> (lateral pelvis, abducts the hip and
        stabilises during single-leg work) and{' '}
        <strong>gluteus minimus</strong> (deepest, adds finer control to
        medius).
      </p>
      <p>
        Flux Form fires the maximus and medius together via a pad on the
        fullest part of each glute. The contraction is felt as the hard
        squeeze you’d feel at the top of a heavy hip thrust — and you can
        layer it during bridges and thrusts to double up. The minimus and
        the deep external rotators still want the training in The Method to
        develop fully; the device is the second channel for the visible mass.
      </p>
      <Diagram caption="The glute group — maximus, medius, minimus">
        <GluteDiagram />
      </Diagram>
    </section>
  );
}

function SecLimits() {
  return (
    <section id="limits" data-reveal>
      <p className="eyebrow">06 · What EMS does NOT do</p>
      <h2>
        Stating the limits is what keeps the rest <span className="serif">credible</span>.
      </h2>
      <p className="lede-dropcap">
        ETCH is an EMS device. EMS tones and strengthens the muscle it
        targets. It is{' '}
        <strong>not a weight-loss or fat-reduction device</strong>, and we
        won’t imply otherwise on any page of this site. Where you store and
        lose body fat is driven by overall energy balance, genetics, sleep,
        stress and the rest of your physiology — not by what’s happening
        locally under a single pad.
      </p>
      <p>
        There is also no such thing as <strong>spot reduction</strong>. The
        old idea — that training the abs hard enough will burn fat off your
        midsection — has been tested repeatedly and is consistently shown to
        be false. Fat is mobilised systemically. You can absolutely build
        the muscle underneath; you cannot dictate where your body decides to
        lose its layer above.
      </p>
      <p>
        Visible definition is a function of two things at once: the muscle
        you’ve built underneath, and the body-fat level that lets it show.
        EMS works on the first half. The training and fuel in The ETCH
        Method work on both halves together. The work has to be honest, and
        the device is an instrument inside that work — not a substitute.
      </p>
      <p className="mute">
        If you see a brand claiming an EMS device will give you a six-pack
        on its own, walk away. The category has been damaged by exactly that
        kind of claim — and the only useful response is to be relentlessly
        honest in the other direction.
      </p>
      <PullQuote>
        “The device builds the muscle. The Method builds the conditions for
        it to show.”
      </PullQuote>
    </section>
  );
}

function SecSystem() {
  return (
    <section id="system" data-reveal>
      <p className="eyebrow">07 · Why ETCH is a system</p>
      <h2>
        Stimulation. Training. <span className="serif">Fuel.</span>
      </h2>
      <p className="lede-dropcap">
        A single twenty-minute session is a small dose of well-shaped
        stimulus. Forty-eight sessions across eight weeks, layered alongside
        loaded training and adequate protein and sleep, is something else
        entirely — and it’s the only context in which we’ll quote
        before-and-after results.
      </p>
      <p>
        The Method exists because the device alone is not a programme. The
        protocol gives you which mode and intensity to run, on which day,
        which lifts to pair it with, what to eat around training, and how
        to cycle recovery. It’s short — 30 pages, every word load-bearing —
        and it ships free with every device.
      </p>
      <p>
        We talk about this as the &ldquo;multiplier&rdquo; framing. Training
        builds the muscle and burns the calories. Fuel and sleep allow it
        to recover and grow. EMS adds a layer of recruitment on top of all
        of that. Each piece amplifies the others; pull any one and progress
        stalls.
      </p>
    </section>
  );
}

function SecEngine() {
  return (
    <section id="engine" data-reveal>
      <p className="eyebrow">08 · The engine</p>
      <h2>
        12 modes. 19 intensities. <span className="serif">One protocol.</span>
      </h2>
      <p className="lede-dropcap">
        The Flux platform is the same hardware in Core and Form. The
        difference between the two devices is the pad shape and the
        calibration of the SmartWave™ output to the target muscle. Both run
        twelve modes, nineteen intensity levels, and a fixed twenty-minute
        auto-timed session.
      </p>
      <p>
        Modes vary the duty cycle, frequency and waveform shape. Lower
        frequencies bias circulation and recovery. Mid-range frequencies
        bias endurance recruitment. Higher frequencies bias maximal-force
        recruitment. The Method tells you which mode runs in which week of
        the protocol — there’s no guesswork.
      </p>
      <Diagram caption="The Flux waveform — pulse shape, duty cycle, rest">
        <WaveformDiagram />
      </Diagram>
      <p>
        Intensity is what you dial — climb until you find a strong, firm
        contraction, never sharp pain. Most owners settle around 4–6 out of
        19 in week one, and the Method shows you how to ramp it across the
        eight weeks. The 20-minute auto-timer ends the session
        automatically; you can’t accidentally run too long.
      </p>
      <p>
        We deliberately built the hardware to be quiet — no flashing
        screens, no app-required setup, no gamified streaks. The on-device
        controls work without your phone. The SmartWave™ app is optional and
        adds presets, the tracker and software updates.
      </p>
    </section>
  );
}

function SecHeritage() {
  return (
    <section id="heritage" data-reveal>
      <p className="eyebrow">09 · Heritage & evidence</p>
      <h2>
        Forty years of <span className="serif">physiotherapy</span>.
      </h2>
      <p className="lede-dropcap">
        EMS has been in clinical use since the late 1970s — for
        post-surgical rehabilitation, age-related muscle loss, neurological
        recovery and athletic conditioning. It’s not a new technology. ETCH
        brings it out of the clinic and into a precise, 20-minute home
        protocol — same principle, tuned for definition.
      </p>
      <p>
        What the research consistently supports: EMS produces real
        contractions, increases strength and muscle activation when layered
        with training, and can accelerate strength return in
        rehabilitation. What the research does <em>not</em> support: EMS as
        a standalone replacement for resistance training, EMS as a
        fat-reduction tool, or any claim of spot reduction. We won’t cite a
        study that hasn’t been replicated, and we won’t imply something a
        study didn’t conclude.
      </p>
      <p>
        Individual response varies. Two people running the same protocol
        will see different timelines — driven by training history, baseline
        muscle mass, nutrition, sleep, and how consistently they actually
        run the sessions. ETCH is calibrated for the median trained adult.
        You will find your own tempo inside the eight weeks.
      </p>
    </section>
  );
}

function SecSafety() {
  return (
    <section id="safety" data-reveal>
      <p className="eyebrow">10 · Safety</p>
      <h2>
        The firm <span className="serif">rules</span>.
      </h2>
      <p className="lede-dropcap">
        EMS is safe used sensibly within these guardrails. They are not
        suggestions. If any apply to you, do not use the device, and
        consult your physician before considering it.
      </p>
      <div className="safety-box" style={{margin: '24px 0'}}>
        <span className="s-eyebrow">Contraindications</span>
        <h3>Do not use ETCH if…</h3>
        <ul>
          <li>You have a pacemaker or any implanted electronic device</li>
          <li>You have a heart condition or cardiac arrhythmia</li>
          <li>You have epilepsy or a seizure disorder</li>
          <li>You are pregnant or trying to become pregnant</li>
          <li>You have any open wounds, broken skin or active infection at the placement site</li>
          <li>You have a metal implant near the placement site</li>
        </ul>
      </div>
      <p>
        Stop the session immediately on any sharp pain, numbness, lasting
        redness, or anything that feels unlike a firm contraction. Lower
        the intensity if the contraction stings — it should be strong and
        clean, never sharp. Never place pads on the front of the neck, over
        the heart, or across the spinal cord.
      </p>
    </section>
  );
}

function SecExpectations() {
  return (
    <section id="expectations" data-reveal>
      <p className="eyebrow">11 · Realistic expectations</p>
      <h2>
        Two to three weeks to <span className="serif">feel it</span>. Eight to see it.
      </h2>
      <p className="lede-dropcap">
        Adherence matters more than anything else. The 8-week protocol is
        the unit of measurement. Run it as designed and most owners report
        the target muscle firming up perceptibly within the first 2–3
        weeks. Visible change — the kind a friend notices — typically
        builds across the full eight weeks.
      </p>
      <p>
        Your individual timeline depends on starting point. If you’ve been
        training consistently for years, expect the muscle change to feel
        like an extra gear inside familiar work. If you’re newer to
        training, expect a steeper ramp on both sides — more
        delayed-onset soreness early, more visible change by week six.
      </p>
      <p>
        We strongly recommend measuring against your own baseline, not
        someone else’s photos. Two waist measurements at week zero and
        week eight. A short note in the tracker after each session. A
        weekly photo in the same light. Eight weeks is long enough to be
        honest about whether the work is showing up — and short enough
        that you can stay disciplined inside it.
      </p>
    </section>
  );
}

function SecGlossary() {
  return (
    <section id="glossary" data-reveal>
      <p className="eyebrow">12 · Glossary</p>
      <h2>
        The honest <span className="serif">vocabulary</span>.
      </h2>
      <p>
        Used throughout this page and The Method. If a term shows up in our
        copy and isn’t here, write us — we’ll add it.
      </p>
      <dl className="glossary">
        {SCIENCE_GLOSSARY.map((g) => (
          <div key={g.term}>
            <dt>{g.term}</dt>
            <dd>{g.def}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ================================================================
   PULL QUOTE
   ================================================================ */
function PullQuote({children}: {children: React.ReactNode}) {
  return (
    <blockquote className="pull-quote" data-reveal>
      {children}
    </blockquote>
  );
}

/* ================================================================
   DIAGRAMS — engraving-style SVGs with stroke draw-on
   ================================================================ */
function Diagram({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption: string;
}) {
  return (
    <figure className="sci-diagram" data-reveal>
      {children}
      <figcaption className="sci-diagram-caption">{caption}</figcaption>
    </figure>
  );
}

function MotorUnitDiagram() {
  return (
    <svg
      className="engrave-draw"
      viewBox="0 0 600 220"
      data-reveal
      aria-hidden="true"
    >
      <g stroke="var(--brass)" strokeWidth="1.2" fill="none">
        {/* motor neuron cell body */}
        <circle cx="80" cy="110" r="22" />
        <circle cx="80" cy="110" r="6" fill="var(--brass)" />
        {/* dendrites */}
        <path d="M62 95 C50 80 40 80 32 90" />
        <path d="M62 125 C50 140 40 140 32 130" />
        <path d="M98 95 C108 80 118 80 124 92" />
        {/* axon */}
        <path d="M102 110 L420 110" strokeWidth="1.5" />
        {/* axon terminals branching */}
        <path d="M420 110 L460 80" />
        <path d="M420 110 L470 110" />
        <path d="M420 110 L460 140" />
        <path d="M420 110 L450 175" />
        <path d="M420 110 L450 45" />
        {/* muscle fibres */}
        <rect x="460" y="40" width="100" height="14" rx="6" />
        <rect x="470" y="74" width="100" height="14" rx="6" />
        <rect x="480" y="104" width="100" height="14" rx="6" />
        <rect x="470" y="134" width="100" height="14" rx="6" />
        <rect x="460" y="168" width="100" height="14" rx="6" />
        {/* labels via tiny text */}
        <text x="60" y="180" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">MOTOR NEURON</text>
        <text x="460" y="208" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">MUSCLE FIBRES</text>
      </g>
    </svg>
  );
}

function EvokedPathwayDiagram() {
  return (
    <svg
      className="engrave-draw"
      viewBox="0 0 600 220"
      data-reveal
      aria-hidden="true"
    >
      <g stroke="var(--brass)" strokeWidth="1.2" fill="none">
        {/* skin surface */}
        <line x1="40" y1="60" x2="560" y2="60" />
        {/* pad on skin */}
        <rect x="240" y="40" width="120" height="22" rx="6" />
        <text x="262" y="34" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">ETCH PAD</text>
        {/* waveform pulse */}
        <path d="M250 26 L260 14 L270 38 L280 18 L290 30 L300 22 L310 30" strokeWidth="1.4"/>
        {/* current arrows */}
        <path d="M270 62 L270 100" />
        <path d="M300 62 L300 100" />
        <path d="M330 62 L330 100" />
        <polygon points="270,100 266,92 274,92" fill="var(--brass)"/>
        <polygon points="300,100 296,92 304,92" fill="var(--brass)"/>
        <polygon points="330,100 326,92 334,92" fill="var(--brass)"/>
        {/* motor nerve under skin */}
        <path d="M80 130 C200 100 400 100 520 130" strokeWidth="1.5"/>
        <circle cx="300" cy="113" r="6" fill="var(--brass)"/>
        <text x="80" y="155" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">MOTOR NERVE</text>
        {/* muscle fibres below */}
        <g>
          <rect x="120" y="180" width="80" height="10" rx="5"/>
          <rect x="220" y="180" width="80" height="10" rx="5"/>
          <rect x="320" y="180" width="80" height="10" rx="5"/>
          <rect x="420" y="180" width="80" height="10" rx="5"/>
        </g>
        <text x="120" y="210" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">EVOKED CONTRACTION</text>
      </g>
    </svg>
  );
}

function AbdominalDiagram() {
  return (
    <svg
      className="engrave-draw"
      viewBox="0 0 600 280"
      data-reveal
      aria-hidden="true"
    >
      <g stroke="var(--brass)" strokeWidth="1.2" fill="none">
        {/* trunk outline */}
        <path d="M200 30 C160 30 140 60 140 100 L140 220 C140 250 170 260 200 260 L400 260 C430 260 460 250 460 220 L460 100 C460 60 440 30 400 30 Z" strokeWidth="1.4"/>
        {/* centerline */}
        <line x1="300" y1="30" x2="300" y2="260" opacity=".24"/>
        {/* rectus abdominis — 6 segments */}
        <rect x="260" y="60" width="80" height="28" rx="4"/>
        <rect x="260" y="100" width="80" height="28" rx="4"/>
        <rect x="260" y="140" width="80" height="28" rx="4"/>
        <rect x="260" y="180" width="80" height="28" rx="4"/>
        {/* obliques wings */}
        <path d="M260 70 C220 90 200 130 200 180 L200 230" />
        <path d="M260 100 C230 120 210 150 210 200" />
        <path d="M260 130 C235 145 220 170 220 210" />
        <path d="M340 70 C380 90 400 130 400 180 L400 230" />
        <path d="M340 100 C370 120 390 150 390 200" />
        <path d="M340 130 C365 145 380 170 380 210" />
        {/* transversus indication — horizontal corset lines */}
        <path d="M200 220 C260 235 340 235 400 220" opacity=".5"/>
        <path d="M210 230 C260 242 340 242 390 230" opacity=".4"/>
        {/* labels */}
        <text x="262" y="50" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">RECTUS</text>
        <text x="170" y="170" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">OBLIQUES</text>
        <text x="245" y="265" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">TRANSVERSUS</text>
      </g>
    </svg>
  );
}

function GluteDiagram() {
  return (
    <svg
      className="engrave-draw"
      viewBox="0 0 600 280"
      data-reveal
      aria-hidden="true"
    >
      <g stroke="var(--brass)" strokeWidth="1.2" fill="none">
        {/* hips outline */}
        <path d="M150 60 C120 90 110 140 130 200 C150 250 220 260 300 260 C380 260 450 250 470 200 C490 140 480 90 450 60 Z" strokeWidth="1.4"/>
        {/* centerline */}
        <line x1="300" y1="60" x2="300" y2="260" opacity=".24"/>
        {/* maximus — broad shape both sides */}
        <path d="M180 100 C160 140 170 200 220 230 C250 240 270 235 280 220 L280 110 C275 95 245 90 180 100 Z"/>
        <path d="M420 100 C440 140 430 200 380 230 C350 240 330 235 320 220 L320 110 C325 95 355 90 420 100 Z"/>
        {/* medius — smaller upper-outer */}
        <path d="M180 100 C170 80 185 70 220 80 C235 84 240 92 240 102"/>
        <path d="M420 100 C430 80 415 70 380 80 C365 84 360 92 360 102"/>
        {/* minimus — implied small inner under medius */}
        <path d="M210 92 C225 90 232 96 232 104" opacity=".5"/>
        <path d="M390 92 C375 90 368 96 368 104" opacity=".5"/>
        {/* labels */}
        <text x="200" y="180" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">MAXIMUS</text>
        <text x="200" y="80" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">MEDIUS</text>
      </g>
    </svg>
  );
}

function WaveformDiagram() {
  return (
    <svg
      className="engrave-draw"
      viewBox="0 0 600 180"
      data-reveal
      aria-hidden="true"
    >
      <g stroke="var(--brass)" strokeWidth="1.2" fill="none">
        {/* baseline */}
        <line x1="40" y1="120" x2="560" y2="120" opacity=".4"/>
        {/* burst 1 */}
        <path d="M60 120 L70 60 L80 60 L90 120" strokeWidth="1.4"/>
        <path d="M90 120 L100 60 L110 60 L120 120" strokeWidth="1.4"/>
        <path d="M120 120 L130 60 L140 60 L150 120" strokeWidth="1.4"/>
        <path d="M150 120 L160 60 L170 60 L180 120" strokeWidth="1.4"/>
        {/* rest segment */}
        <line x1="180" y1="120" x2="260" y2="120" strokeWidth="1.4"/>
        {/* burst 2 */}
        <path d="M260 120 L270 60 L280 60 L290 120" strokeWidth="1.4"/>
        <path d="M290 120 L300 60 L310 60 L320 120" strokeWidth="1.4"/>
        <path d="M320 120 L330 60 L340 60 L350 120" strokeWidth="1.4"/>
        <path d="M350 120 L360 60 L370 60 L380 120" strokeWidth="1.4"/>
        {/* rest */}
        <line x1="380" y1="120" x2="460" y2="120" strokeWidth="1.4"/>
        {/* burst 3 (partial) */}
        <path d="M460 120 L470 60 L480 60 L490 120" strokeWidth="1.4"/>
        <path d="M490 120 L500 60 L510 60 L520 120" strokeWidth="1.4"/>
        {/* labels */}
        <text x="80" y="155" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">CONTRACT</text>
        <text x="200" y="155" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">REST</text>
        <text x="290" y="155" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">CONTRACT</text>
        <text x="410" y="155" fill="var(--brass-deep)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2">REST</text>
      </g>
    </svg>
  );
}

/* ================================================================
   useActiveSection — tracks which section is in view
   ================================================================ */
function useActiveSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }
    const sections = SCIENCE_SECTIONS.map((s) =>
      document.getElementById(s.id),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the entry closest to the top with > 0 intersection
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        visible.sort(
          (a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top,
        );
        setActiveId(visible[0].target.id);
      },
      {rootMargin: '-30% 0px -50% 0px', threshold: 0},
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return activeId;
}
