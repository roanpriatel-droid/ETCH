import {Suspense, useEffect, useState} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

type NavItem = {label: string; to: string; sub?: string};

const NAV: NavItem[] = [
  {label: 'Flux Core', to: '/products/etch-flux-core', sub: 'Abs'},
  {label: 'Flux Form', to: '/products/etch-flux-form', sub: 'Glutes'},
  {label: 'The Set', to: '/products/the-etch-set', sub: 'Both'},
  {label: 'Method: Core', to: '/products/the-etch-method-core', sub: 'Protocol'},
  {label: 'Method: Form', to: '/products/the-etch-method-form', sub: 'Protocol'},
  {label: 'Pads', to: '/products/flux-pads', sub: 'Refills'},
  {label: 'Science', to: '/pages/science'},
];

const ANNOUNCEMENTS = [
  'Free, carbon-neutral shipping · worldwide',
  '60-night money-back · 2-year warranty',
  'Founding release · No. 001 · numbered allocation',
];

export function Header({isLoggedIn, cart}: HeaderProps) {
  const compact = useScrolledPast(40);
  return (
    <>
      <AnnouncementBar />
      <header className={`header${compact ? ' is-compact' : ''}`}>
        <NavLink prefetch="intent" to="/" end>
          <span className="brand-mark">
            ETCH<span className="dot">.</span>
          </span>
        </NavLink>
        <HeaderMenu viewport="desktop" />
        <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
      </header>
    </>
  );
}

/** True once the window has scrolled past `threshold` px. SSR-safe (false on first paint). */
function useScrolledPast(threshold: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => setPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return past;
}

function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="announcement-bar" role="status" aria-live="polite">
      <div className="ann-wrap">
        {ANNOUNCEMENTS.map((msg, i) => (
          <span
            key={msg}
            className={`ann-msg${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeaderMenu({viewport}: {viewport: Viewport}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();
  return (
    <nav className={className} role="navigation">
      {NAV.map((item) => (
        <NavLink
          key={item.to}
          className="header-menu-item"
          prefetch="intent"
          to={item.to}
          onClick={viewport === 'mobile' ? close : undefined}
        >
          <span className="nav-label">{item.label}</span>
          {item.sub ? <span className="nav-sub">{item.sub}</span> : null}
        </NavLink>
      ))}
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account">
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
      aria-label="Open menu"
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
}

function CartBadge({count}: {count: number}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      Cart ({count ?? 0})
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}
