import { FC } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { GoGraph } from 'react-icons/go';
import { IoIosLogOut } from 'react-icons/io';
import { useAppDispatch } from '../../../hooks/useRedux';
import { changePage } from '../../../slice/changePageSlice';
import { setToggle } from '../../../slice/toggleSlice';
import { useAuth } from '../../../hooks/useAuth';

import styles from '../../../styles/components/organisms/bottom_navgation.module.scss';

const BottomNavigation: FC = () => {
  const dispatch = useAppDispatch();
  const { logoutMutation } = useAuth();

  const handleClick = (state: string) => {
    dispatch(setToggle(true));
    dispatch(changePage(state));
  };
  return (
    <div className={styles.navgation}>
      <AiOutlineHome size={'20px'} color={'#616161'} onClick={() => handleClick('total')} />
      <GoGraph size={'20px'} color={'#616161'} onClick={() => handleClick('dividend')} />
      <IoIosLogOut size={'20px'} color={'#616161'} onClick={() => logoutMutation.mutate()} />
    </div>
  );
};

export default BottomNavigation;
