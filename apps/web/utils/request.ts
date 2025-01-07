import type { RequestProps } from '@packages/types';
import { instance } from '@packages/utils';

const request = async <T>(props: RequestProps) => {
   const token = props.options.token;

   return await instance<T>({
      ...props,
      options: {
         ...props.options,
         token,
      },
   });
};

export { request };
