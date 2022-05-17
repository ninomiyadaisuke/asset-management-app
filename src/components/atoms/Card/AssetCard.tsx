import { FC } from 'react';
import { useYieldCalcultation } from '../../../hooks/useYieldCalculation';
import { usePercentageCalcultation } from '../../../hooks/usePercentageCalculation';

import styles from '../../../styles/components/atoms/card.module.scss';

type Props = {
  name: string;
  numberOfPossessions: number;
  marketPrice: number;
  purchasePrice: number;
  dividend: number;
};

const AssetCard: FC<Props> = (props) => {
  const { name, numberOfPossessions, marketPrice, purchasePrice, dividend } = props;
  const profitAndLoss = marketPrice - purchasePrice;
  const dividendYield = useYieldCalcultation(dividend, marketPrice);
  const bookValueYield = useYieldCalcultation(dividend, purchasePrice);
  const percent = usePercentageCalcultation(marketPrice, profitAndLoss);

  const CheckedPositiveAndNegative = Math.sign(percent);

  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        <h3>{name}</h3>
        <p>{`${marketPrice}円`}</p>
        <div className={styles.card__title_right}>
          <p
            className={CheckedPositiveAndNegative >= 0 ? styles.card__profit : styles.card__loss}
          >{`${profitAndLoss}円`}</p>
          <p className={CheckedPositiveAndNegative >= 0 ? styles.card__profit : styles.card__loss}>{`${percent}%`}</p>
        </div>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__grid}>
          <h4>取得価格</h4>
          <p>{`${purchasePrice}円`}</p>
        </div>
        <div className={styles.card__grid}>
          <h4>保有数</h4>
          <p>{numberOfPossessions}</p>
        </div>
        <div className={styles.card__grid}>
          <h4>配当金</h4>
          <p>{`${dividend}円`}</p>
        </div>
        <div className={styles.card__grid}>
          <h4>配当利回り</h4>
          <p>{`${dividendYield}%`}</p>
        </div>
        <div className={styles.card__grid}>
          <h4>簿価利回り</h4>
          <p>{`${bookValueYield}%`}</p>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
