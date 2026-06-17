import {Suspense} from 'react';
import {Await, NavLink} from 'react-router';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer">
            <div className="footer-inner">
              <div className="footer-top">
                <div>
                  <div className="brand-mark">
                    ETCH<span className="dot">.</span>
                  </div>
                  <div className="footer-tag">Definition, engineered.</div>
                </div>
                <div className="footer-cols">
                  <div className="footer-col">
                    <h5>Shop</h5>
                    <NavLink to="/collections/all">The devices</NavLink>
                    <NavLink to="/pages/the-method">The Method</NavLink>
                    <NavLink to="/pages/pads">Pad refills</NavLink>
                    <NavLink to="/pages/subscription">Subscription</NavLink>
                  </div>
                  <div className="footer-col">
                    <h5>Learn</h5>
                    <NavLink to="/pages/science">The science</NavLink>
                    <NavLink to="/pages/how-to-use">How to use</NavLink>
                    <NavLink to="/blogs/journal">Journal</NavLink>
                    <NavLink to="/pages/faq">FAQ</NavLink>
                  </div>
                  {footer?.menu && header.shop.primaryDomain?.url ? (
                    <FooterMenu
                      menu={footer.menu}
                      primaryDomainUrl={header.shop.primaryDomain.url}
                      publicStoreDomain={publicStoreDomain}
                    />
                  ) : (
                    <div className="footer-col">
                      <h5>Company</h5>
                      <NavLink to="/policies">Policies</NavLink>
                      <NavLink to="/pages/contact">Contact</NavLink>
                      <NavLink to="/pages/returns">Returns</NavLink>
                      <NavLink to="/pages/warranty">Warranty</NavLink>
                    </div>
                  )}
                </div>
              </div>
              <p className="footer-legal">
                ETCH devices use electrical muscle stimulation intended to tone,
                firm and strengthen muscle. They are not weight-loss or
                fat-reduction devices, and results vary with use and individual
                physiology. Consult a physician before use if you have a cardiac
                condition, are pregnant, or use an implanted electronic device.
                © 2026 ETCH. All rights reserved.
              </p>
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

function FooterMenu({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: string;
}) {
  return (
    <div className="footer-col">
      <h5>Company</h5>
      <nav className="footer-menu" role="navigation">
        {(menu || {items: []}).items.map((item) => {
          if (!item.url) return null;
          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primaryDomainUrl)
              ? new URL(item.url).pathname
              : item.url;
          const isExternal = !url.startsWith('/');
          return isExternal ? (
            <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
              {item.title}
            </a>
          ) : (
            <NavLink end key={item.id} prefetch="intent" to={url}>
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
