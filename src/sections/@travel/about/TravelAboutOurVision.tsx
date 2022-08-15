// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, Grid, Card } from '@mui/material';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

const VISIONS = [
  {
    name: 'Stay Creative',
    description:
      'I seek inspiration from everything.',
  },
  {
    name: 'Stay Consistant',
    description: 'Consistency is Credibility.',
  },
  {
    name: 'Stay Cool',
    description:
      "Be kind, courtesous, and cool",
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

// ----------------------------------------------------------------------

export default function TravelAboutOurVision() {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={2}
          sx={{
            maxWidth: 466,
            mb: { xs: 8, md: 5 },
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">My Mission</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Stay creative, Stay on the cutting edge, Stay cool <br />
            (try to take over the world was taken...)
          </Typography>
        </Stack>

        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="space-between"
          alignItems={{ md: 'center' }}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Image
              alt="vision"
              src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1660590376/undraw_join_re_w1lh_yk2pgj.svg"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Stack
              sx={{
                position: 'relative',
              }}
              alignItems={{ md: 'flex-end' }}
            >
              {VISIONS.map((vision, index) => {
                const { name, description } = vision;
                const firstVision = index === 0;
                const secondVision = index === 1;
                const thirdVision = index === 2;

                return (
                  <Card
                    key={name}
                    sx={{
                      p: 4,
                      mt: 4,
                      width: { md: 'calc(50% - 16px)' },
                      ...(firstVision && {
                        top: { md: 0 },
                        left: { md: 0 },
                        bottom: { md: 0 },
                        my: { md: 'auto' },
                        boxShadow: { md: 0 },
                        maxHeight: { md: 304 },
                        display: { md: 'flex' },
                        position: { md: 'absolute' },
                        flexDirection: { md: 'column' },
                        justifyContent: { md: 'center' },
                      }),
                      ...(secondVision && {
                        boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                      }),
                      ...(thirdVision && {
                        boxShadow: { md: 0 },
                      }),
                    }}
                  >
                    <Typography
                      variant="h1"
                      component="h2"
                      sx={{ color: 'text.disabled', opacity: 0.24, mb: 3 }}
                    >
                      {`0${index + 1}`}
                    </Typography>

                    <Typography variant="h4" paragraph>
                      {name}
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                  </Card>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
