import { Typography } from '@mui/material';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography variant="body2" color="#fff" fontSize={'1rem'}>
        &#169; 2023 Andrei Terekhov
      </Typography>
    </footer>
  );
};

export default Footer;
