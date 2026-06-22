/**
 * Launch state — single switch for unproven social proof.
 *
 * Default is `false` so the pre-launch storefront never ships fabricated
 * reviews, press logos, or scarcity meters. Each section is a separate flag
 * so you can flip them on individually as real data arrives.
 *
 * Anything gated by these flags has placeholder copy that, if rendered before
 * the proof exists, would be FTC/Meta-ads-actionable. Default-off is the rule.
 */
export const LAUNCH = {
  /** "4.9 · 2,300+ reviews" in the hero — enable once Judge.me/Yotpo aggregate is real */
  heroReviewBadge: false,
  /** TrustStrip stats ("Trained 40,000+", "4.9★") — enable once verified */
  trustStats: false,
  /** "As featured in FORBES / GQ / Men's Health / Wired" — enable only after real placements */
  pressLogos: false,
  /** Three "Verified owner" testimonials — enable once real reviews are imported */
  testimonials: false,
  /** "Allocation claimed · 68%" meter — enable when wired to a real counter */
  scarcityMeter: false,
} as const;
