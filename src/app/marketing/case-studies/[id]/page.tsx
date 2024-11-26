import type { Metadata } from 'next';

import { _caseStudies } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { MarketingCaseStudyView } from 'src/sections/_marketing/view/marketing-case-study-view';

// ----------------------------------------------------------------------

type Params = {
  params: { id: string };
};

function fetchCaseStudy(paramId: string) {
  return _caseStudies.find((caseStudy) => caseStudy.id === paramId);
}

export async function generateStaticParams() {
  /**
   * Docs:
   * https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
   */
  return _caseStudies.map((caseStudy) => ({
    id: caseStudy.id,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  /**
   * Docs:
   * https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
   */
  const data = fetchCaseStudy(params?.id);

  return {
    title: `${data?.title} | Marketing - ${CONFIG.appName}`,
  };
}

// ----------------------------------------------------------------------

export default function Page({ params }: Params) {
  const data = fetchCaseStudy(params.id);

  return <MarketingCaseStudyView caseStudy={data} relatedCaseStudies={_caseStudies.slice(0, 3)} />;
}
