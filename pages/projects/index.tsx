import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// utils
import { getAllCaseStudies } from '../../src/utils/get-mardown/marketing/case-studies';
// _data

// @types

import { CaseStudyProps } from '../../src/@types/marketing';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import {  MarketingCaseStudiesList } from '../../src/sections/@marketing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

type Props = {

  caseStudies: CaseStudyProps[];
};

export default function MarketingCaseStudiesPage({  caseStudies }: Props) {
  return (
    <Page title="My Projects | Aaron Harris">
      <RootStyle>
        <Container>
          <Stack
            spacing={3}
            sx={{
              mt: { xs: 8, md: 10 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h2">Recent Projects</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              I&apos;m contantly coming up with new ideas
              <br /> and push myself to learn more.
            </Typography>
          </Stack>

          <MarketingCaseStudiesList caseStudies={caseStudies} />
        </Container>

        {/* <TestimonialsMarketing testimonials={_testimonials} /> */}

        {/* <BlogMarketingLatestPosts posts={posts.slice(0, 4)} /> */}

        {/* <MarketingFreeSEO /> */}

        {/* <NewsletterMarketing /> */}
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingCaseStudiesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout simpleFooter>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {

      caseStudies: getAllCaseStudies(),
    },
  };
}
