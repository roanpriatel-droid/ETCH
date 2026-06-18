import {Image} from '@shopify/hydrogen';
import type {ComponentProps, ReactNode} from 'react';

/**
 * GradedImage — the ETCH Complexion.
 *
 * Wraps Shopify <Image>, raw <img>, or arbitrary children (SVG placeholders)
 * in a unified colour grade so every image on the site shares one complexion:
 *
 *   • Filter on the inner img: saturate(.85) contrast(1.08) brightness(.92)
 *   • Soft-light brass/oxblood tint layer (scales with `tint`, 0–1)
 *   • Radial vignette so images melt into dark sections
 *   • Optional brass border + outer bloom when `frame` is true
 *
 * Pass `data` for a Shopify Image, OR `src` for a raw image, OR children
 * (e.g. an SVG placeholder). The grade is applied to whichever is rendered.
 */
type CommonProps = {
  alt: string;
  className?: string;
  /** Vignette + tint strength, 0–1 (default 0.6) */
  tint?: number;
  /** Adds brass 1px border + inset highlight + outer bloom */
  frame?: boolean;
  /** Eager load + fetchpriority high for above-the-fold hero shots */
  priority?: boolean;
  /** Override aspect-ratio (e.g. "3/4", "1/1"). Defaults to whatever the source provides. */
  aspectRatio?: string;
  children?: ReactNode;
};

type ShopifyProps = CommonProps & {
  data: ComponentProps<typeof Image>['data'];
  src?: never;
  /** Sizes attribute passed through to Hydrogen Image */
  sizes?: string;
};

type SrcProps = CommonProps & {
  data?: never;
  src: string;
  sizes?: string;
};

type ChildrenOnlyProps = CommonProps & {
  data?: never;
  src?: never;
};

type Props = ShopifyProps | SrcProps | ChildrenOnlyProps;

export function GradedImage(props: Props) {
  const {
    alt,
    className,
    tint = 0.6,
    frame = false,
    priority = false,
    aspectRatio,
    children,
  } = props;

  return (
    <span
      className={`graded-frame${frame ? ' has-frame' : ''}${className ? ' ' + className : ''}`}
      style={{
        ['--graded-tint' as string]: String(tint),
        ...(aspectRatio ? {aspectRatio} : null),
      }}
    >
      {'data' in props && props.data ? (
        <Image
          alt={alt}
          data={props.data}
          sizes={props.sizes}
          loading={priority ? 'eager' : 'lazy'}
          aspectRatio={aspectRatio}
        />
      ) : 'src' in props && props.src ? (
        <img
          src={props.src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
        />
      ) : (
        children
      )}
      <span className="graded-tint" aria-hidden="true" />
      <span className="graded-vignette" aria-hidden="true" />
    </span>
  );
}
