import { FC } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { TotalAssetsTemplate, DividendManagementTemplate } from '../template';
import { Loading } from '../atoms/Utilities';
import { fetchAsset } from '../../lib/asset';
import { useAppSelector } from '../../hooks/useRedux';
import { page } from '../../slice/changePageSlice';
import { User } from '../../types/user';

const AssetContainer: FC = () => {
  const change = useAppSelector(page);
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData('auth') as User;
  const { isLoading } = useQuery('asset', () => fetchAsset(user.uid));
  if (isLoading) return <Loading />;
  return <>{change.page === 'total' ? <TotalAssetsTemplate /> : <DividendManagementTemplate />}</>;
};

export default AssetContainer;
