import { FC } from 'react';

import styles from '../../../styles/components/atoms/loading.module.scss';

const Loading: FC = () => {
  return <div className={styles.spinner} />;
};

export default Loading;
