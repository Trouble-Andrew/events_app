import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        {/* <Image src="" alt="" /> */}
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/events" passHref>
          Events
        </Link>
        <Link href="/about-us" passHref>
          About us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
