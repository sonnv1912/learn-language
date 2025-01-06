'use client';

import { useRef, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

type Props = {
   children: ReactNode;
   platform: 'mobile' | 'web';
   blackList?: string[];
   whiteList?: string[];
   loading: ReactNode;
};

const ReduxProvider = ({
   children,
   platform,
   loading,
   blackList = [],
   whiteList = [],
}: Props) => {
   const ref = useRef(createStore(platform, whiteList, blackList));

   return (
      <Provider store={ref.current}>
         <PersistGate persistor={persistStore(ref.current)} loading={loading}>
            {children}
         </PersistGate>
      </Provider>
   );
};

export * from './hooks';
export * from './store';
export { ReduxProvider };
