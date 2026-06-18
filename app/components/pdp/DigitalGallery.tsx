import {useState} from 'react';
import type {ProductVariantFragment} from 'storefrontapi.generated';
import {GradedImage} from '~/components/GradedImage';
import {EngraveBackdrop} from './PdpArt';
import {ProtocolMockup} from './ProtocolMockup';

/**
 * DigitalGallery — PDP gallery for digital products (The ETCH Method: Core/Form).
 * Same brass-frame stage as the device gallery, but the placeholder is the
 * protocol-cover engraving rather than the device silhouette.
 */
export function DigitalGallery({
  image,
  productName,
  label,
}: {
  image?: ProductVariantFragment['image'] | null;
  productName?: string;
  /** Two-or-three-letter footer mark on the protocol cover */
  label?: string;
}) {
  const [activeThumb, setActiveThumb] = useState(0);
  // placeholder thumbnail slots — swap for real shots when product photography lands
  const THUMBS = ['Cover', 'Inside', 'Schedule', 'Web'];
  const alt = productName ? `${productName} — protocol cover` : 'ETCH protocol';

  return (
    <div className="pdp-gallery">
      <div className="pdp-primary" data-reveal aria-label="Protocol cover">
        <EngraveBackdrop />
        <div className="pdp-frame">
          {image ? (
            <GradedImage
              data={image}
              alt={image.altText || alt}
              tint={0.55}
              priority
              aspectRatio="3/4"
            />
          ) : (
            <GradedImage alt={alt} tint={0.5}>
              <ProtocolMockup label={label} />
            </GradedImage>
          )}
        </div>
      </div>
      <div
        className="pdp-thumbs"
        role="tablist"
        aria-label="Gallery thumbnails"
        data-reveal
        style={{['--reveal-delay' as string]: '100ms'}}
      >
        {THUMBS.map((thumb, i) => (
          <button
            type="button"
            key={thumb}
            className={`pdp-thumb${i === activeThumb ? ' is-active' : ''}`}
            role="tab"
            aria-selected={i === activeThumb}
            aria-label={`${alt} — ${thumb} view`}
            onClick={() => setActiveThumb(i)}
          >
            <span className="pdp-thumb-art" aria-hidden="true">
              <GradedImage alt="" tint={0.45}>
                <ProtocolMockup label={label} />
              </GradedImage>
            </span>
            <span className="pdp-thumb-label">{thumb}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
