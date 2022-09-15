import type { NextPage } from 'next';
import { ContentsList } from '../components/ContentsList';
import styles from '../styles/Home.module.css';

const list = [
  {
    title: 'content1',
    description: 'The description of content1.',
    createdAt: '2022-09-15T09:03:53.942Z',
  },
  {
    title: 'content2',
    description: 'The description of content2.',
    createdAt: '2022-09-15T09:03:53.942Z',
  },
  {
    title: 'content3',
    description: 'The description of content3.',
    createdAt: '2022-09-15T09:03:53.942Z',
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contents list</h1>
        <ContentsList list={list} />
      </main>
    </div>
  );
};

export default Home;
