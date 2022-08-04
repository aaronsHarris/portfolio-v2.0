// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Typography, Box } from '@mui/material';
// hooks
import { useHoverParallax } from '../../../hooks';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  position: 'relative',
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 9,
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2.5),
  color: theme.palette.common.white,
}));

const BackgroundStyle = styled('div')(({ theme }) => ({
  minHeight: 560,
  overflow: 'hidden',
  position: 'relative',
  '&:before': {
    zIndex: 8,
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: alpha(theme.palette.grey[900], 0.9),
  },
}));

// ----------------------------------------------------------------------

export default function ContactHero() {
  const { onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  return (
    <RootStyle onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler}>
      <ContentStyle>
        <Typography variant="h3" color="primary">
          Get Started
        </Typography>
        <Typography variant="h1" component="h2" sx={{ mt: 1, mb: 8 }}>
          Result Driven
          <br /> Websites
        </Typography>
      </ContentStyle>
      <Background />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------



function Background() {
  const boxStyle = { position: 'absolute', top: 0, width: 1, height: 1 } as const;

  return (
    <BackgroundStyle>

      <Box sx={{ ...boxStyle }}>
          <Image sx={{maxWidth: 580}} alt="screen-02" src="/static/brand/SVG/brod-solutions_dog-computer.svg" />
      </Box>

    </BackgroundStyle>
  );
}
