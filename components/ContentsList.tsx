import styles from '../styles/ContentsList.module.css';
import { Tooltip } from './Tooltip';

type Content = {
  title: string;
  description: string;
  createdAt: string;
};

type Props = {
  list: Content[];
};

const tootipList = [
  {
    label: 'コンテンツを複製する',
    onClick: () => console.log('コンテンツを複製しました'),
  },
  {
    label: 'コンテンツを削除する',
    onClick: () => console.log('コンテンツを削除しました'),
  },
];

const ContentsList: React.FC<Props> = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.title} className={styles.item}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <time>{item.createdAt}</time>
          <Tooltip items={tootipList} className={styles.tooltip} />
        </li>
      ))}
    </ul>
  );
};

export { ContentsList };
