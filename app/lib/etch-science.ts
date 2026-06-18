/**
 * Long-form Science page — section index for the sticky nav.
 * Each section in pages.science.tsx is wrapped in an <section id={id}>
 * whose anchor link lives here.
 */
export type ScienceSection = {
  id: string;
  /** Short label shown in the sticky nav */
  nav: string;
};

export const SCIENCE_SECTIONS: ScienceSection[] = [
  {id: 'premise', nav: 'The premise'},
  {id: 'contraction', nav: 'How muscles contract'},
  {id: 'ems', nav: 'What EMS does'},
  {id: 'recruitment', nav: 'Recruitment'},
  {id: 'muscles', nav: 'The muscles'},
  {id: 'limits', nav: 'What it doesn’t do'},
  {id: 'system', nav: 'Why it’s a system'},
  {id: 'engine', nav: 'The engine'},
  {id: 'heritage', nav: 'Heritage & evidence'},
  {id: 'safety', nav: 'Safety'},
  {id: 'expectations', nav: 'Realistic expectations'},
  {id: 'glossary', nav: 'Glossary'},
];

export type GlossaryEntry = {term: string; def: string};

export const SCIENCE_GLOSSARY: GlossaryEntry[] = [
  {
    term: 'EMS',
    def: 'Electrical Muscle Stimulation. A precisely-shaped current delivered through skin-mounted pads that depolarises the motor nerves directly, evoking a contraction without a voluntary command.',
  },
  {
    term: 'Motor unit',
    def: 'A single motor neuron plus every muscle fibre it innervates. The smallest functional unit of voluntary movement — when the neuron fires, every fibre in its unit contracts.',
  },
  {
    term: 'Rectus abdominis',
    def: 'The long, paired muscle running vertically down the front of the abdomen — the visible "six-pack" muscle. Flexes the trunk and stabilises against extension.',
  },
  {
    term: 'Obliques',
    def: 'The internal and external obliques wrap the sides of the trunk. They rotate, side-flex and stabilise — and they sit closer to the skin than the deep stabilisers.',
  },
  {
    term: 'Transversus abdominis',
    def: 'The deepest abdominal muscle, wrapping the trunk like a corset. Almost entirely a stabiliser — it doesn’t respond to crunches and is hard to fully recruit voluntarily.',
  },
  {
    term: 'Gluteus maximus / medius / minimus',
    def: 'The glute group. Maximus is the largest, responsible for hip extension and shape. Medius and minimus sit underneath and stabilise the pelvis during single-leg work.',
  },
  {
    term: 'Hypertrophy',
    def: 'Growth in muscle fibre size in response to mechanical tension and progressive overload. Hypertrophy is what builds shape; EMS supports it, training drives it.',
  },
  {
    term: 'Progressive overload',
    def: 'Gradually increasing the demand on a muscle over time — more load, more reps, more intensity, more sets, better technique. The first principle of strength training.',
  },
  {
    term: 'Mind-muscle connection',
    def: 'Your trained ability to consciously recruit and tense a specific muscle. EMS reinforces it by giving you the felt sensation of full recruitment to mirror voluntarily.',
  },
  {
    term: 'Body composition',
    def: 'The ratio of fat mass to lean mass in your body. Changed by overall energy balance and training — not by stimulating one muscle group locally.',
  },
  {
    term: 'Spot reduction (myth)',
    def: 'The widely-debunked idea that you can lose fat from a specific area by training only that area. Fat is mobilised systemically; where you lose it is driven by genetics and overall energy balance.',
  },
];
