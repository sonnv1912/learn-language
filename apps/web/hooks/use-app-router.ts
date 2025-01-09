import { ensureRoute } from '@utils/route';
import { useRouter } from 'next/navigation';
import { useAppParams } from './use-app-params';

const useAPpRouter = () => {
   const router = useRouter();
   const params = useAppParams();

   return {
      ...router,
      replace: (href: string) => {
         router.replace(
            ensureRoute({
               route: href,
               lng: params.lng,
            }),
         );
      },
      push: (href: string) => {
         router.push(
            ensureRoute({
               route: href,
               lng: params.lng,
            }),
         );
      },
      prefetch: (href: string) => {
         router.prefetch(
            ensureRoute({
               route: href,
               lng: params.lng,
            }),
         );
      },
   };
};

export { useAPpRouter };
