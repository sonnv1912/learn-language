'use client';

import type { EnhancedStore } from '@reduxjs/toolkit';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

type Props = {
   children: ReactNode;
   loading: ReactNode;
   store: EnhancedStore;
};

const ReduxProvider = ({ children, store, loading }: Props) => {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistStore(store)} loading={loading}>
            {children}
         </PersistGate>
      </Provider>
   );
};

export * from './hooks';
export * from './objects';
export * from './store';
export * from './slices';
export { ReduxProvider };
