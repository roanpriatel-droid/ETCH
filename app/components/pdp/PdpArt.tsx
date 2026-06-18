/** Stylized Flux device silhouette — brass strokes on dark, used in placeholders. */
export function DeviceOutline() {
  return (
    <svg
      className="device-outline"
      viewBox="0 0 240 320"
      aria-hidden="true"
    >
      <rect
        x="58"
        y="60"
        width="124"
        height="220"
        rx="44"
        fill="none"
        stroke="var(--brass-light)"
        strokeWidth="1.4"
        opacity=".9"
      />
      <rect
        x="72"
        y="74"
        width="96"
        height="192"
        rx="34"
        fill="none"
        stroke="var(--brass)"
        strokeWidth="1"
        opacity=".55"
      />
      <g stroke="var(--brass)" strokeWidth=".8" opacity=".5">
        <line x1="86" y1="118" x2="154" y2="118" />
        <line x1="86" y1="136" x2="154" y2="136" />
        <line x1="86" y1="208" x2="154" y2="208" />
        <line x1="86" y1="226" x2="154" y2="226" />
      </g>
      <path
        d="M86 96 Q98 88 110 96 T134 96 T158 96"
        stroke="var(--brass)"
        strokeWidth=".9"
        fill="none"
        opacity=".6"
      />
      <path
        d="M86 248 Q98 240 110 248 T134 248 T158 248"
        stroke="var(--brass)"
        strokeWidth=".9"
        fill="none"
        opacity=".6"
      />
      <circle
        cx="120"
        cy="170"
        r="14"
        stroke="var(--brass)"
        strokeWidth="1"
        fill="none"
        opacity=".7"
      />
      <circle cx="120" cy="170" r="7" fill="var(--brass-light)" />
      <circle cx="120" cy="170" r="3" fill="var(--obsidian)" />
    </svg>
  );
}

/** Engraving backdrop — used behind framed device shots on the PDP gallery. */
export function EngraveBackdrop() {
  return (
    <svg
      className="pdp-engrave"
      viewBox="0 0 600 720"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="var(--brass)" strokeWidth="1" fill="none" opacity=".4">
        <path d="M300 30 L300 700" opacity=".24" />
        <path d="M180 110 C220 80 380 80 420 110" />
        <path d="M160 170 C210 130 390 130 440 170" />
        <path d="M150 235 C205 195 395 195 450 235" />
        <path d="M148 308 C205 268 395 268 452 308" />
        <path d="M150 386 C208 345 392 345 450 386" />
        <path d="M158 460 C212 420 388 420 442 460" />
        <path d="M174 530 C220 498 380 498 426 530" />
        <path d="M200 596 C238 574 362 574 400 596" />
        <path d="M225 200 C210 250 210 320 225 386" />
        <path d="M375 200 C390 250 390 320 375 386" />
      </g>
    </svg>
  );
}

/** Small engraving corner accent — used on benefit cards. */
export function SmallEngrave({className}: {className?: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <g stroke="var(--brass)" strokeWidth=".8" fill="none" opacity=".75">
        <path d="M14 18 C22 12 42 12 50 18" />
        <path d="M12 28 C22 22 42 22 52 28" />
        <path d="M14 38 C22 32 42 32 50 38" />
        <path d="M18 48 C24 44 40 44 46 48" />
      </g>
    </svg>
  );
}
