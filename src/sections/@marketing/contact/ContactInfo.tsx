// icons
import locationIcon from '@iconify/icons-carbon/location';
import timeIcon from '@iconify/icons-carbon/time';
import phoneIcon from '@iconify/icons-carbon/phone-voice';
import emailIcon from '@iconify/icons-carbon/email-new';
// @mui
import { Typography, Stack, Link } from '@mui/material';
// components
import { Iconify, TextIconLabel, Image } from '../../../components';

// ----------------------------------------------------------------------

export default function ContactInfo() {
  return (
    <Stack spacing={3}>
      {/* <Image
        alt="contact"
        src="/public/img/logoDark.png"
        sx={{
          maxWidth: 350,
          display: { xs: 'none', md: 'block' },
          mb: 2,
        }}
      /> */}

      <Typography variant="h3" sx={{ mt: 4, mb: 4, ml: 1, color: 'primary' }}>
        My Info
      </Typography>

      <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={locationIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Stack spacing={1} direction="row" alignItems="center">
              <Typography variant="h4">The Best City</Typography>
            </Stack>

            <Typography variant="body1">Houston, TX</Typography>
          </Stack>
        }
      />

      {/* <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={timeIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h6">Operating Hours</Typography>
            <Typography variant="body2">Mon-Fri: 8 am — 5 pm EST</Typography>
          </Stack>
        }
      /> */}

<TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={phoneIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h4">Call</Typography>
            <Typography variant="body1"><a href="tel:+7135170505" style={{textDecoration: 'none', color:'#212B36' }}>713.517.0505</a></Typography>
          </Stack>
        }
      />

<TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={emailIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h4">Email</Typography>
            <Typography variant="body1"><a href="mailto:solutions@brodsolutions.com?Subject=Contact%20Brod%20Solutions" style={{textDecoration: 'none', color:'#212B36' }}>aaronsHarris@gmail.com</a></Typography>
          </Stack>
        }
      />
    </Stack>
  );
}
