import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Header, BottomNavigation } from '../organisms/Layout';
import { Footer } from '../atoms/Layout';

import styles from '../../styles/components/layout/layout.module.scss';

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { title, description, children } = props;
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default Layout;
