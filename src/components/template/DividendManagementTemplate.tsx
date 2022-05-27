import { FC } from 'react';
import { SwitchChart } from '../organisms';
import { useAssetClient } from '../../hooks/useAssetClient';

const DividendManagementTemplate: FC = () => {
  const { dividendPrice, totalAcquisitionPrice } = useAssetClient('');
  const result = (Number(dividendPrice) / totalAcquisitionPrice!) * 100;
  return (
    <div>
      <SwitchChart />
      <p>{`${result.toFixed(2)}%`}</p>
      <p>test</p>
    </div>
  );
};

export default DividendManagementTemplate;
