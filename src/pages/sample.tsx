import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { SwitchChart } from '../components/organisms';

const Sample: NextPage = () => {
  return (
    <Layout title="sample" description="sample">
      <SwitchChart />
    </Layout>
  );
};

export default Sample;
