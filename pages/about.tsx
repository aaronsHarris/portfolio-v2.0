import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../src/config';
// utils
import { getAllPosts } from '../src/utils/get-mardown/travel/posts';

import { _testimonials, _members, _brands } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
import { TestimonialsTravel } from '../src/sections/testimonials';
import { TeamTravelAbout } from '../src/sections/team';
import { TravelAbout, TravelAboutOurVision } from '../src/sections/@travel';
import { MarketingAboutStory } from '../src/sections/@marketing';
import { ElearningLandingHero } from '../src/sections/@e-learning';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

// type Props = {
//   posts: BlogPostProps[];
// };

export default function TravelAboutUsPage() {
  return (
    <Page title="About">
      <RootStyle>
        <ElearningLandingHero />
        {/* <TravelAbout /> */}

        <TravelAboutOurVision />

        {/* <TeamTravelAbout members={_members} /> */}

        <MarketingAboutStory />
        {/* <TestimonialsTravel testimonials={_testimonials} /> */}
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelAboutUsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout simpleFooter>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
