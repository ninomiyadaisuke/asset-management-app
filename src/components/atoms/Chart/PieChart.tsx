import { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { shuffle } from '../../../lib/helper';
import { chartColor } from '../../../lib/data';
import { useAssetClient } from '../../../hooks/useAssetClient';
import { useTotalByIndustry } from '../../../hooks/useTotalByIndustry';
import { useTotalByBrand } from '../../../hooks/useTotalByBrand';

import styles from '../../../styles/components/atoms/pie_chart.module.scss';

type Props = {
  toggle: boolean;
};

const PieChart: FC<Props> = (props) => {
  const { toggle } = props;
  const { data, totalPrice } = useAssetClient();
  const { industryName, totalResult } = useTotalByIndustry(data);
  const { name, result } = useTotalByBrand(data);
  const selectLabel = toggle ? name : industryName;
  const selectData = toggle ? result : totalResult;
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
      doughnutlabel: {
        labels: [
          {
            text: '資産評価額',
            font: {
              size: 20,
            },
          },
          {
            text: `${Number(totalPrice).toLocaleString()}円`,
            font: {
              size: 18,
            },
          },
        ],
      },
    },
    legend: {
      display: false,
    },
  };

  return (
    <div className={styles.pie_chart}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
