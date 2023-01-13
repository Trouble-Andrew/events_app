import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container maxWidth="xl">
        <div className={styles.wrapper}>
          <Image
            src={'/images/logo_black.png'}
            width="50"
            height="50"
            alt="logo"
          />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  About us
                </Link>
              </li>
            </ul>
          </nav>
          <h1 className={styles.title}>Welcome to Events</h1>
        </div>
      </Container>
    </header>
  );
};

export default Header;
