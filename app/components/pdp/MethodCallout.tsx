import {Link} from 'react-router';

const ROWS = [
  'The 8-week protocol, matched to your device',
  'Exact settings, sessions and intensity ramps',
  'The training and fuel that reveal the work',
  'Included free with every ETCH device',
];

export function MethodCallout() {
  return (
    <section className="etch-section plate">
      <div className="wrap method">
        <div>
          <p className="eyebrow">The protocol</p>
          <h2>
            The device is the tool.
            <br />
            <span className="serif">The Method</span> is the system.
          </h2>
          <p className="pdp-lede">
            Eight weeks of the exact settings, sessions, training and fuel that
            turn activation into a visibly defined result — included with every
            ETCH device.
          </p>
          <Link className="btn" to="/pages/the-method" style={{marginTop: 8}}>
            Read the Method
          </Link>
        </div>
        <div className="method-card">
          {ROWS.map((r) => (
            <div className="row" key={r}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
