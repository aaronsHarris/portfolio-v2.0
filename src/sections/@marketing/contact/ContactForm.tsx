import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Stack,
  TextField,
  Typography,
  ToggleButton,
  FormHelperText,
  Slider as MUISlider,
} from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';
import axios from '../../../utils/axios';
import { valueToPercent } from '@mui/base';
import { array } from 'yup/lib/locale';
import { ValueTarget } from 'framer-motion';
// ----------------------------------------------------------------------


const FormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('That is not an email'),
  company: Yup.string().required('Company is required'),
  // website: Yup.string().required('Website is required'),
});

type FormValuesProps = {
  services: string[];
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  budget: number | number[];
  message: string;
};
type HubSpotSubmission = {
  name: string;
  value: string;
};
// ----------------------------------------------------------------------

export default function ContactForm() {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValuesProps>({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      services: [],
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      budget: [2000, 10000],
      message: '',
    },
  });
  const sendPipedream = async (data: FormValuesProps) => {
    let hubSpotSubmission: HubSpotSubmission[];
    hubSpotSubmission = [];
    Object.entries(data).forEach(function ([k, v]) {
      hubSpotSubmission.push({ name: k, value: v.toString() });
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    axios
      .post(
        'https://api.hsforms.com/submissions/v3/integration/submit/21099576/9f2d7c3d-1dbb-4c12-94bc-d33cd5d2db61',
        JSON.stringify({ fields: hubSpotSubmission }, null, 2),
        {
          headers: {
            hapikey: `68c8ee5b-55f0-42ef-afcb-e4427701389b`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        alert(JSON.stringify(response, null, 2));
      });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(sendPipedream)}>
      <Stack spacing={2.5} alignItems="flex-start">
        <Typography variant="subtitle2">Contact Information</Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2.5, md: 2 }}
          sx={{ width: 1 }}
        >
          <Controller
            name="firstname"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="First Name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="lastname"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Last Name"
                error={Boolean(error)}
                helperText={error?.message}
              />
            )}
          />
        </Stack>

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Email"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Phone number"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
          Send Request
        </LoadingButton>
      </Stack>
    </form>
  );
}
