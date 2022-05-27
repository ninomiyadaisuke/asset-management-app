import { FC } from 'react';
import Link from 'next/link';
import { useAuth } from '../../../hooks/useAuth';
import { useAppDispatch } from '../../../hooks/useRedux';
import { changePage } from '../../../slice/changePageSlice';
import { setToggle } from '../../../slice/toggleSlice';

import styles from '../../../styles/components/organisms/header.module.scss';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { logoutMutation } = useAuth();

  const handleClick = (state: 'total' | 'dividend') => {
    dispatch(setToggle(true));
    dispatch(changePage(state));
  };

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
            <a onClick={() => handleClick('total')}>ポートフォリオ</a>
          </li>
          <li>
            <a onClick={() => handleClick('dividend')}>配当グラフ</a>
          </li>
          <li>
            <a onClick={() => logoutMutation.mutate()}>Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
