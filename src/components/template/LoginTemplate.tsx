import { FC } from 'react';
import { PrimaryButton } from '../../components/atoms/Button';
import { login } from '../../lib/auth';

import styles from '../../styles/components/templates/login.module.scss';

const LoginTemplate: FC = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__position}>
        <PrimaryButton onClick={login} text={'login'} />
      </div>
    </div>
  );
};

export default LoginTemplate;
