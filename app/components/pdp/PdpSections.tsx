import {getPdpContent} from '~/lib/etch-pdp';
import {HowItWorks} from './HowItWorks';
import {SpecTable} from './SpecTable';
import {WhatsInBox} from './WhatsInBox';
import {MethodCallout} from './MethodCallout';
import {DeviceFaq} from './DeviceFaq';
import {GuaranteeBand} from './GuaranteeBand';

export function PdpSections({handle}: {handle: string | undefined | null}) {
  const content = getPdpContent(handle);
  return (
    <>
      <HowItWorks tagline={content.tagline} steps={content.howItWorks} />
      <SpecTable specs={content.specs} />
      <WhatsInBox items={content.whatsInBox} />
      <MethodCallout />
      <DeviceFaq items={content.faq} />
      <GuaranteeBand />
    </>
  );
}
