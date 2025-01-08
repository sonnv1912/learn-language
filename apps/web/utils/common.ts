import { APP_NAME } from '@packages/utils';

const pageTitle = (title: string) => {
   return `${title} — ${APP_NAME}`;
};

export { pageTitle };
