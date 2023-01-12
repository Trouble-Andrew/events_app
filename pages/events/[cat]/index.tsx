import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '../../../models/event';

interface EventsCatPageProps {
  events: Event[];
  city: string;
}

const EventsCatPage = ({ events, city }: EventsCatPageProps) => {
  return (
    <div>
      <h1>Event in {city}</h1>
      {events.map((event) => (
        <Link href={`/events/${event.city}/${event.id}`} key={event.id} passHref>
          <Image src={event.image} alt={event.title} width="200" height="200" />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </div>
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
