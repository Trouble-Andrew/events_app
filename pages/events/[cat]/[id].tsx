import { Box, Button, TextField, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Event } from '../../../models/event';
import styles from '../EventsPage.module.scss';

interface EventPageProps {
  event: Event;
}

const EventPage = ({ event }: EventPageProps) => {
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        color="#fff"
        mb={6}
        sx={{
          ['@media(max-width: 768px)']: {
            fontSize: '2rem',
          },
        }}
      >
        {event.title}
      </Typography>
      <Box mb={8}>
        <Image
          src={event.image}
          alt={event.title}
          width="1000"
          height="1000"
          className={styles.image}
        />
      </Box>
      <Typography variant="body2" fontSize={'1rem'} color="#fff" mb={6}>
        {event.description}
      </Typography>
      <Typography
        variant="body2"
        fontSize={'1rem'}
        fontWeight={900}
        color="#fff"
        mb={2}
      >
        GET REGISTERED FOR THIS EVENT!
      </Typography>
      <form action="" className={styles.form}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder="Enter your email"
          sx={{            
            input: { color: '#fff', borderColor: '#fff' },
            label: { color: '#fff', borderColor: '#fff' },
            fieldset: { color: 'red', borderColor: '#fff' },
            '& .MuiOutlinedInput-root.Mui-focused': {
              '& > fieldset': {
                borderColor: '#fff',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-root:hover': {
              '& > fieldset': {
                borderColor: 'var(--clear-day)',
              },
            },
          }}
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{
            color: '#fff',
            borderColor: '#fff',
            ml: '1rem',

            '&:hover': {
              color: 'var(--clear-day)',
              borderColor: 'var(--clear-day)',
            },
          }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import('../../../data/data.json');
  const allPaths = allEvents.map((event) => {
    return {
      params: { id: event.id, cat: event.city },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { allEvents } = await import('../../../data/data.json');
  const id = context.params?.id;
  const currentEvent = allEvents.find((event) => event.id === id);

  return {
    props: {
      event: currentEvent,
    },
  };
};
