import type { AppTheme, User } from '@packages/types';
import { produce } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
   theme: AppTheme;
   user?: Partial<User>;
};

type Action = {
   setTheme: (payload: State['theme']) => void;
   setUser: (payload: State['user']) => void;
};

const initialState: State = {
   theme: 'dark',
   user: undefined,
};

const store = create<State & Action>()(
   persist(
      (set, get) => ({
         ...initialState,
         setTheme: (theme) => {
            set({ theme });
         },

         setUser(payload) {
            set(
               produce(get(), (state) => {
                  state.user = {
                     ...state.user,
                     ...payload,
                  };
               }),
            );
         },
      }),
      {
         name: 'app',
      },
   ),
);

export const useWebApp = store;

export const useMobileApp = store;
