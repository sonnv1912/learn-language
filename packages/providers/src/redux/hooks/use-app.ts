import type { UseDispatch, UseSelector } from 'react-redux';
import { type AppSlice, _setApp } from '../slices/app';

const useApp = (
   useAppSelector: UseSelector<{ app: AppSlice }>,
   useAppDispatch: UseDispatch,
) => {
   const app = useAppSelector((state) => state.app);
   const dispatch = useAppDispatch();

   const setApp = (payload: AppSlice) => {
      dispatch(_setApp(payload));
   };

   return {
      app,

      setApp,
   };
};

export { useApp };
