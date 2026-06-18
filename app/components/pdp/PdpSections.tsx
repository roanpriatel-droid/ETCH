import type {PdpContent} from '~/lib/etch-pdp';
import {PdpBenefits} from './PdpBenefits';
import {HowItWorks} from './HowItWorks';
import {WhatsInBox} from './WhatsInBox';
import {SpecTable} from './SpecTable';
import {PdpPadCare} from './PdpPadCare';
import {MethodCallout} from './MethodCallout';
import {PdpCompare} from './PdpCompare';
import {PdpResults} from './PdpResults';
import {DeviceFaq} from './DeviceFaq';
import {PdpFinalCta} from './PdpFinalCta';
import {PdpModules} from './PdpModules';
import {PdpFormat} from './PdpFormat';
import {MatchedDevice} from './MatchedDevice';
import {TiersCallout} from './TiersCallout';

export function PdpSections({
  content,
  handle,
  productUrl,
}: {
  content: PdpContent;
  handle: string;
  productUrl: string;
}) {
  /* DIGITAL LAYOUT — no spec table / no what's-in-the-box / no compare */
  if (content.kind === 'digital') {
    return (
      <>
        <PdpBenefits benefits={content.benefits} />
        {content.modules ? <PdpModules modules={content.modules} /> : null}
        {content.specs ? <PdpFormat specs={content.specs} /> : null}
        {content.matchedDevice ? (
          <MatchedDevice device={content.matchedDevice} />
        ) : null}
        <TiersCallout
          deviceHandle={content.matchedDevice?.handle ?? 'etch-flux-core'}
        />
        <DeviceFaq items={content.faq} />
        <PdpFinalCta content={content} productUrl={productUrl} />
      </>
    );
  }

  /* DEVICE LAYOUT — gallery + buy box + benefits + how-it-works + spec table
     + box + method + compare + reviews + faq + final */
  return (
    <>
      <PdpBenefits benefits={content.benefits} />
      <HowItWorks tagline={content.tagline} steps={content.howItWorks} />
      <WhatsInBox items={content.whatsInBox} />
      {content.specs ? <SpecTable specs={content.specs} /> : null}
      {content.padCare ? <PdpPadCare items={content.padCare} /> : null}
      <MethodCallout />
      {!content.isPads ? <PdpCompare currentHandle={handle} /> : null}
      <PdpResults />
      <DeviceFaq items={content.faq} />
      <PdpFinalCta content={content} productUrl={productUrl} />
    </>
  );
}
