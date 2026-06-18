/**
 * ProtocolMockup — a stylized engraving of the ETCH Method as a portrait
 * "protocol book" cover. Used in the PDP gallery when the product is digital.
 * All-brass strokes on transparent fill so it composes with GradedImage tint.
 */
export function ProtocolMockup({label = 'THE METHOD'}: {label?: string}) {
  return (
    <svg
      className="protocol-mockup"
      viewBox="0 0 240 320"
      aria-hidden="true"
    >
      {/* outer cover */}
      <rect
        x="48"
        y="40"
        width="144"
        height="240"
        rx="6"
        fill="none"
        stroke="var(--brass-light)"
        strokeWidth="1.6"
        opacity=".92"
      />
      {/* inner panel inset */}
      <rect
        x="58"
        y="52"
        width="124"
        height="216"
        rx="4"
        fill="none"
        stroke="var(--brass)"
        strokeWidth="1"
        opacity=".55"
      />
      {/* spine accent line (left edge) */}
      <line
        x1="58"
        y1="52"
        x2="58"
        y2="268"
        stroke="var(--brass-light)"
        strokeWidth="1.4"
        opacity=".7"
      />
      {/* top eyebrow rule */}
      <line
        x1="76"
        y1="90"
        x2="164"
        y2="90"
        stroke="var(--brass)"
        strokeWidth=".8"
        opacity=".7"
      />
      {/* "ETCH" mark area */}
      <text
        x="120"
        y="78"
        textAnchor="middle"
        fill="var(--brass-light)"
        fontFamily="var(--font-mono)"
        fontSize="9"
        letterSpacing="3.2"
      >
        ETCH
      </text>
      {/* large serif "M" mark in center */}
      <text
        x="120"
        y="170"
        textAnchor="middle"
        fill="var(--brass-light)"
        fontFamily="var(--font-serif)"
        fontStyle="italic"
        fontSize="78"
        fontWeight="400"
      >
        M
      </text>
      {/* engraving contour lines suggesting the "shape" inside */}
      <g stroke="var(--brass)" strokeWidth=".7" fill="none" opacity=".45">
        <path d="M76 200 C100 192 140 192 164 200" />
        <path d="M76 214 C100 206 140 206 164 214" />
        <path d="M76 228 C104 222 136 222 164 228" />
      </g>
      {/* footer label */}
      <line
        x1="76"
        y1="250"
        x2="164"
        y2="250"
        stroke="var(--brass)"
        strokeWidth=".8"
        opacity=".7"
      />
      <text
        x="120"
        y="264"
        textAnchor="middle"
        fill="var(--brass-light)"
        fontFamily="var(--font-mono)"
        fontSize="7"
        letterSpacing="2.8"
      >
        {label}
      </text>
    </svg>
  );
}
