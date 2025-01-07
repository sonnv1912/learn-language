import { queryKey } from '@packages/providers';
import type { User } from '@packages/types';
import { api } from '@packages/utils';
import { useQuery } from '@tanstack/react-query';
import { request } from '@utils/request';

const getMyProfile = async (token?: string) => {
   return await request<User>({
      endpoint: api.me,
      options: {
         method: 'get',
         token,
      },
   });
};

const useMyProfile = () => {
   return useQuery({
      queryKey: queryKey.me,
      staleTime: 60 * 60 * 1000,
      queryFn: async () => {
         const response = await getMyProfile();

         return response;
      },
   });
};

export { useMyProfile, getMyProfile };
