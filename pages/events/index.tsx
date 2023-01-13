import { Box, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { PageProps } from '../../models/page-props';
import EventPreviewCard from '../../src/components/EventPreviewCard/EventPreviewCard';

const EventsPage = ({ categories }: PageProps) => {
  const matchesMd = useMediaQuery('(max-width:1200px)');

  return (
    <Box maxWidth={matchesMd ? '100%' : '80%'} margin="0 auto">
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid
            item
            md={4}
            xs={12}
            key={category.id}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Link
              href={`/events/${category.id}`}
              passHref
              style={{ width: '100%' }}
            >
              <EventPreviewCard
                title={category.title}
                description={category.description}
                image={category.image}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('../../data/data.json');

  return {
    props: {
      categories: events_categories,
    },
  };
}
