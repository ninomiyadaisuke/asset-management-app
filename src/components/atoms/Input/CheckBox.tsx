import { FC, ChangeEvent } from 'react';

import styles from '../../../styles/components/atoms/checkbox.module.scss';

type Props = {
  text: '銘柄別' | '業種別';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

const CheckBox: FC<Props> = (props) => {
  const { text = '', checked = false, onChange } = props;
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" id={text} value={text} checked={checked} onChange={(e) => onChange(e)} />
      <label htmlFor={text}>{text}</label>
    </div>
  );
};

export default CheckBox;
