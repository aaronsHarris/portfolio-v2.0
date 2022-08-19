import { ReactElement } from 'react';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
import {
  HomeHero,
  HomeForDesigner,
  HomeFeatureHighlights,
} from '../src/sections/home';
//projects
import { MarketingFreeSEO, MarketingLandingCaseStudies } from '../src/sections/@marketing';
import { CaseStudyProps } from '../src/@types/marketing/case-studies';
import { getAllCaseStudies } from '../src/utils/get-mardown/marketing/case-studies';
// import MarketingContactForm from '../src/sections/@marketing/contact/MarketingContactForm';
// ----------------------------------------------------------------------

type Props = {
  caseStudies: CaseStudyProps[];
};

export default function HomePage({ caseStudies }: Props) {
  return (
    <Page title="Aaron Harris | Dev & Designer">
      <HomeHero />

      <HomeFeatureHighlights />

      <HomeForDesigner />
      <MarketingLandingCaseStudies caseStudies={caseStudies.slice(-6)} />
      <MarketingFreeSEO />
    </Page>
  );
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout simpleFooter>{page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
      caseStudies: getAllCaseStudies(),
    },
  };
}
