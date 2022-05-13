import React from 'react';
import { NextPage } from 'next';
import { fetchAsset } from '../lib/asset';

const Sample: NextPage = () => {
  fetchAsset();
  return <div></div>;
};

export default Sample;
