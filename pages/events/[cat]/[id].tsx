import { useRef, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  AlertColor,
} from '@mui/material';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { Event } from '../../../models/event';
import styles from '../EventsPage.module.scss';
import { useRouter } from 'next/router';

interface EventPageProps {
  event: Event;
}

const EventPage = ({ event }: EventPageProps) => {
  const inputEmail = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [message, setMessage] = useState<{
    text: string;
    severity: AlertColor;
  }>({ text: '', severity: 'success' });
  const [alert, setAlert] = useState(false);

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputEmail.current?.value.length === 0) {
      return;
    }

    const eventId = router.query.id;
    const emailValue = inputEmail.current?.value;

    if (!emailValue?.match(validRegex)) {
      setMessage({
        text: 'Please enter a valid email',
        severity: 'warning',
      });
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) {
        const data = await response.json();
        setMessage({ text: data.message, severity: 'error' });
        setAlert(true);
        throw new Error();
      }

      const data = await response.json();

      setMessage({ text: data.message, severity: 'success' });
      setAlert(true);

      if (inputEmail.current) {
        inputEmail.current.value = '';
      }
    } catch (error) {}
  };

  const handleClose = () => {
    setAlert(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        open={alert}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={message.severity}
          sx={{ width: '100%' }}
        >
          {message.text}
        </Alert>
      </Snackbar>
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
      <form className={styles.form} onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder="Enter your email"
          inputProps={{
            id: 'email',
            type: 'email',
            required: true,
          }}
          inputRef={inputEmail}
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
  const { all_events } = await import('../../../data/data.json');
  const allPaths = all_events.map((event) => {
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
  const { all_events } = await import('../../../data/data.json');
  const id = context.params?.id;
  const currentEvent = all_events.find((event) => event.id === id);

  return {
    props: {
      event: currentEvent,
    },
  };
};
