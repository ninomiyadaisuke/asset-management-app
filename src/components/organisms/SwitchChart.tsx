import { FC } from 'react';
import { PieChart } from '../atoms/Chart';
import { LineUpCheckBoxes } from '../molecules/Input';
import { Spacer } from '../atoms/Utilities';

import styles from '../../styles/components/organisms/switch_chart.module.scss';

const SwitchChart: FC = () => {
  return (
    <div className={styles.switch}>
      <PieChart />
      <Spacer size={'md'} />
      <div className={styles.switch__check}>
        <LineUpCheckBoxes />
      </div>
    </div>
  );
};

export default SwitchChart;
