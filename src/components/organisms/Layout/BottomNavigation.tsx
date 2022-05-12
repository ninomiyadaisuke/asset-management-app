import { FC } from 'react';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { GoGraph } from 'react-icons/go';
import { IoIosLogOut } from 'react-icons/io';

import styles from '../../../styles/components/organisms/bottom_navgation.module.scss';

const BottomNavigation: FC = () => {
  return (
    <div className={styles.navgation}>
      <Link href={'/'}>
        <a>
          <AiOutlineHome size={'20px'} color={'#616161'} />
        </a>
      </Link>
      <Link href={'/'}>
        <a>
          <GoGraph size={'20px'} color={'#616161'} />
        </a>
      </Link>
      <Link href={'/'}>
        <a>
          <IoIosLogOut size={'20px'} color={'#616161'} />
        </a>
      </Link>
    </div>
  );
};

export default BottomNavigation;
