import {useEffect, useRef, useState, type ReactNode} from 'react';
import {Link} from 'react-router';

/**
 * StickyBuyBar — slides in from the top of the viewport once the PDP buy box
 * has scrolled out of view. Slim, dark, full-width. Contains: product name,
 * price, and a primary CTA (children — usually <Add to kit> or AddToCartButton).
 *
 * `triggerRef` points to the primary buy box element. When that element is
 * NOT intersecting the viewport, the bar shows.
 */
export function StickyBuyBar({
  name,
  price,
  triggerRef,
  children,
  url,
}: {
  name: string;
  price: string;
  triggerRef: React.RefObject<HTMLElement | null>;
  children?: ReactNode;
  /** Optional product URL (when children aren't provided we fall back to a Link CTA) */
  url?: string;
}) {
  const [show, setShow] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      {threshold: 0, rootMargin: '-80px 0px 0px 0px'},
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggerRef]);

  return (
    <div
      ref={barRef}
      className={`sticky-buy-bar${show ? ' is-visible' : ''}`}
      role="region"
      aria-label="Quick buy"
      aria-hidden={!show}
    >
      <div className="sticky-buy-inner">
        <div className="sticky-buy-info">
          <span className="sbb-name">{name}</span>
          <span className="sbb-price">{price}</span>
        </div>
        <div className="sticky-buy-cta">
          {children ?? (
            <Link className="btn" to={url ?? '#'}>
              Add to kit
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
