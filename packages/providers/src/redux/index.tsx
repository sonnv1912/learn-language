'use client';

import { type ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from './store';

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
