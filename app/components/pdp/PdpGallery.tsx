import {useState} from 'react';
import {Image} from '@shopify/hydrogen';
import type {ProductVariantFragment} from 'storefrontapi.generated';
import {DeviceOutline, EngraveBackdrop} from './PdpArt';

/**
 * PDP gallery — large primary slot + 3 thumbnail slots. Renders the Shopify image
 * when present, otherwise an engraved device placeholder. Thumbnails are decorative
 * placeholders until real product photography is shot.
 */
export function PdpGallery({
  image,
  isSet,
  isPads,
}: {
  image?: ProductVariantFragment['image'] | null;
  isSet?: boolean;
  isPads?: boolean;
}) {
  const [activeThumb, setActiveThumb] = useState(0);
  // placeholder thumbnail slots — swap for real shots later
  const THUMBS = isPads
    ? ['Pad set', 'Backing', 'Box']
    : isSet
      ? ['Core', 'Form', 'Method', 'Travel']
      : ['Hero', 'In use', 'Method', 'Travel'];

  return (
    <div className="pdp-gallery">
      <div
        className="pdp-primary"
        data-reveal
        aria-label="Product image — placeholder"
      >
        <EngraveBackdrop />
        <div className="pdp-frame">
          {image ? (
            <Image
              alt={image.altText || 'ETCH device'}
              data={image}
              aspectRatio="3/4"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          ) : isSet ? (
            <>
              <DeviceOutline />
              <DeviceOutline />
            </>
          ) : (
            <DeviceOutline />
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
        {THUMBS.map((label, i) => (
          <button
            type="button"
            key={label}
            className={`pdp-thumb${i === activeThumb ? ' is-active' : ''}`}
            role="tab"
            aria-selected={i === activeThumb}
            aria-label={label}
            onClick={() => setActiveThumb(i)}
          >
            <span className="pdp-thumb-art" aria-hidden="true">
              <DeviceOutline />
            </span>
            <span className="pdp-thumb-label">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
