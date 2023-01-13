import Link from 'next/link';
import Image from 'next/image';
import { PageProps } from '../../../models/page-props';
import styles from './HomePage.module.scss';
import CategoryCard from '../CategoryCard/CategoryCard';

interface HomePageProps extends PageProps {}

const HomePage = ({ categories }: HomePageProps) => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      {categories.map((category) => (
        <li key={category.id}  className={styles.listItem}>
          <Link href={`/events/${category.id}`} passHref>
            <CategoryCard
              title={category.title}
              image={category.image}
              description={category.description}
              key={category.id}
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default HomePage;
