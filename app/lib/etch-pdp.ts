export type PdpBenefit = {title: string; text: string};
export type PdpStep = {step: string; title: string; text: string};
export type PdpSpec = {label: string; value: string};
export type PdpFaq = {q: string; a: string};

export type PdpContent = {
  /** Display name (large heading on PDP) */
  name: string;
  /** Mono eyebrow line above the name (release / edition) */
  edition: string;
  /** Price string shown in the buy box */
  price: string;
  /** Always null — we never use fake compare-at anchors */
  compareNote: string | null;
  /** Mono target line under the name (e.g. "Abdominal EMS") */
  target: string;
  /** Italic-tone short tagline */
  tagline: string;
  /** 1–2 sentence buy-box description */
  shortDesc: string;
  /** Four benefit cards */
  benefits: [PdpBenefit, PdpBenefit, PdpBenefit, PdpBenefit];
  /** What's in the box list */
  whatsInBox: string[];
  /** Three-step how-it-works */
  howItWorks: [PdpStep, PdpStep, PdpStep];
  /** Device specs — omit for consumables */
  specs?: PdpSpec[];
  /** Pad-care list — only on flux-pads */
  padCare?: string[];
  /** FAQ for this product */
  faq: PdpFaq[];
  /** One-line guarantee summary */
  guarantee: string;
  /** Marks the Set entry — enables Save $49 oxblood tag + compare highlight */
  isSet?: boolean;
  /** Marks the consumable entry — skip specs/compare sections */
  isPads?: boolean;
};

/* ================================================================
   Shared Flux platform specs (Core / Form / Set use the same)
   ================================================================ */
const FLUX_SPECS: PdpSpec[] = [
  {label: 'Modes', value: '12'},
  {label: 'Intensity levels', value: '19'},
  {label: 'Session', value: '20 min (auto-timer)'},
  {label: 'Battery', value: '~10 sessions per charge'},
  {label: 'Charging', value: 'USB-C, ~2 hrs'},
  {label: 'Pad life', value: '~25 sessions per set'},
  {label: 'Control', value: 'SmartWave™ app + on-device'},
  {label: 'Housing', value: 'Medical-grade silicone, anodized aluminum'},
  {label: 'Water resistance', value: 'Sweat-resistant (IPX5)'},
  {label: 'Warranty', value: '2-year limited'},
];

const SHARED_GUARANTEE = '60-night money-back · 2-year warranty · free shipping';

/* ================================================================
   FLUX CORE
   ================================================================ */
const CORE: PdpContent = {
  name: 'ETCH Flux™ — Core',
  edition: 'Founding release · No. 001',
  price: '$199',
  compareNote: null,
  target: 'Abdominal EMS',
  tagline: 'Deep abdominal activation, twenty minutes at a time.',
  shortDesc:
    'A precision EMS instrument for the rectus abdominis and obliques. Ships with The ETCH Method: Core — the matched 8-week protocol — included free.',
  benefits: [
    {
      title: 'Reach what training misses',
      text: 'Recruits the deep fibres voluntary effort rarely activates — a second channel layered on top of your lifts.',
    },
    {
      title: 'Tone and strengthen',
      text: 'Twelve modes, nineteen intensities. Progressive overload you dial in by feel, building the brace and the look together.',
    },
    {
      title: 'Twenty minutes, anywhere',
      text: 'Auto-timed sessions on your schedule. No equipment to set up, no load on the joint.',
    },
    {
      title: 'The Method, included',
      text: 'The 30-page 8-week protocol ships free — every session, the training and fuel that reveal it.',
    },
  ],
  whatsInBox: [
    'ETCH Flux Core driver unit',
    'Abdominal gel-pad set',
    'USB-C charging cable',
    'The ETCH Method: Core (digital, 30-page protocol)',
    'Quickstart placement card',
    'Travel sleeve',
  ],
  howItWorks: [
    {
      step: '01',
      title: 'Place',
      text: 'Center the pad array over your abs, wings reaching to the obliques, on clean, lightly damp skin.',
    },
    {
      step: '02',
      title: 'Activate',
      text: 'Twenty minutes. Contract hard into every pulse, breathe with the rhythm, relax on release.',
    },
    {
      step: '03',
      title: 'Reveal',
      text: 'Pair it with the training and fuel in The ETCH Method. Definition builds over the eight-week protocol.',
    },
  ],
  specs: FLUX_SPECS,
  faq: [
    {
      q: 'Does it hurt?',
      a: 'No. A strong, firm contraction, never sharp pain. If it stings, lower the intensity and check placement.',
    },
    {
      q: 'How often should I use it?',
      a: 'Follow the schedule in The ETCH Method — typically 4–6 sessions a week across the eight-week protocol, with lighter recovery use on off days.',
    },
    {
      q: 'When will I see results?',
      a: 'Most people feel the abs firm up within 2–3 weeks. Visible change builds over the full eight weeks with consistent training and fuel. Individual results vary.',
    },
    {
      q: 'Who shouldn’t use it?',
      a: 'Do not use EMS with a pacemaker or implanted electronic device, a heart condition, epilepsy, or during pregnancy. Consult a physician if unsure.',
    },
    {
      q: 'How long do the pads last?',
      a: 'About 25 sessions per set. Refills are available as a single set or on subscription — see the Pads page.',
    },
  ],
  guarantee: SHARED_GUARANTEE,
};

/* ================================================================
   FLUX FORM
   ================================================================ */
const FORM: PdpContent = {
  name: 'ETCH Flux™ — Form',
  edition: 'Founding release · No. 001',
  price: '$199',
  compareNote: null,
  target: 'Glute EMS',
  tagline: 'Wake, work and build the glutes — on your schedule.',
  shortDesc:
    'A precision EMS instrument for the gluteus maximus and medius. Ships with The ETCH Method: Form — the matched 8-week protocol — included free.',
  benefits: [
    {
      title: 'Wake the deep glute',
      text: 'Fires the maximus and medius together with a contraction shape voluntary squeezing under-recruits.',
    },
    {
      title: 'Shape under load',
      text: 'Use it on its own or layer it during glute bridges and hip thrusts — the same contraction, doubled.',
    },
    {
      title: 'Twenty minutes, anywhere',
      text: 'Auto-timed sessions on your schedule. No equipment to set up, no load on the joint.',
    },
    {
      title: 'The Method, included',
      text: 'The 30-page 8-week protocol ships free — every session, the training and fuel that reveal it.',
    },
  ],
  whatsInBox: [
    'ETCH Flux Form driver unit',
    'Dual glute gel-pad set',
    'USB-C charging cable',
    'The ETCH Method: Form (digital, 30-page protocol)',
    'Quickstart placement card',
    'Travel sleeve',
  ],
  howItWorks: [
    {
      step: '01',
      title: 'Place',
      text: 'A pad over the fullest part of each glute, symmetrical, off the tailbone and lower fold.',
    },
    {
      step: '02',
      title: 'Activate',
      text: 'Twenty minutes. Squeeze into every pulse, or run glute bridges in time with it.',
    },
    {
      step: '03',
      title: 'Build',
      text: 'Pair it with the loaded training and fuel in The ETCH Method. Shape builds over the eight-week protocol.',
    },
  ],
  specs: FLUX_SPECS,
  faq: [
    {
      q: 'Does it hurt?',
      a: 'No. A strong, firm contraction, never sharp pain. If it stings, lower the intensity and check placement.',
    },
    {
      q: 'How often should I use it?',
      a: 'Follow the schedule in The ETCH Method — typically 4–6 sessions a week across the eight-week protocol, with lighter recovery use on off days.',
    },
    {
      q: 'When will I see results?',
      a: 'Most people feel the glutes firm up within 2–3 weeks. Visible change builds over the full eight weeks with consistent training and fuel. Individual results vary.',
    },
    {
      q: 'Who shouldn’t use it?',
      a: 'Do not use EMS with a pacemaker or implanted electronic device, a heart condition, epilepsy, or during pregnancy. Consult a physician if unsure.',
    },
    {
      q: 'How long do the pads last?',
      a: 'About 25 sessions per set. Refills are available as a single set or on subscription — see the Pads page.',
    },
  ],
  guarantee: SHARED_GUARANTEE,
};

/* ================================================================
   THE ETCH SET (Core + Form)
   ================================================================ */
const SET: PdpContent = {
  name: 'The ETCH Set',
  edition: 'Best value · save $49',
  price: '$349',
  compareNote: null,
  target: 'Complete physique',
  tagline: 'Both devices. For the complete physique.',
  shortDesc:
    'Flux Core + Flux Form together. Abs, obliques and glutes activated on one protocol. Includes The ETCH Method: Complete — the full 8-week system across both — free.',
  benefits: [
    {
      title: 'Train abs and glutes together',
      text: 'Both Flux units on the same charging setup, the same SmartWave app, the same eight-week cadence.',
    },
    {
      title: 'Method: Complete, included',
      text: 'The combined protocol covers both devices — exact sessions, intensity ramps, training and fuel that reveal them.',
    },
    {
      title: 'The full system',
      text: 'Nothing else to add. Two devices, two pad sets, one guide, one travel sleeve — ready out of the box.',
    },
    {
      title: 'Best value',
      text: 'Forty-nine dollars less than the two devices apart, with Method: Complete bundled in.',
    },
  ],
  whatsInBox: [
    'ETCH Flux Core driver unit',
    'ETCH Flux Form driver unit',
    'Abdominal gel-pad set',
    'Dual glute gel-pad set',
    'USB-C charging cable',
    'The ETCH Method: Complete (digital, both protocols)',
    'Quickstart placement cards (Core + Form)',
    'Travel sleeve',
  ],
  howItWorks: [
    {
      step: '01',
      title: 'Place',
      text: 'Core over the abs and obliques; Form over the glutes. Clean, lightly damp skin, symmetrical placement.',
    },
    {
      step: '02',
      title: 'Activate',
      text: 'Twenty minutes per device, per session. The Method tells you which to run, when, and at what intensity.',
    },
    {
      step: '03',
      title: 'Build',
      text: 'Pair both with the training and fuel in Method: Complete. The full physique builds over the eight weeks.',
    },
  ],
  specs: FLUX_SPECS,
  faq: [
    {
      q: 'Do I use both devices the same day?',
      a: 'Sometimes. The schedule in Method: Complete sets which device, which day, and how to alternate so neither group is over- or under-trained.',
    },
    {
      q: 'Will it work without training or fuel?',
      a: 'It tones and strengthens the muscle. Visible definition also depends on overall training, fuel and recovery — exactly what The ETCH Method covers. ETCH is not a weight-loss or fat-reduction device.',
    },
    {
      q: 'How long until I see results?',
      a: 'Most people feel both groups firm up within 2–3 weeks. Visible change builds across the full eight weeks. Individual results vary.',
    },
    {
      q: 'Who shouldn’t use EMS?',
      a: 'Do not use with a pacemaker or implanted electronic device, a heart condition, epilepsy, or during pregnancy. Consult a physician if unsure.',
    },
    {
      q: 'Can I share it with a partner?',
      a: 'The hardware is shareable; the gel pads aren’t — they’re personal and consumable. A second set of pads is the cleanest way to share.',
    },
  ],
  guarantee: SHARED_GUARANTEE,
  isSet: true,
};

/* ================================================================
   FLUX PADS (consumable)
   ================================================================ */
const PADS: PdpContent = {
  name: 'Flux™ Replacement Pads',
  edition: 'Consumable · fits Core and Form',
  price: '$32 single · $24/mo subscription',
  compareNote: null,
  target: 'Consumable',
  tagline: 'Pads that keep up.',
  shortDesc:
    'The conductive hydrogel that bonds pad to skin wears out after about 25 sessions. Subscription auto-ships every 4–6 weeks at the lowest per-session cost — free shipping, skip / pause / cancel anytime.',
  benefits: [
    {
      title: 'Fits both devices',
      text: 'One pad family for Flux Core and Flux Form — same backing, calibrated shapes for each.',
    },
    {
      title: 'Never caught short',
      text: 'Subscription times fresh pads to arrive a few days before your current set runs out — no missed sessions.',
    },
    {
      title: 'Lowest per-session cost',
      text: 'Subscription is $24/mo — cheaper than single refills, free shipping included.',
    },
    {
      title: 'No lock-in',
      text: 'Skip a cycle, pause for travel, cancel anytime — managed in your account, no email gymnastics.',
    },
  ],
  whatsInBox: [
    'One full pad set per cycle (Core or Form)',
    'Backing sheet for storage between sessions',
    'Replacement reminder card',
  ],
  howItWorks: [
    {
      step: '01',
      title: 'Choose your cadence',
      text: '4 weeks (heavy users), 5 weeks (standard protocol) or 6 weeks (lighter use). Default is 5.',
    },
    {
      step: '02',
      title: 'Auto-ship',
      text: 'Fresh pads arrive a few days before your current set runs out. Free, tracked shipping worldwide.',
    },
    {
      step: '03',
      title: 'Adjust anytime',
      text: 'Manage the schedule in your account — skip a cycle, pause for travel, or cancel without friction.',
    },
  ],
  padCare: [
    'Always re-stick the pad to its backing sheet between sessions',
    'Wipe skin clean before use — oils kill adhesion fast',
    'Store the backing sheet flat, out of direct sun',
    'Replace at the first sign of drying or weak contact',
    'Never share pads between people — they’re personal',
  ],
  faq: [
    {
      q: 'How long does a set last?',
      a: 'About 25 sessions, depending on skin prep and storage. Care tips below extend that meaningfully.',
    },
    {
      q: 'Single set or subscription?',
      a: 'A single set is $32 — useful as a one-off. Subscription is $24/mo, with free shipping, that you can skip or pause anytime. Subscription is the lowest per-session cost.',
    },
    {
      q: 'Do these fit both Core and Form?',
      a: 'Yes. The pad family fits both Flux Core (abdominal shape) and Flux Form (dual glute shape). Pick the variant matching your device at checkout.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. No commitment — skip, pause or cancel in your account. The lowest per-session cost stays as long as you’re subscribed.',
    },
  ],
  guarantee: 'Free, carbon-neutral shipping · skip, pause or cancel anytime',
  isPads: true,
};

/* ================================================================
   REGISTRY + helper
   ================================================================ */
export const PDP_CONTENT: Record<string, PdpContent> = {
  'etch-flux-core': CORE,
  'etch-flux-form': FORM,
  'the-etch-set': SET,
  'flux-pads': PADS,
  default: CORE,
};

export function getPdpContent(
  handle: string | undefined | null,
): PdpContent | null {
  if (!handle) return null;
  return PDP_CONTENT[handle] ?? null;
}

export function getPdpContentOrDefault(
  handle: string | undefined | null,
): PdpContent {
  return getPdpContent(handle) ?? PDP_CONTENT.default;
}
