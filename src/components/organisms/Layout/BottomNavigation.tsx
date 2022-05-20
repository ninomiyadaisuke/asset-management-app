import { FC } from 'react';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { GoGraph } from 'react-icons/go';
import { IoIosLogOut } from 'react-icons/io';
import { useAppDispatch } from '../../../hooks/useRedux';
import { changePage } from '../../../slice/changePageSlice';

import styles from '../../../styles/components/organisms/bottom_navgation.module.scss';

const BottomNavigation: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.navgation}>
      <AiOutlineHome size={'20px'} color={'#616161'} onClick={() => dispatch(changePage('total'))} />
      <GoGraph size={'20px'} color={'#616161'} onClick={() => dispatch(changePage('dividend'))} />
      <Link href={'/'}>
        <a>
          <IoIosLogOut size={'20px'} color={'#616161'} />
        </a>
      </Link>
    </div>
  );
};

export default BottomNavigation;
