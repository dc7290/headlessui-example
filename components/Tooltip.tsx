import { Menu } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import styles from '../styles/Tooltip.module.css';

type Props = {
  items: {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }[];
  className?: string;
};

const Tooltip: React.FC<Props> = ({ items, className }) => {
  return (
    <Menu as='div' className={className}>
      <Menu.Button className={styles.button}>
        <EllipsisVerticalIcon width={24} height={24} />
      </Menu.Button>
      <Menu.Items className={styles.list}>
        {items.map(({ label, onClick }) => (
          <Menu.Item key={label}>
            {({ active }) => (
              <button
                onClick={onClick}
                className={clsx(styles.item, active && styles.active)}
              >
                {label}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export { Tooltip };
