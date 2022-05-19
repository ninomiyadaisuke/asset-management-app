import { FC, useState } from 'react';
import { PieChart } from '../atoms/Chart';
import { LineUpCheckBoxes } from '../molecules/Input';
import { Spacer } from '../atoms/Utilities';

import styles from '../../styles/components/organisms/switch_chart.module.scss';

const SwitchChart: FC = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={styles.switch}>
      <PieChart toggle={toggle} />
      <Spacer size={'md'} />
      <div className={styles.switch__check}>
        <LineUpCheckBoxes setToggle={setToggle} toggle={toggle} />
      </div>
    </div>
  );
};

export default SwitchChart;
