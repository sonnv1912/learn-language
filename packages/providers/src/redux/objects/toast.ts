import type { EnhancedStore } from '@reduxjs/toolkit';
import { type ToastSlice, toastSlice } from '../slices/toast';

const appToast = (store: EnhancedStore<{ toast: ToastSlice[] }>) => {
   return {
      show: (payload: ToastSlice[]) => {
         store.dispatch(toastSlice.actions._show(payload));
      },
   };
};

export { appToast };
