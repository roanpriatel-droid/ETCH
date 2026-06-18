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

export function PdpSections({
  content,
  handle,
  productUrl,
}: {
  content: PdpContent;
  handle: string;
  productUrl: string;
}) {
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
