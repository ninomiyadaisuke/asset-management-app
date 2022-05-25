import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { listenAuthState } from '../../../lib/auth';
import { Loading } from '../Utilities';

type Props = {
  children: ReactNode;
};

const Auth: FC<Props> = (props) => {
  const { children } = props;
  const router = useRouter();
  const { data, isLoading } = useQuery('auth', () => listenAuthState());

  if (isLoading) return <Loading />;
  if (data || router.pathname === '/login') {
    return <div>{children}</div>;
  } else {
    return <></>;
  }
};

export default Auth;
