import { FC } from 'react';
import { Asset } from '../../types/asset';
import { useQueryClient } from 'react-query';

type Props = {
  data: Asset[];
};

const TotalAssets: FC<Props> = (props) => {
  const { data } = props;
  return <div></div>;
};

export default TotalAssets;
