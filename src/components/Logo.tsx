import { memo } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import NextImage from 'next/image';
import logoLight from '../../public/img/logoLight.png'
import logoDark from '../../public/img/logoDark.png'
// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  onDark?: boolean;
  isSimple?: boolean;
}

function Logo({ onDark = false, isSimple = false, sx }: LogoProps) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const PRIMARY_MAIN = theme.palette.primary.main;
  const LIGHT_COLOR = theme.palette.common.white;
  const DARK_COLOR = theme.palette.grey[800];

  return (
    <NextLink href="/" passHref>
      <Box
        sx={{
          width: 150,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >

          <NextImage src={logoLight} />


      </Box>
    </NextLink>
  );
}

export default memo(Logo);
