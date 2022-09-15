type Props = {
  // 開いたメニューに表示するボタンのリスト
  items: {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }[];
  className?: string;
};

const Tooltip: React.FC<Props> = ({ items, className }) => {
  return;
};

export { Tooltip };
