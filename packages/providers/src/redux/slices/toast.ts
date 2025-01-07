import type { Option } from '@packages/types';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

type ToastSlice = Option<string, 'error' | 'success' | 'info'>;

const initialState: ToastSlice[] = [];

export const toastSlice = createSlice({
   name: 'toast',
   initialState: initialState,
   reducers: {
      _show: (state, action: PayloadAction<ToastSlice[]>) => {
         const remainItem: ToastSlice[] = [];

         for (const item of action.payload) {
            const foundIndex = state.findIndex((t) => t.code === item.code);

            if (foundIndex > -1) {
               state[foundIndex] = item;
            } else {
               remainItem.push(item);
            }
         }

         return [...state, ...remainItem];
      },
      _close: (state, action: PayloadAction<string>) => {
         const foundIndex = state.findIndex((t) => t.code === action.payload);

         if (foundIndex > -1) {
            state.splice(foundIndex, 1);
         }
      },
   },
});

export const { _show } = toastSlice.actions;
export type { ToastSlice };
