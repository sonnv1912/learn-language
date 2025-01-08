import type { Option } from '@packages/types';
import { i18n, route } from '@packages/utils';

const IS_DEV = process.env.NODE_ENV === 'development';

const SIDEBAR: Option[] = [
   {
      code: 'dashboard',
      icon: 'pi pi-home',
      label: i18n.t('page:dashboard.title'),
      url: route.dashboard,
   },
   {
      code: 'lexis',
      icon: 'pi pi-book',
      label: i18n.t('page:lexis.title'),
      url: route.lexis,
   },
];

export { IS_DEV, SIDEBAR };
