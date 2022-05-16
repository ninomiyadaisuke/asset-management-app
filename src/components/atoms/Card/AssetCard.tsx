import { FC } from 'react';

import styles from '../../../styles/components/atoms/card.module.scss';

const AssetCard: FC = () => {
  const name = '大和ハウス';
  const numberOfPossessions = 79;
  const marketPrice = 3123;
  const purchasePrice = 3205;
  const dividend = 126;
  const dividendYield = ((126 / 3123) * 100).toFixed(2);
  const bookValueYield = ((126 / 3205) * 100).toFixed(2);
  const profitAndLoss = marketPrice - purchasePrice;
  const percent = ((profitAndLoss / marketPrice) * 100).toFixed(2);
  const CheckedPositiveAndNegative = Math.sign(profitAndLoss);

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
