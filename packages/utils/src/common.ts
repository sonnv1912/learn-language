import type { User } from '@packages/types';

const username = (data: User | null | undefined) => {
   return data ? `${data?.first_name} ${data?.last_name}` : '';
};

export { username };
