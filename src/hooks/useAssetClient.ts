import { useQueryClient } from 'react-query';
import { Asset } from '../types/asset';

export const useAssetClient = () => {
  const qeryClient = useQueryClient();
  const data = qeryClient.getQueryData('asset') as Asset[];
  const totalPrice =
    data && data.reduce((sum, element) => sum + element.marketPrice * element.numberOfPossessions, 0).toFixed(0);
  return { data, totalPrice };
};
