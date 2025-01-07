import type { UseDispatch, UseSelector } from 'react-redux';
import { type ToastSlice, toastSlice } from '../slices/toast';

const useAppToast = (
   useAppSelector: UseSelector<{ toast: ToastSlice[] }>,
   useAppDispatch: UseDispatch,
) => {
   const items = useAppSelector((state) => state.toast);
   const dispatch = useAppDispatch();

   const show = (payload: ToastSlice[]) => {
      dispatch(toastSlice.actions._show(payload));
   };

   const close = (payload: string) => {
      dispatch(toastSlice.actions._close(payload));
   };

   return {
      items,

      show,
      close,
   };
};

export { useAppToast };
