import { _setApp, type AppSlice } from '../slices/app';
import { useAppDispatch, useAppSelector } from '../store';

const useApp = () => {
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
