import {Link} from 'react-router';
import type {Route} from './+types/pages.faq';
import {PageHero} from '~/components/PageHero';
import {Accordion} from '~/components/Accordion';
import {FAQ_GROUPS} from '~/lib/etch-pages';

export const meta: Route.MetaFunction = () => [
  {title: 'FAQ — ETCH'},
  {
    name: 'description',
    content:
      'Every question, answered honestly — using, results, safety, orders, and The Method.',
  },
];

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        headline="Everything you"
        serif="might ask"
        lede="Five groups, every honest specific. If yours isn't here, contact support — we reply within a business day."
        ctas={[
          {label: 'Contact support', to: '/pages/contact', variant: 'ghost'},
        ]}
      />

      <section className="etch-section ivory">
        <div className="wrap">
          {FAQ_GROUPS.map((g, gi) => (
            <section
              className="acc-group"
              key={g.title}
              data-reveal
              style={{['--reveal-delay' as string]: `${gi * 60}ms`}}
            >
              <h3>{g.title}</h3>
              <Accordion items={g.items} idPrefix={`faq-${g.title.toLowerCase().replace(/\s+/g, '-')}`} />
            </section>
          ))}
        </div>
      </section>

      <section className="etch-section plate">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <p className="eyebrow">Still curious</p>
            <h2>
              Talk to a <span className="serif">human</span>.
            </h2>
            <p className="lede">
              Our support team trains with the devices. Typical reply within
              one business day.
            </p>
            <div style={{display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap'}}>
              <Link className="btn" to="/pages/contact">
                Contact support
              </Link>
              <Link className="btn-ghost" to="/pages/how-to-use">
                How to use →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
