import type { User } from '@packages/types';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

type AppSlice = Partial<{
   theme: 'dark' | 'light';
   user: User;
}>;

const initialState: AppSlice = {
   theme: 'dark',
};

export const appSlice = createSlice({
   name: 'app',
   initialState: initialState,
   reducers: {
      _setApp: (state, action: PayloadAction<AppSlice>) => {
         return {
            ...state,
            ...action.payload,
         };
      },
   },
});

export const { _setApp } = appSlice.actions;
export type { AppSlice };
