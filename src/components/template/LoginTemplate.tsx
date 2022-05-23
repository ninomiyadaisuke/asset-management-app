import { FC } from 'react';
import { PrimaryButton } from '../../components/atoms/Button';

import styles from '../../styles/components/templates/login.module.scss';

const LoginTemplate: FC = () => {
  const login = () => {};
  return (
    <div className={styles.login}>
      <div className={styles.login__position}>
        <PrimaryButton onClick={login} text={'login'} />
      </div>
    </div>
  );
};

export default LoginTemplate;
