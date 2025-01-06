import type { DELETE, GET, PATCH, POST } from '@packages/types';

export const API_BASE_URL = 'http://localhost:8055';

export const APP_NAME = 'LexiFun';

export const ACCESS_TOKEN = 'access_token';

export const COOKIE = {
   i18n: 'i18n',
};

export const METHOD = {
   post: 'post' as POST,
   get: 'get' as GET,
   patch: 'patch' as PATCH,
   delete: 'delete' as DELETE,
};

export const ERROR_CODE = {
   BAD_REQUEST: 400,
   UNAUTHORIZED: 401,
};
