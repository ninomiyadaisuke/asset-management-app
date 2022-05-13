import { FC } from 'react';
import { useQuery } from 'react-query';
import { TotalAssets } from '../template';
import { Loading } from '../atoms/Utilities';
import { fetchAsset } from '../../lib/asset';

const AssetContainer: FC = () => {
  const { data, isLoading } = useQuery('asset', () => fetchAsset());
  if (isLoading) return <Loading />;
  return (
    <div>
      <TotalAssets data={data} />
    </div>
  );
};

export default AssetContainer;
