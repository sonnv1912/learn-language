import type { RequestOptionsWithNoToken, RequestProps } from '@packages/types';
import { instance } from '@packages/utils';

type Props = Omit<RequestProps, 'options'> & {
   options: RequestOptionsWithNoToken;
};

const request = async <T>(props: Props) => {
   const token = '';

   return await instance<T>({
      ...props,
      options: {
         ...props.options,
         token,
      },
   });
};

export { request };
