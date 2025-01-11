import type { Toast } from '@packages/types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
   toast: Toast[];
};

type Action = {
   show: (payload: Toast[]) => void;
   close: (payload: string) => void;
};

const store = create<State & Action>()(
   immer((set, get) => ({
      toast: [],
      show(payload) {
         const remainItem: Toast[] = [];

         for (const item of payload) {
            const foundIndex = get().toast.findIndex(
               (t) => t.code === item.code,
            );

            if (foundIndex > -1) {
               set((state) => {
                  state.toast[foundIndex] = item;
               });
            } else {
               remainItem.push(item);
            }
         }

         set((state) => {
            state.toast = [...state.toast, ...remainItem];
         });
      },
      close(payload) {
         set((state) => {
            state.toast = state.toast.filter((t) => t.code !== payload);
         });
      },
   })),
);

export const useToast = store;
