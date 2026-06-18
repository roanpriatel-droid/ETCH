import type {AccordionItem} from '~/components/Accordion';

/* ================================================================
   THE METHOD
   ================================================================ */
export type MethodPillar = {n: string; title: string; text: string};
export type MethodModule = {n: string; title: string; text: string};
export type MethodOption = {
  name: string;
  price: string;
  blurb: string;
  bullets: string[];
  cta?: {label: string; to: string};
};

export const METHOD_PILLARS: MethodPillar[] = [
  {
    n: '01',
    title: 'Activate',
    text: 'Twenty minutes of deep EMS — the second channel to the muscle, every other day. Your device executes the schedule exactly; you just place it and feel the contraction.',
  },
  {
    n: '02',
    title: 'Train',
    text: 'Real load, twice a week. Squats, hinges, presses — the lifts that build the shape the activation reveals. The Method tells you which movements, what weight, and how to ramp.',
  },
  {
    n: '03',
    title: 'Fuel',
    text: 'Eat to support the work: enough protein, enough sleep, honest carbs around training. The Method gives plate templates and macro targets — no fads, no calorie burning.',
  },
];

export const METHOD_MODULES: MethodModule[] = [
  {n: '01', title: 'Calibration', text: 'Find your working intensity on day one and every two weeks after. The honest dial, not guesswork.'},
  {n: '02', title: 'The 8-week schedule', text: 'Every session — what mode, what intensity, how long — across the protocol, matched to your device.'},
  {n: '03', title: 'Train so it shows', text: 'The 3 lifts and 2 accessories per week that build the structure the activation reveals.'},
  {n: '04', title: 'Fuel', text: 'Plate templates, protein targets, carb timing around training. No calorie counting, no fads.'},
  {n: '05', title: 'Recovery cycling', text: 'Sleep, walks, light EMS on the off days. What earns its place and what doesn’t.'},
  {n: '06', title: 'The tracker', text: 'A simple weekly check-in — adherence, sleep, energy, contraction quality. Five fields.'},
  {n: '07', title: 'Troubleshooting', text: 'Pad lifting, intensity plateaus, soreness, scheduling around travel — solved.'},
  {n: '08', title: 'Maintenance', text: 'Beyond week eight: a sustainable cadence that holds the work without needing eight weeks again.'},
];

export const METHOD_OPTIONS: MethodOption[] = [
  {
    name: 'Free with every device',
    price: 'Included',
    blurb: 'The matched 30-page protocol ships free with Flux Core, Flux Form, or the Set — digital PDF + web access, lifetime updates.',
    bullets: [
      'Core comes with Method: Core',
      'Form comes with Method: Form',
      'Set comes with Method: Complete',
    ],
    cta: {label: 'Choose a device', to: '/products/the-etch-set'},
  },
  {
    name: 'Standalone',
    price: '$39',
    blurb: 'The full 30-page protocol on its own — for readers who don’t own a device yet, or who want the system before committing. Choose the variant matched to the device you’ll run.',
    bullets: [
      'PDF + web reader',
      'Lifetime updates',
      'Core (abdominal) or Form (glute) variant',
    ],
    cta: {label: 'Get Method: Core', to: '/products/the-etch-method-core'},
  },
  {
    name: 'Coached',
    price: '$199',
    blurb: 'A personalized 8-week plan built from a short intake — training history, goals, equipment, schedule. Adjustments at week 2 and 5.',
    bullets: [
      'Intake form + plan within 3 business days',
      'Two coached check-ins',
      'Direct email support across the 8 weeks',
    ],
    cta: {label: 'Apply for Coached', to: '/pages/contact'},
  },
];

/* ================================================================
   SCIENCE
   ================================================================ */
export type ScienceBlock = {eyebrow: string; title: string; serif: string; body: string};

export const SCIENCE_HOW: ScienceBlock = {
  eyebrow: 'The mechanism',
  title: 'A',
  serif: 'second channel',
  body: 'Muscles contract when motor nerves fire them. EMS sends a mild, precisely-shaped current that evokes that contraction directly — recruiting fibres that are hard to reach with voluntary effort alone. It is not a replacement for training; it is a second channel layered on top.',
};

export const SCIENCE_MUSCLES = [
  {
    name: 'Flux Core',
    target: 'Rectus abdominis + obliques',
    text: 'The pad array covers the rectus abdominis with wings reaching the obliques. The contraction is felt as a deep brace — the same one that stabilises every heavy lift.',
  },
  {
    name: 'Flux Form',
    target: 'Gluteus maximus + medius',
    text: 'A pad on the fullest part of each glute fires the maximus and medius together. The contraction is felt as a hard squeeze, the same shape you’d feel at the top of a heavy hip thrust.',
  },
];

export const SCIENCE_DOES: string[] = [
  'Tones and strengthens the targeted muscle',
  'Conditions the deep stabilisers that voluntary effort under-recruits',
  'Builds the mind-muscle connection that carries into training',
  'Drives circulation on recovery days at low frequency',
];

export const SCIENCE_DOESNT: string[] = [
  'It is NOT a weight-loss or fat-reduction device',
  'It does NOT produce spot reduction — fat sits on top of every muscle',
  'It does NOT replace the lifts and fuel that build the shape',
  'It does NOT deliver instant results — visible change takes the 8-week protocol',
];

export const SCIENCE_HERITAGE = {
  eyebrow: 'Heritage',
  title: 'The same family of tech',
  serif: 'physiotherapists',
  trail: ' have used for decades.',
  body: 'EMS has been in clinical use for rehab, strength conditioning and recovery for over forty years. ETCH brings that tool out of the clinic and into a 20-minute home protocol — the same principle, tuned for definition.',
};

/* ================================================================
   HOW TO USE
   ================================================================ */
export type Step = {n: string; title: string; text: string};

export const HOWTO_STEPS: Step[] = [
  {
    n: '01',
    title: 'Placement',
    text: 'Clean skin, lightly damp (a wipe is fine). Position the pad over the muscle belly — Core centered on the abs with the wings on the obliques, Form over the fullest part of each glute, symmetrical and clear of the tailbone.',
  },
  {
    n: '02',
    title: 'Intensity',
    text: 'Climb the dial slowly. You’re looking for a strong, comfortable contraction — roughly 4 to 6 out of 10 on session one. The dial is what changes; the time stays at twenty minutes.',
  },
  {
    n: '03',
    title: 'The session',
    text: 'Contract into every pulse, breathe with the rhythm, relax on release. Twenty minutes auto-timed. If pain — sharp, stinging, anything that isn’t a firm contraction — ease the intensity and check pad placement.',
  },
  {
    n: '04',
    title: 'After',
    text: 'Peel pads slowly, store back on the backing sheet (this is what makes them last). Note the session in the tracker. Walk, hydrate, sleep — the muscle does the work between sessions, not during.',
  },
];

export const HOWTO_SAFETY: string[] = [
  'Do not use with a pacemaker or implanted electronic device',
  'Do not use with a heart condition, epilepsy, or during pregnancy',
  'Do not use over open wounds, broken skin, or the front of the neck',
  'Stop immediately on sharp pain, numbness, or lasting redness',
  'When in doubt, consult a physician',
];

/* ================================================================
   FAQ — full grouped accordion
   ================================================================ */
export type FaqGroup = {title: string; items: AccordionItem[]};

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: 'Using',
    items: [
      {q: 'Does it hurt?', a: 'No. A strong, firm contraction, never sharp pain. If it stings, lower the intensity and check pad placement.'},
      {q: 'How often should I use it?', a: 'Follow the schedule in The ETCH Method — typically 4–6 sessions a week across the 8-week protocol, with lighter recovery cycles on off days.'},
      {q: 'How long is a session?', a: 'Twenty minutes, auto-timed. The intensity ramps in the first two minutes and eases in the final one.'},
      {q: 'Where do the pads go?', a: 'Flux Core: centered on the abs with the wings reaching the obliques. Flux Form: a pad on the fullest part of each glute, symmetrical, off the tailbone. The Method has placement maps.'},
      {q: 'Can I use it on other muscles?', a: 'Each device is tuned to its muscle group — Core for abs and obliques, Form for the glutes. Other muscles will require different placement and pad shape.'},
    ],
  },
  {
    title: 'Results',
    items: [
      {q: 'When will I see results?', a: 'Most owners feel the muscle firm up within 2–3 weeks. Visible change builds across the full 8 weeks of the protocol with consistent training and fuel. Individual results vary.'},
      {q: 'Will it work without training or eating well?', a: 'ETCH tones and strengthens the muscle. Visible definition also depends on the training and fuel that surround the work — exactly what The ETCH Method covers. There is no spot reduction, and ETCH is not a weight-loss or fat-reduction device.'},
      {q: 'Can it replace the gym?', a: 'No. ETCH is a multiplier on training, not a substitute for it. The lifts and fuel build the shape the activation reveals.'},
    ],
  },
  {
    title: 'Safety',
    items: [
      {q: 'Who should not use EMS?', a: 'Do not use with a pacemaker or implanted electronic device, a heart condition, epilepsy, or during pregnancy. Avoid open wounds and the front of the neck. Consult a physician if unsure.'},
      {q: 'Is EMS safe?', a: 'Used sensibly within the protocol, yes. EMS is the same family of technology physiotherapists have used for over forty years. The contraindications above are the firm rules.'},
      {q: 'Can I use it every day?', a: 'Follow the schedule — recovery is when the muscle adapts. The protocol alternates working sessions with lighter recovery cycles.'},
    ],
  },
  {
    title: 'Orders',
    items: [
      {q: 'Do you ship worldwide?', a: 'Yes — free, carbon-neutral shipping worldwide. Tracked and insured.'},
      {q: 'What\'s your return policy?', a: 'Sixty-night money-back guarantee on devices. See the Returns page for the steps.'},
      {q: 'Is there a warranty?', a: 'Yes — a 2-year limited warranty on the device hardware. See the Warranty page.'},
      {q: 'How long do the pads last? How do I get refills?', a: 'About 25 sessions per set. Refills are available as a single pack or on a subscription that auto-ships every 4–6 weeks. See the Pads and Subscription pages.'},
    ],
  },
  {
    title: 'The Method',
    items: [
      {q: 'What is The ETCH Method?', a: 'The 8-week protocol that turns activation into a visibly defined result — exact sessions, training, fuel, recovery. Free with every device.'},
      {q: 'Is the matched guide really free?', a: 'Yes. Flux Core ships with Method: Core, Flux Form ships with Method: Form, the Set ships with Method: Complete. Standalone and Coached versions are also available — see The Method page.'},
    ],
  },
];

/* ================================================================
   RETURNS / WARRANTY / PADS / SUBSCRIPTION — info rows
   ================================================================ */
export type InfoRow = {label: string; value: string};

export const RETURNS_ROWS: InfoRow[] = [
  {label: 'Window', value: '60 nights from delivery'},
  {label: 'Eligible', value: 'Devices in returnable condition'},
  {label: 'Not eligible', value: 'Opened gel pads (hygiene), digital products'},
  {label: 'Keep', value: 'The ETCH Method guide is yours regardless'},
  {label: 'Refund timing', value: 'Issued within 5 business days of return receipt'},
  {label: 'Shipping', value: 'Prepaid return label provided'},
];

export const RETURNS_STEPS: Step[] = [
  {n: '01', title: 'Contact support', text: 'Email support with your order number and a one-line note on why it isn’t for you. No hoops, no script.'},
  {n: '02', title: 'Pack it back up', text: 'We’ll send a prepaid label. Drop the device, charging cable and original packaging in the return box.'},
  {n: '03', title: 'Refund issued', text: 'Once we receive and inspect the device, the refund posts within 5 business days to the original payment method.'},
];

export const WARRANTY_ROWS: InfoRow[] = [
  {label: 'Duration', value: '2 years from purchase'},
  {label: 'Coverage', value: 'Manufacturing defects under normal use'},
  {label: 'Covered', value: 'Hardware failures, battery degradation beyond spec'},
  {label: 'Not covered', value: 'Accidental damage, water damage beyond IPX5, misuse, unauthorized repair'},
  {label: 'Consumables', value: 'Gel pads are consumable — see Pads page'},
  {label: 'Remedy', value: 'Repair, replacement, or refund — at our discretion'},
];

export const WARRANTY_STEPS: Step[] = [
  {n: '01', title: 'Register (optional)', text: 'Registering your device shortens claim turnaround. Use the link emailed with your order, or contact support with your serial number.'},
  {n: '02', title: 'File a claim', text: 'Email support with order number, serial number, and a short description of the issue — a photo or short video helps.'},
  {n: '03', title: 'We fix or replace', text: 'Most claims are resolved within 7 business days. We’ll arrange repair or send a replacement unit.'},
];

export const PADS_ROWS: InfoRow[] = [
  {label: 'Pad life', value: '~25 sessions per set'},
  {label: 'Replacement', value: 'When adhesion drops or the gel feels dry'},
  {label: 'Storage', value: 'Always re-stick to the backing sheet after use'},
  {label: 'Single refill', value: '$32 — one set per device'},
  {label: 'Subscription', value: '$24/mo, auto-ships every 4–6 weeks'},
];

export const PADS_CARE: string[] = [
  'Always re-stick the pad to its backing sheet between sessions',
  'Wipe skin clean before use — oils kill adhesion fast',
  'Store the backing sheet flat, out of direct sun',
  'Replace at the first sign of drying or weak contact',
];

export const SUBSCRIPTION_HOW: Step[] = [
  {n: '01', title: 'Choose your cadence', text: '4 weeks (heavy users), 5 weeks (standard protocol), or 6 weeks (lighter cadence). Default is 5.'},
  {n: '02', title: 'Auto-ship', text: 'Fresh pads arrive a few days before your current set runs out. Free shipping, tracked.'},
  {n: '03', title: 'Skip, pause, or cancel', text: 'No lock-in. Manage the schedule in your account. Travel weeks are easy.'},
];

export const SUBSCRIPTION_PERKS: string[] = [
  '$24/mo — the lowest per-session pad cost',
  'Free, carbon-neutral shipping on every refill',
  'Member pricing on accessories and travel sleeves',
  'Early access to future device releases',
  'Skip / pause / cancel anytime in your account',
];
