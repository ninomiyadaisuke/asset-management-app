import { FC } from 'react';
import { useQueryClient } from 'react-query';
import { AssetCard } from '../atoms/Card';
import { Asset } from '../../types/asset';

import styles from '../../styles/components/organisms/card_list.module.scss';

const AssetCardList: FC = () => {
  const queryClient = useQueryClient();
  const assets = queryClient.getQueryData('asset') as Asset[];

  return (
    <div className={styles.list}>
      <h2>銘柄一覧</h2>
      <section>
        {assets &&
          assets.map((asset) => (
            <AssetCard
              key={asset.code}
              name={asset.name}
              numberOfPossessions={asset.numberOfPossessions}
              marketPrice={asset.marketPrice}
              purchasePrice={asset.purchasePrice}
              dividend={asset.dividend}
            />
          ))}
      </section>
    </div>
  );
};

export default AssetCardList;
