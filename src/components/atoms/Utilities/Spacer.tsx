import { FC } from 'react';

import styles from '../../../styles/components/atoms/spacer.module.scss';

type Props = {
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const Spacer: FC<Props> = (props) => {
  const { size } = props;
  const spacerClass = 'spacer-' + size;
  return <div className={styles[spacerClass]} />;
};

export default Spacer;
