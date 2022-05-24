import { FC } from 'react';
import { Spacer } from '../Utilities';
import { Doughnut } from 'react-chartjs-2';
import { shuffle } from '../../../lib/helper';
import { chartColor } from '../../../lib/data';
import { useAssetClient } from '../../../hooks/useAssetClient';
import { useTotalByIndustry } from '../../../hooks/useTotalByIndustry';
import { useTotalByBrand } from '../../../hooks/useTotalByBrand';
import { useAppSelector } from '../../../hooks/useRedux';
import { invert } from '../../../slice/toggleSlice';
import { page } from '../../../slice/changePageSlice';

import styles from '../../../styles/components/atoms/pie_chart.module.scss';

const PieChart: FC = () => {
  const change = useAppSelector(page);
  const toggle = useAppSelector(invert);
  const { data, totalPrice, dividendPrice } = useAssetClient(change.page);
  const { industryName, totalResult } = useTotalByIndustry(data, change.page);
  const { name, result } = useTotalByBrand(data);
  const selectLabel = toggle.toggle ? name : industryName;
  const selectData = toggle.toggle ? result : totalResult;
  const assetsText = change.page === 'total' ? '資産評価額' : '配当金総額';
  const price = change.page === 'total' ? totalPrice : dividendPrice;
  //銘柄別
  const chartData = {
    labels: selectLabel,
    datasets: [
      {
        data: selectData,
        backgroundColor: shuffle(chartColor),
        borderColor: 'transparent',
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      labels: [
        {
          render: 'label',
          position: 'outside',
          fontSize: 10,
        },
        {
          render: 'percentage',
          fontColor: '#fff',
        },
      ],
      // doughnutlabel: {
      //   labels: [
      //     {
      //       text: assetsText,
      //       font: {
      //         size: 20,
      //       },
      //     },
      //     {
      //       text: `${Number(price).toLocaleString()}円`,
      //       font: {
      //         size: 18,
      //       },
      //     },
      //   ],
      // },
    },
    legend: {
      display: false,
    },
  };

  return (
    <div className={styles.pie_chart}>
      <h2>{change.page === 'total' ? '資産ポートフォリオ' : '配当ポートフォリオ'}</h2>
      <Spacer size={'sm'} />
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
