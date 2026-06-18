export type PdpStep = {title: string; text: string};
export type PdpSpec = {label: string; value: string};
export type PdpFaq = {q: string; a: string};

export type PdpContent = {
  tagline: string;
  howItWorks: [PdpStep, PdpStep, PdpStep];
  whatsInBox: string[];
  specs: PdpSpec[];
  faq: PdpFaq[];
};

const SPECS: PdpSpec[] = [
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

const CORE_FAQ: PdpFaq[] = [
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
    a: 'Most people feel the abs firm up within 2–3 weeks; visible change builds over the full eight weeks with consistent training and fuel. Individual results vary.',
  },
  {
    q: 'Can anyone use it?',
    a: 'Do not use EMS with a pacemaker or implanted electronic device, a heart condition, epilepsy, or during pregnancy. Consult a physician if unsure.',
  },
  {
    q: 'How long do the pads last?',
    a: 'About 25 sessions per set. Refills are available on subscription so you’re never caught short.',
  },
];

const FORM_FAQ: PdpFaq[] = [
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
    a: 'Most people feel the glutes firm up within 2–3 weeks; visible change builds over the full eight weeks with consistent training and fuel. Individual results vary.',
  },
  {
    q: 'Can anyone use it?',
    a: 'Do not use EMS with a pacemaker or implanted electronic device, a heart condition, epilepsy, or during pregnancy. Consult a physician if unsure.',
  },
  {
    q: 'How long do the pads last?',
    a: 'About 25 sessions per set. Refills are available on subscription so you’re never caught short.',
  },
];

const CORE: PdpContent = {
  tagline: 'Deep abdominal activation, twenty minutes at a time.',
  howItWorks: [
    {
      title: 'Place',
      text: 'Center the pad array over your abs, wings reaching to the obliques, on clean, lightly damp skin.',
    },
    {
      title: 'Activate',
      text: 'Twenty minutes. Contract hard into every pulse, breathe with the rhythm, relax on release.',
    },
    {
      title: 'Reveal',
      text: 'Pair it with the training and fuel in The ETCH Method. Definition builds over the eight-week protocol.',
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
  specs: SPECS,
  faq: CORE_FAQ,
};

const FORM: PdpContent = {
  tagline: 'Wake, work and build the glutes — on your schedule.',
  howItWorks: [
    {
      title: 'Place',
      text: 'A pad over the fullest part of each glute, symmetrical, off the tailbone and lower fold.',
    },
    {
      title: 'Activate',
      text: 'Twenty minutes. Squeeze into every pulse, or run glute bridges in time with it.',
    },
    {
      title: 'Build',
      text: 'Pair it with the loaded training and fuel in The ETCH Method. Shape builds over the eight-week protocol.',
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
  specs: SPECS,
  faq: FORM_FAQ,
};

export const PDP_CONTENT: Record<string, PdpContent> = {
  'etch-flux-core': CORE,
  'etch-flux-form': FORM,
  default: CORE,
};

export function getPdpContent(handle: string | undefined | null): PdpContent {
  if (!handle) return PDP_CONTENT.default;
  return PDP_CONTENT[handle] ?? PDP_CONTENT.default;
}
