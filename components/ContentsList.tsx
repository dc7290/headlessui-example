import styles from '../styles/ContentsList.module.css';

type Content = {
  title: string;
  description: string;
  createdAt: string;
};

type Props = {
  list: Content[];
};

const ContentsList: React.FC<Props> = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.title} className={styles.item}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <time>{item.createdAt}</time>
        </li>
      ))}
    </ul>
  );
};

export { ContentsList };
