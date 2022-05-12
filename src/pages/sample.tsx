import React from 'react';
import { NextPage } from 'next';
import { BottomNavigation } from '../components/organisms/Layout';
import { Spacer } from '../components/atoms/Utilities';

const Sample: NextPage = () => {
  return (
    <div>
      <Spacer size={'lg'} />
      <BottomNavigation />
    </div>
  );
};

export default Sample;
