import {useEffect} from 'react';

/**
 * SmoothScroll — Lenis-powered momentum scroll for the page body.
 *
 *  • Mounts once; destroys on unmount.
 *  • Respects prefers-reduced-motion (does nothing — native scroll).
 *  • Does NOT hijack scrolling inside the cart aside / search aside / mobile-menu
 *    aside — Lenis's `prevent` option opts those subtrees out so drawer scroll
 *    works normally.
 *  • Anchor `#section` links still work (Lenis bridges native hash navigation).
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;

    let raf = 0;
    let lenis: import('lenis').default | null = null;
    let cancelled = false;

    // Dynamic import keeps Lenis out of the SSR bundle.
    import('lenis').then(({default: Lenis}) => {
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        // Lerp tuned for premium feel — fast enough to be responsive, slow
        // enough to feel deliberate. easeOutExpo curve.
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        // Opt scrollable drawers out of Lenis so they scroll natively.
        prevent: (node: Element) =>
          Boolean(node.closest('aside, [data-no-lenis]')),
      });

      function loop(time: number) {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      }
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
