import { FC } from 'react';
import { AssetCardList } from '../organisms';
import { SwitchChart } from '../organisms';
import { Spacer } from '../atoms/Utilities';
import styles from '../../styles/components/templates/total_assets.module.scss';

const TotalAssets: FC = () => {
  return (
    <>
      <Spacer size={'md'} />
      <div className={styles.total}>
        <div className={styles.total__chart}>
          <SwitchChart />
        </div>
        <div className={styles.total__list}>
          <AssetCardList />
        </div>
      </div>
    </>
  );
};

export default TotalAssets;
