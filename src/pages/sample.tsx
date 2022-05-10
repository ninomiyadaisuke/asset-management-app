import React from 'react';
import { NextPage } from 'next';
import { PieChart } from '../components/atoms/Chart';
import { data } from '../lib/data';

const Sample: NextPage = () => {
  return (
    <div>
      <PieChart data={data} />
    </div>
  );
};

export default Sample;
