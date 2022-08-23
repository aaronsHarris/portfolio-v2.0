import { useRef } from 'react';
// icons
import launchIcon from '@iconify/icons-carbon/launch';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography, Grid } from '@mui/material';
// hooks
import { useBoundingClientRect } from '../../hooks';
// routes
import Routes from '../../routes';
// components
import { Image, Iconify } from '../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    height: '80vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <RootStyle>
      <Container sx={{ height: 1}}>
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid item xs={12} md={5}>
            <Stack
              spacing={5}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              justifyContent="center"
              sx={{
                pt: {xs: 15, md: 25},
                pb: {xs: 5, md: 25},
                pl: {xs: '0', md: '10px'},
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h1">
                I'm Aaron Harris
                <Box component="span" sx={{ color: 'primary.main' }}>
                  <Typography variant="h2">{''} Dev &</Typography>
                </Box>
                <Box component="span" sx={{ color: 'secondary.main' }}>
                  <Typography variant="h2">{''} Designer</Typography>
                </Box>
              </Typography>

              <Stack direction="row" spacing={2.5}>
                {['react', 'javascript', 'typescript', 'material', 'figma'].map((icon) => (
                  <Image
                    key={icon}
                    alt={icon}
                    src={`https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_${icon}.svg`}
                    sx={{ width: 32, height: 32 }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          maxWidth: 1280,
          position: 'absolute',
          bottom: { md: '10%' },
          right: { md: -10, xl: 0 },
          display: { xs: 'none', md: 'block' },
          width: { md: `calc(100% - ${offsetLeft}px)` },
          paddingRight: 10,

        }}
      >
        <Image
          alt="home-hero"
          src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1659560114/Web-Design-PNG-Transparent_ywou6f.png"
        />
      </Box>
    </RootStyle>
  );
}
