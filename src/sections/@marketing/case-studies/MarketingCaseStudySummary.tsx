//Next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Divider, Stack, Link } from '@mui/material';
// utils
import { fDate } from '../../../../src/utils/formatTime';
// @types
import { CaseStudyFrontmatter } from '../../../@types/marketing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: theme.palette.background.neutral,
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));

// ----------------------------------------------------------------------

type Props = {
  frontmatter: CaseStudyFrontmatter;
};

export default function MarketingCaseStudySummary({ frontmatter }: Props) {
  const { title, description, category, website, createdAt, socialLinks } = frontmatter;

  return (
    <RootStyle>
      <Stack spacing={3}>
        <Stack spacing={2}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            summary
          </Typography>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={1}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Website
          </Typography>
          <Typography variant="body2" sx={{ textDecoration: 'none' }}>
            <Link href="https://travel-blog-topaz.vercel.app/" underline="hover">
              {website}
            </Link>
          </Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
            Category
          </Typography>
          <Typography variant="body2" sx={{ pb: 1 }}>
            {category}
          </Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Date
          </Typography>
          <Typography variant="body2">{fDate(createdAt)}</Typography>
        </Stack>
      </Stack>
    </RootStyle>
  );
}
