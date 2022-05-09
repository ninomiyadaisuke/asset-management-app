import { FC } from 'react';

import styles from '../../../styles/components/atoms/width_spacer.module.scss';

type Props = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const WidthSpacer: FC<Props> = (props) => {
  const { size } = props;
  const spacerClass = 'width_spacer-' + size;

  return <div className={styles[spacerClass]} />;
};
export default WidthSpacer;
