import { m } from 'framer-motion';
// icons
import { Icon } from '@iconify/react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
// theme
import cssStyles from '../../utils/cssStyles';
// routes
import Routes from '../../routes';
// components
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const FEATURE_HIGHLIGHTS = [
  { title: 'React', icon: <Icon icon="akar-icons:react-fill" /> },
  { title: 'Javascript', icon: <Icon icon="akar-icons:javascript-fill" /> },
  {
    title: 'Figma Design',
    icon: <Icon icon="akar-icons:figma-fill" />,
  },
  { title: 'Next.js', icon: <Icon icon="cib:next-js" /> },
  { title: 'HTML', icon: <Icon icon="akar-icons:html-fill" /> },
  { title: 'Material Design', icon: <Icon icon="cib:material-design" /> },
  { title: 'Angular', icon: <Icon icon="cib:angular" /> },
  {
    title: 'CSS',
    icon: <Icon icon="akar-icons:css-fill" />,
  },
  { title: 'Adobe XD', icon: <Icon icon="ci:adobe-xd" /> },
  { title: 'TypeScript', icon: <Icon icon="cib:typescript" /> },
  { title: 'Node.js', icon: <Icon icon="akar-icons:node-fill" /> },
  { title: 'Framer', icon: <Icon icon="cib:framer" /> },
];

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgGradient({
    startColor: alpha(theme.palette.grey[500], 0),
    endColor: alpha(theme.palette.grey[800], 0.12),
  }),
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeFeatureHighlights() {
  return (
    <MotionViewport>
      <RootStyle>
        <Container>
          <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="space-between">
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <m.div variants={varFade().inUp}>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                  Skills
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
                  I Create  Anything You Need
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'text.secondary' }}>
                  {`I always stay up to date with the latest dev & design trends and stacks for your next project`}
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Button
                  size="large"
                  variant="contained"
                  rel="noopener"
                  href='/projects'
                  sx={{
                    mt: 5,
                    display: {
                      xs: 'none',
                      md: 'inline-flex',
                    },
                  }}
                >
                  My Projects
                </Button>
              </m.div>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  display: 'grid',
                  columnGap: 3,
                  rowGap: 6,
                  gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' },
                }}
              >
                {FEATURE_HIGHLIGHTS.map((feature) => (
                  <m.div key={feature.title} variants={varFade({ distance: 40 }).inUp}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        '& > svg': { width: 32, height: 32 },
                      }}
                    >
                      {feature.icon}
                      <Typography
                        variant="subtitle2"
                        component="h5"
                        sx={{ mt: 2, mb: 2, fontWeight: 'fontWeightMedium' }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                  </m.div>
                ))}
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                textAlign: 'center',
                display: { md: 'none' },
              }}
            >
              <Button
                size="large"
                variant="contained"
                target="_blank"
                rel="noopener"
                href='/projects'
                sx={{ mt: 5 }}
              >
                My Projects
              </Button>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </MotionViewport>
  );
}
