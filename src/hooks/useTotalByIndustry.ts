import { Asset } from '../types/asset';

export const useTotalByIndustry = (data: Asset[]) => {
  const choise = data.map((asset) => {
    const industry = asset.industry;
    const result = asset.marketPrice * asset.numberOfPossessions;
    return { industry, result };
  });
  const extractIndustry = choise.map((asset) => asset.industry);
  const removeDuplicateIndustries = Array.from(new Set(extractIndustry));
  const industryAndTotal = removeDuplicateIndustries.map((industry) => {
    const sameIndustryGroup = choise.filter((asset) => industry === asset.industry);
    const result = sameIndustryGroup.reduce((sum, element) => sum + element.result, 0);
    return { industry: industry, result };
  });
  const industryAndTotalSort = industryAndTotal.sort((a, b) => b.result - a.result);
  const topNine = industryAndTotalSort.slice(0, 9);
  const other = industryAndTotalSort.slice(9, industryAndTotalSort.length);
  const otherTotal = other.reduce((sum, element) => sum + element.result, 0);
  const newSortArray = [...topNine, { industry: 'その他', result: otherTotal }];
  const industryName = newSortArray.map((industry) => industry.industry);
  const totalResult = newSortArray.map((result) => result.result);

  return { industryName, totalResult };
};
