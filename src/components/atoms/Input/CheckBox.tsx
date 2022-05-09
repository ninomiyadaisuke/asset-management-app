import { FC } from 'react';

import styles from '../../../styles/components/atoms/checkbox.module.scss';

type Props = {
  text: '業種別' | '銘柄別';
  onChange: () => void;
  checked: boolean;
};

const CheckBox: FC<Props> = (props) => {
  const { text = '', checked = false, onChange } = props;
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" id={text} checked={checked} onChange={onChange} />
      <label htmlFor={text}>{text}</label>
    </div>
  );
};

export default CheckBox;
