import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { AssetContainer } from '../components/containers';
const Home: NextPage = () => {
  return (
    <Layout title={'HOME'} description={'HOME'}>
      <AssetContainer />
    </Layout>
  );
};

export default Home;
