// @mui
import { styled } from '@mui/material/styles';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
import { Stack, Typography, Container } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    year: '2005',
    title: 'All about the Hospitality',
    description:
      'I stopped my hoppy of html/css and started climbing the ladder in the restaurant and bar industry at a swift pace, working every position there is.',
  },
  {
    year: '2020',
    title: 'Fine Dining to Food Trucks',
    description:
      'I managed Bars, Restaurants, Served at the best local resaurants in Houston, and applied my skills in my last kitchen to lead an excellent local company',
  },
  {
    year: '2021',
    title: 'A change in the tide',
    description:
      "After the shut down and confusion of 2020, I accessed my career and wanted to apply myself at something new. I picked up coding where I left off  with help from General Assembly and got to work and haven't stoppped.",
  },
  {
    year: '2022',
    title: 'Design & Development',
    description:
      "I'm contiuning my journey and learning and moving forward every day. I won't ever stop loving the tech field and solving problems and sharing my vision for a beautiful future.",
  },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutStory() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            textAlign: 'center',
            mx: 'auto',
            mb: { xs: 8, md: 15 },
          }}
        >
          <Typography variant="h2">My Journey</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            I crush my goals and I'm hungry for more
          </Typography>
        </Stack>

        <Timeline position={isDesktop ? 'alternate' : 'right'}>
          {CORE_VALUES.map((value, index) => {
            const { title, description, year } = value;
            return (
              <TimelineItem
                key={title}
                sx={{
                  '&:before': {
                    display: { xs: 'none', md: 'block' },
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color={COLORS[index]} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                  <Typography variant="subtitle3" sx={{ color: `${COLORS[index]}.main` }}>
                    {year}
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: { md: 360 },
                      ...(index % 2 && {
                        ml: 'auto',
                      }),
                    }}
                  >
                    {description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </RootStyle>
  );
}
