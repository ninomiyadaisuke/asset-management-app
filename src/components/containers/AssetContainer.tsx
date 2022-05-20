import { FC } from 'react';
import { useQuery } from 'react-query';
import { TotalAssetsTemplate, DividendManagementTemplate } from '../template';
import { Loading } from '../atoms/Utilities';
import { fetchAsset } from '../../lib/asset';
import { useAppSelector } from '../../hooks/useRedux';
import { page } from '../../slice/changePageSlice';

const AssetContainer: FC = () => {
  const change = useAppSelector(page);

  const { isLoading } = useQuery('asset', () => fetchAsset());
  if (isLoading) return <Loading />;
  return <>{change.page === 'total' ? <TotalAssetsTemplate /> : <DividendManagementTemplate />}</>;
};

export default AssetContainer;
