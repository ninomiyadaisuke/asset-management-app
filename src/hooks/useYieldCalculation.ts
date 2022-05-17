import { useMemo } from 'react';

export const useYieldCalcultation = (dividend: number, price: number) => {
  return useMemo(() => {
    const result = ((dividend / price) * 100).toFixed(2);
    return result;
  }, [dividend, price]);
};
