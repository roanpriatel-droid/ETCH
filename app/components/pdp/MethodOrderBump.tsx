import {useState} from 'react';

/**
 * Method order bump — toggles a "+ Method ($19)" line under the Add-to-cart.
 * Presentational by default (just the visual). To make it functional once the
 * Method product exists in Shopify, lift this state into ProductForm and add
 * a second line to the AddToCartButton `lines` array. See CLAUDE.md → "Order
 * bump wiring".
 */
export function MethodOrderBump() {
  const [on, setOn] = useState(true);
  return (
    <button
      type="button"
      className={`order-bump${on ? ' on' : ''}`}
      onClick={() => setOn((v) => !v)}
      aria-pressed={on}
    >
      <span className="check" aria-hidden="true">
        {on ? (
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A140A"
            strokeWidth="3"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : null}
      </span>
      <span>
        <span className="nm">
          Add <b>The ETCH Method</b> — the 8-week protocol
        </span>
        <span className="ds">Get the most from your device from day one</span>
      </span>
      <span className="pr">
        <span className="add">+ $19</span>
        <span className="was">$27 on its own</span>
      </span>
    </button>
  );
}
