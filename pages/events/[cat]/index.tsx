import { GetStaticProps } from 'next';
import EventCard from '../../../src/components/EventCard/EventCard';
import { Event } from '../../../models/event';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface EventsCatPageProps {
  events: Event[];
  city: string;
}

const EventsCatPage = ({ events }: EventsCatPageProps) => {
  const capitalizeCityName =
    events[0].city.charAt(0).toUpperCase() + events[0].city.slice(1);

  return (
    <Box maxWidth="100%" margin="0 auto">
      <Typography variant="h3" component="h3" sx={{ mb: '2rem' }}>
        Events in {capitalizeCityName}
      </Typography>
      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid
            item
            md={6}
            lg={4}
            sm={12}
            key={event.id}
            display="flex"
            justifyContent="center"
            sx={{
              ['@media(max-width: 768px)']: {
                margin: '0 auto',
              },
            }}
          >
            <EventCard
              title={event.title}
              city={event.city}
              description={event.description}
              image={event.image}
              id={event.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import('../../../data/data.json');

  const allPaths = events_categories.map((event) => {
    return {
      params: { cat: event.id.toString() },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { allEvents } = await import('../../../data/data.json');
  const id = context.params?.cat;
  const filteredEvents = allEvents.filter((event) => event.city === id);
  const city = filteredEvents[0].city;

  return {
    props: {
      events: filteredEvents,
      city: city,
    },
  };
};
