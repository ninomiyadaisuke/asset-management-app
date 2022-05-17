import { FC } from 'react';
import { useQuery } from 'react-query';
import { TotalAssetsTemplate } from '../template';
import { Loading } from '../atoms/Utilities';
import { fetchAsset } from '../../lib/asset';

const AssetContainer: FC = () => {
  const { isLoading } = useQuery('asset', () => fetchAsset());
  if (isLoading) return <Loading />;
  return (
    <div>
      <TotalAssetsTemplate />
    </div>
  );
};

export default AssetContainer;
