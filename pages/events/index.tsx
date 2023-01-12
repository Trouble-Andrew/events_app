import Link from 'next/link';
import Image from 'next/image';
import { PageProps } from '../../models/page-props';

const EventsPage = ({ categories }: PageProps) => {
  return (
    <>
      <h1>Events Page</h1>
      <div>
        {categories.map((category) => (
          <Link href={`/events/${category.id}`} key={category.id} passHref>
            <div>
              <Image
                src={category.image}
                alt={category.title}
                width="200"
                height="200"
              />
              <h2>{category.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
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
