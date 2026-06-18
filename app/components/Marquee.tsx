import type {ReactNode} from 'react';

/**
 * Marquee — endless horizontal scroll, CSS-only (uses `animation` on a
 * duplicated track). Pauses on hover; respects reduced-motion (snaps to a
 * static row).
 */
export function Marquee({
  children,
  speed = 38,
}: {
  children: ReactNode;
  /** seconds for one full loop (lower = faster) */
  speed?: number;
}) {
  return (
    <div className="marquee" aria-hidden="true">
      <div
        className="marquee-track"
        style={{['--marquee-duration' as string]: `${speed}s`}}
      >
        <div className="marquee-row">{children}</div>
        <div className="marquee-row">{children}</div>
      </div>
    </div>
  );
}
