import type {
   ApiResponse,
   RequestOptions,
   RequestProps,
} from '@packages/types';
import { API_BASE_URL, METHOD } from '../constants';
import queryString from 'qs';

const handleRequestOptions = (options: RequestOptions) => {
   const requestOptions: Omit<RequestInit, 'headers'> & {
      headers: Record<string, string>;
   } = {
      method: options.method,
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
      },
   };

   if (options.token && requestOptions.headers) {
      requestOptions.headers.Authorization = `Bearer ${options.token}`;
   }

   if (options.method !== METHOD.get && options.body) {
      requestOptions.body = JSON.stringify(options.body);
   }

   return requestOptions;
};

const instance = async <T>({
   endpoint,
   options,
}: RequestProps): Promise<ApiResponse<T> | null> => {
   let url = API_BASE_URL + endpoint;

   if (options.method === METHOD.get && options.params) {
      url = `${url}?${queryString.stringify(options.params)}`;
   }

   const response = await fetch(url, handleRequestOptions(options));

   let result: ApiResponse<T> | null = null;
   try {
      result = await response.json();
   } catch (_error) {
      result = null;
   }

   if (result) {
      if (!response?.ok) {
         const error: ApiResponse<T> = {
            data: null,
            ok: false,
            status: response.status,
         };

         throw error;
      }

      return {
         ...result,
         ok: response.ok,
         status: response.status,
      };
   }

   return null;
};

export { instance };
