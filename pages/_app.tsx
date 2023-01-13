import '../styles/globals.scss';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import MainLayout from '../src/components/MainLayout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout className={inter.className}>
      <Component {...pageProps} />
    </MainLayout>
  );
}
