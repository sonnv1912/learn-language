import { ensureRoute } from '@utils/route';
import { useRouter } from 'next/navigation';
import { useAppParams } from './use-app-params';

const useAPpRouter = () => {
   const router = useRouter();
   const params = useAppParams();

   return {
      ...router,
      replace: (href: string) => {
         router.replace(ensureRoute(href, params.lng));
      },
      push: (href: string) => {
         router.push(ensureRoute(href, params.lng));
      },
      prefetch: (href: string) => {
         router.prefetch(ensureRoute(href, params.lng));
      },
   };
};

export { useAPpRouter };
