import { FC } from 'react';
import Link from 'next/link';

import styles from '../../../styles/components/organisms/header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href={'/'}>
          <a>資産管理アプリ</a>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>
              <a>ポートフォリオ</a>
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <a>配当グラフ</a>
            </Link>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
