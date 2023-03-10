import Head from 'next/head';
import { PageProps } from '../models/page-props';
import HomePage from '../src/components/HomePage/HomePage';

export default function Home({ categories }: PageProps) {
  return <HomePage categories={categories} />;
}

export async function getServerSideProps() {
  const { events_categories } = await import('../data/data.json');

  return {
    props: {
      categories: events_categories,
    },
  };
}
