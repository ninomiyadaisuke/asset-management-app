import { FC } from 'react';

import styles from '../../../styles/components/atoms/button.module.scss';

type Props = {
  text: string;
  onClick: () => void;
};

const PrimaryButton: FC<Props> = (props) => {
  const { text, onClick } = props;
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;
