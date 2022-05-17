import { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from '../../../styles/components/atoms/pie_chart.module.scss';

const PieChart: FC = () => {
  const chartData = {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['rgba(0, 0, 255, 0.5)', '#008080', 'rgba(255, 0, 0, 0.5)'],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: 'getTotal',
            font: {
              size: 30,
            },
          },
        ],
      },
    },
  };

  return (
    <div className={styles.pie_chart}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
