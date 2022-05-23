import { useQueryClient } from 'react-query';
import { Asset } from '../types/asset';

export const useAssetClient = (state: string) => {
  const qeryClient = useQueryClient();
  const data = qeryClient.getQueryData('asset') as Asset[];
  if (state === 'total') {
    const totalPrice =
      data && data.reduce((sum, element) => sum + element.marketPrice * element.numberOfPossessions, 0).toFixed(0);
    return { data, totalPrice };
  }
  const dividendPrice =
    data && data.reduce((sum, element) => sum + element.dividend * element.numberOfPossessions, 0).toFixed(0);
  return { data, dividendPrice };
};
