import { useState } from 'react';
// icons
import playIcon from '@iconify/icons-carbon/play';
import chevronRight from '@iconify/icons-carbon/chevron-right';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Container, Box, Grid, Divider, Button } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// theme
import { ColorSchema } from '../../../theme/palette';
// _data
import _mock from '../../../../_data/mock';
// assets
import { ElearningHeroIllustration } from '../../../assets';
// components
import { Iconify, TextIconLabel, PlayerWithButton } from '../../../components';
import { FabButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  overflow: 'hidden',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(0),
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(5),
  },
}));

// ----------------------------------------------------------------------

export default function ElearningLandingHero() {
  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  return (
    <>
      <RootStyle>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={5}>
              <Stack
                sx={{
                  textAlign: { xs: 'center', md: 'unset' },
                }}
              >
                <Typography variant="h1">
                  Hi I'm
                  <Box component="span" sx={{ color: 'text.disabled' }}>
                    {' '}
                    {' '}
                  </Box>
                  <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
                    Aaron{' '}
                  </Box><br/>
                  and this is me
                </Typography>

                <Typography sx={{ color: 'text.secondary', mt: 3, mb: 5 }}>
                  I love being creative with music and writing, shredding the streets of houston on my bike, and having dinner with the family
                </Typography>

                <Stack spacing={3} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
                  <Button
                    size="large"
                    variant="contained"
                    endIcon={<Iconify icon={chevronRight} />}
                    href='/projects'
                  >
                    My Projects
                  </Button>
                  <TextIconLabel
                    icon={
                      <FabButtonAnimate color="secondary" sx={{ mr: 2 }}>
                        <Iconify icon={playIcon} />
                      </FabButtonAnimate>
                    }
                    value="My Vibe"
                    onClick={handleOpenVideo}
                    justifyContent={{ xs: 'center', sm: 'unset' }}
                    sx={{
                      cursor: 'pointer',
                      typography: 'h6',
                      '&:hover': { opacity: 0.72 },
                    }}
                  />
                </Stack>

                <Divider sx={{ borderStyle: 'dashed', mt: 8, mb: 6 }} />

                <SummarySection />
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} lg={7} sx={{ display: { xs: 'none', md: 'block' } }}>
              <ElearningHeroIllustration />
            </Grid>
          </Grid>
        </Container>
      </RootStyle>

      <PlayerWithButton open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video} />
    </>
  );
}

// ----------------------------------------------------------------------

function SummarySection() {
  return (
    <Stack
      spacing={{ xs: 3, sm: 10 }}
      direction="row"
      justifyContent={{ xs: 'center', md: 'unset' }}
    >
      {SummaryItem(15, 'years of Hospitality', 'warning')}
      {SummaryItem(2050, 'hours in projects', 'error')}
      {SummaryItem(59000, 'Exellent jokes', 'success')}
    </Stack>
  );
}

function SummaryItem(total: number, label: string, color: ColorSchema) {
  return (
    <Stack spacing={0.5} sx={{ position: 'relative' }}>
      <Box
        sx={{
          top: 8,
          left: -4,
          width: 24,
          height: 24,
          zIndex: -1,
          opacity: 0.24,
          borderRadius: '50%',
          position: 'absolute',
          bgcolor: (theme) => theme.palette[color].main,
        }}
      />
      <Typography variant="h3">{fShortenNumber(total)}+</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {label}
      </Typography>
    </Stack>
  );
}
