import {useEffect, useRef, useState} from 'react';

/**
 * CountUp — animates a number from 0 → `to` when the element enters the
 * viewport. Pure requestAnimationFrame, GPU-friendly. Respects reduced motion
 * by snapping to the final value immediately.
 *
 * Props:
 *  • to       target number (e.g. 40000)
 *  • duration ms (default 1400)
 *  • format   custom formatter (default Intl.NumberFormat with thousands sep)
 *  • prefix / suffix wrap the number
 */
export function CountUp({
  to,
  duration = 1400,
  format,
  prefix = '',
  suffix = '',
}: {
  to: number;
  duration?: number;
  format?: (n: number) => string;
  prefix?: string;
  suffix?: string;
}) {
  const elRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setValue(to);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        }
      },
      {threshold: 0.4},
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  const formatted = format
    ? format(value)
    : new Intl.NumberFormat('en-US').format(value);

  return (
    <span ref={elRef} className="countup">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
