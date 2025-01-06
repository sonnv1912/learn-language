import { PrimeReactProvider } from 'primereact/api';
import type { PropsWithChildren } from 'react';

const UIProvider = ({ children }: PropsWithChildren) => {
   return (
      <PrimeReactProvider
         value={{
            ripple: true,
         }}
      >
         {children}
      </PrimeReactProvider>
   );
};

export { UIProvider };
