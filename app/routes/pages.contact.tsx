import {Link} from 'react-router';
import type {Route} from './+types/pages.contact';
import {PageHero} from '~/components/PageHero';

export const meta: Route.MetaFunction = () => [
  {title: 'Support — ETCH'},
  {
    name: 'description',
    content:
      'Get in touch with the ETCH support team. Typical reply within one business day.',
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        headline="We're"
        serif="here"
        lede="Order issues, device questions, returns, Coached intake — drop us a line. Typical reply within one business day."
      />

      <section className="etch-section ivory">
        <div className="wrap">
          <div className="contact-grid">
            {/*
              PRESENTATIONAL FORM — submit is wired in a later prompt
              (Resend / customer-service inbox). The onSubmit just prevents
              default for now so the page is self-contained.
            */}
            <form
              className="contact-form"
              data-reveal
              onSubmit={(e) => e.preventDefault()}
              aria-label="Contact support"
            >
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="c-name">Your name</label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="c-email">Email</label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="c-order">Order number (optional)</label>
                <input
                  id="c-order"
                  name="order"
                  type="text"
                  placeholder="e.g. ETCH-10472"
                />
              </div>
              <div className="form-field">
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  placeholder="Tell us what's up — questions, an order issue, returns, the Coached Method intake."
                />
              </div>
              <p className="fine">
                We never share your email. By submitting you agree to our{' '}
                <a href="/policies/privacy-policy">privacy policy</a>.
              </p>
              <button type="submit" className="btn" style={{alignSelf: 'flex-start'}}>
                Send message
              </button>
            </form>

            <aside
              className="contact-side"
              data-reveal
              style={{['--reveal-delay' as string]: '120ms'}}
            >
              <h3>Email</h3>
              {/* placeholder support address — replace with the real inbox at launch */}
              <div className="email">support@etch.com</div>

              <h3 style={{marginTop: 18}}>Quick links</h3>
              <div className="quick-links">
                <Link to="/pages/faq">FAQ</Link>
                <Link to="/pages/returns">Returns</Link>
                <Link to="/pages/warranty">Warranty</Link>
                <Link to="/pages/how-to-use">Getting started</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
