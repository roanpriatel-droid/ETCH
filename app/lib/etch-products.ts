export type EtchProduct = {
  name: string;
  handle: string;
  url: string;
  tagline: string;
  target: string;
  price: string;
  priceNumeric: number;
  bullets: string[];
};

export const FLUX_CORE: EtchProduct = {
  name: 'ETCH Flux — Core',
  handle: 'etch-flux-core',
  url: '/products/etch-flux-core',
  tagline: 'Deep abdominal activation, twenty minutes at a time.',
  target: 'Abs · Obliques',
  price: '$199',
  priceNumeric: 199,
  bullets: [
    '12 modes · 19 intensity levels',
    '20-minute auto-timed session',
    'Includes The ETCH Method: Core',
  ],
};

export const FLUX_FORM: EtchProduct = {
  name: 'ETCH Flux — Form',
  handle: 'etch-flux-form',
  url: '/products/etch-flux-form',
  tagline: 'Wake, work and build the glutes — on your schedule.',
  target: 'Glutes',
  price: '$199',
  priceNumeric: 199,
  bullets: [
    '12 modes · 19 intensity levels',
    'Dual symmetrical pad placement',
    'Includes The ETCH Method: Form',
  ],
};

export const THE_SET: EtchProduct = {
  name: 'The ETCH Set',
  handle: 'the-etch-set',
  url: '/products/the-etch-set',
  tagline: 'Both devices. For the complete physique.',
  target: 'Abs · Obliques · Glutes',
  price: '$349',
  priceNumeric: 349,
  bullets: [
    'Flux Core + Flux Form',
    'The ETCH Method: Complete — free',
    'Save $49 versus separate',
  ],
};

export const DEVICES: readonly EtchProduct[] = [FLUX_CORE, FLUX_FORM] as const;
export const ALL_PRODUCTS: readonly EtchProduct[] = [
  FLUX_CORE,
  FLUX_FORM,
  THE_SET,
] as const;
