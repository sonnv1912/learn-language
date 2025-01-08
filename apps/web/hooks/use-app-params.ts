import { useParams } from 'next/navigation';

const useAppParams = <T = Record<string, string>>() => {
   const params = useParams<{ lng: string }>();

   return params as T & { lng: string };
};

export { useAppParams };
