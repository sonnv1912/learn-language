import type { User } from '@repo/types';
import { api, queryKey } from '@repo/utils';
import { useQuery } from '@tanstack/vue-query';

const useMyProfile = () => {
	return useQuery({
		queryKey: queryKey.me,
		staleTime: 60 * 60 * 1000,
		queryFn: async () => {
			const response = await request<User>({
				endpoint: api.me,
				options: {
					method: 'get',
				},
			});

			return response;
		},
	});
};

export { useMyProfile };
