import { FC } from 'react';

import styles from '../../../styles/components/atoms/footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <small className={styles.footer}>&copy;Daisuke Ninomiomiya 2022</small>
    </div>
  );
};

export default Footer;
