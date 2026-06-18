import {Link} from 'react-router';
import {GradedImage} from '~/components/GradedImage';
import {DeviceOutline} from './PdpArt';

export function MatchedDevice({
  device,
}: {
  device: {handle: string; name: string};
}) {
  // Strip the trademark for cleaner heading
  const display = device.name.replace('™', '');
  const [head, tail] = display.split('—').map((s) => s.trim());

  return (
    <section className="etch-section plate">
      <div className="wrap">
        <div className="matched-grid">
          <div data-reveal>
            <p className="eyebrow">The matched device</p>
            <h2>
              Pairs with {head}{tail ? <> — <span className="serif">{tail}</span></> : null}.
            </h2>
            <p className="lede">
              Already own the device? Then you already have this guide — it
              ships free with every {device.name}. Reading the protocol
              standalone is for owners-to-be, and for anyone who wants the
              system before the hardware.
            </p>
            <div style={{display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap'}}>
              <Link
                className="btn"
                to={`/products/${device.handle}`}
                prefetch="intent"
              >
                See {head}
              </Link>
              <Link className="btn-ghost" to="/pages/the-method">
                Read the full Method →
              </Link>
            </div>
          </div>
          <div
            className="matched-art"
            data-reveal
            style={{['--reveal-delay' as string]: '140ms'}}
            aria-hidden="true"
          >
            <GradedImage alt="" tint={0.5}>
              <DeviceOutline />
            </GradedImage>
          </div>
        </div>
      </div>
    </section>
  );
}
