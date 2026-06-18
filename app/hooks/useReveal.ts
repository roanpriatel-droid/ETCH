import {useEffect} from 'react';
import {useLocation} from 'react-router';

/**
 * useReveal — site-wide IntersectionObserver that fires the `.is-revealed`
 * state on any element with `[data-reveal]` as it enters the viewport.
 *
 *  • Fires once (unobserve after triggering)
 *  • Stagger via inline `style={{ ['--reveal-delay']: '120ms' }}`
 *  • Engraving SVGs that carry `engrave-draw` also pick up the same trigger
 *    (the CSS hooks `.engrave-draw.is-revealed path { stroke-dashoffset: 0 }`)
 *  • Respects prefers-reduced-motion — reduces to immediate-reveal, no observer
 *  • Re-scans on every navigation so new-route elements get picked up
 */
export function useReveal() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll<HTMLElement>(
      '[data-reveal]:not(.is-revealed)',
    );
    if (reduce) {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        }
      },
      {threshold: 0.12, rootMargin: '0px 0px -8% 0px'},
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [location.pathname, location.search]);
}
