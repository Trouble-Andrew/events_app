import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Event } from '../../../models/event';

interface EventPageProps {
  event: Event;
}

const EventPage = ({ event }: EventPageProps) => {
  return (
    <div>
      <Image src={event.image} alt={event.title} width="200" height="200" />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </div>
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
