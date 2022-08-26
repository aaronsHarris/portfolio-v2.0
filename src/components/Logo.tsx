import { memo } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Box, BoxProps } from '@mui/material';
import NextImage from 'next/image';
import logoLight from '../../public/img/logoLight.png';
// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  onDark?: boolean;
  isSimple?: boolean;
}

function Logo({ sx }: LogoProps) {
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
