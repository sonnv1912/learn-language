'use client';

import { ReduxProvider } from '@packages/providers';
import type { ReactNode } from 'react';
import { store } from './store';

type Props = {
   children: ReactNode;
};

const WebReduxProvider = ({ children }: Props) => {
   return (
      <ReduxProvider loading={'loading'} store={store}>
         {children}
      </ReduxProvider>
   );
};

// export * from './hooks';
export * from './store';
export { WebReduxProvider };
