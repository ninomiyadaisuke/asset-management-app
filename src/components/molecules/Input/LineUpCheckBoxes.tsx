import { FC, ChangeEvent, useState, Dispatch, SetStateAction } from 'react';
import { CheckBox } from '../../atoms/Input';

import styles from '../../../styles/components/molecules/lineup-checkboxes.module.scss';

const initialData = {
  value: '銘柄別',
};

type Props = {
  setToggle: Dispatch<SetStateAction<boolean>>;
  toggle: boolean;
};

const LineUpCheckBoxes: FC<Props> = (props) => {
  const { setToggle, toggle } = props;
  const [data, setData] = useState(initialData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newData = { ...data, value: e.target.value };
    setData(newData);
    setToggle(!toggle);
  };
  return (
    <div className={styles.checkboxes}>
      <CheckBox text={'銘柄別'} checked={data.value === '銘柄別'} onChange={handleChange} />
      <CheckBox text={'業種別'} checked={data.value === '業種別'} onChange={handleChange} />
    </div>
  );
};

export default LineUpCheckBoxes;
