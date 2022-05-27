import { useQueryClient, useMutation } from 'react-query';
import { logout } from '../lib/auth';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const logoutMutation = useMutation(() => logout(), {
    onSuccess: () => {
      queryClient.removeQueries('auth');
      queryClient.removeQueries('asset');
    },
  });
  return { logoutMutation };
};
