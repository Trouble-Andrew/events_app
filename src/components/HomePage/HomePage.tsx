import Link from 'next/link';
import Image from 'next/image';
import styles from './HomePage.module.scss';
import { PageProps } from '../../../models/page-props';

interface HomePageProps extends PageProps {}

const HomePage = ({ categories }: HomePageProps) => (
  <main className={styles.main}>
    {categories.map((category) => (
      <Link href={`/events/${category.id}`} key={category.id} passHref>
        <div>
          <Image
            src={category.image}
            alt={category.title}
            width="200"
            height="100"
          />
          <h2>{category.title}</h2>
          <p>{category.description}</p>
        </div>
      </Link>
    ))}
  </main>
);

export default HomePage;
