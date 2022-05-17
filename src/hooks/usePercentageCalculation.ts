import { useMemo } from 'react';

export const usePercentageCalcultation = (marketPrice: number, profitAndLoss: number) => {
  return useMemo(() => {
    const percent = Number(((profitAndLoss / marketPrice) * 100).toFixed(2));
    return percent;
  }, [marketPrice, profitAndLoss]);
};
