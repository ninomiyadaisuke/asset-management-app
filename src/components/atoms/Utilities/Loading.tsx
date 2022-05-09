import { FC } from 'react';
import { useIsFetching, useIsMutating } from 'react-query';

import styles from '../../../styles/components/atoms/loading.module.scss';

const Loading: FC = () => {
  const isLoading = useIsFetching();
  const isMutating = useIsMutating();
  return <>{isLoading > 0 && isMutating > 0 && <div className={styles.spinner}></div>}</>;
};

export default Loading;
