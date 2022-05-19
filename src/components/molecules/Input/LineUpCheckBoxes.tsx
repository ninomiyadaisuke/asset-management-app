import { FC, ChangeEvent, useState } from 'react';
import { CheckBox } from '../../atoms/Input';
import { useAppSelector, useAppDispatch } from '../../../hooks/useRedux';
import { setToggle, invert } from '../../../slice/toggleSlice';

import styles from '../../../styles/components/molecules/lineup-checkboxes.module.scss';

const initialData = {
  value: '銘柄別',
};

const LineUpCheckBoxes: FC = () => {
  const toggle = useAppSelector(invert);
  const dispatch = useAppDispatch();
  const [data, setData] = useState(initialData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newData = { ...data, value: e.target.value };
    setData(newData);
    dispatch(setToggle(!toggle.toggle));
  };
  return (
    <div className={styles.checkboxes}>
      <CheckBox text={'銘柄別'} checked={data.value === '銘柄別'} onChange={handleChange} />
      <CheckBox text={'業種別'} checked={data.value === '業種別'} onChange={handleChange} />
    </div>
  );
};

export default LineUpCheckBoxes;
