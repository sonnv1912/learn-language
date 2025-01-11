'use client';

import {
   type PropsWithChildren,
   createContext,
   useContext,
   useRef,
} from 'react';
import { useStore } from 'zustand';
import {
   type LexisItemProps,
   type LexisItemStore,
   createLexisItemStore,
} from './store';

const Context = createContext<LexisItemStore | null>(null);

const LexisItemContext = ({
   children,
   ...props
}: PropsWithChildren<LexisItemProps>) => {
   const storeRef = useRef<LexisItemStore>(null);

   if (!storeRef.current) {
      storeRef.current = createLexisItemStore(props);
   }

   return (
      <Context.Provider value={storeRef.current}>{children}</Context.Provider>
   );
};

const useLexisItemContext = <T,>(selector: (state: LexisItemProps) => T): T => {
   const store = useContext(Context);

   if (!store) {
      throw new Error('Missing Context.Provider in the tree');
   }

   return useStore(store, selector);
};

export { LexisItemContext, useLexisItemContext };
