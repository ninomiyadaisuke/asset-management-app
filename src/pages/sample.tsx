import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { AssetCard } from '../components/atoms/Card';

const Sample: NextPage = () => {
  return (
    // <Layout title="sample" description="sample">
    <div style={{ width: '500px' }}>
      <AssetCard />
    </div>
    // </Layout>
  );
};

export default Sample;
