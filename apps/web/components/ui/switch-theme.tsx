import { useApp } from '@packages/providers';
import { PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import { useContext, useEffect } from 'react';

const SwitchTheme = () => {
   const { changeTheme } = useContext(PrimeReactContext);
   const { app, setApp } = useApp();

   useEffect(() => {
      if (app.theme === 'light') {
         changeTheme?.('dark', 'light', 'theme');

         return;
      }

      changeTheme?.('light', 'dark', 'theme');
   }, [app.theme, changeTheme]);

   return (
      <>
         {app.theme === 'light' && (
            <Button
               icon='pi pi-moon'
               rounded={true}
               size='small'
               onClick={() => {
                  setApp({
                     theme: 'dark',
                  });
               }}
            />
         )}

         {app.theme === 'dark' && (
            <Button
               icon='pi pi-sun'
               rounded={true}
               size='small'
               onClick={() => {
                  setApp({
                     theme: 'light',
                  });
               }}
            />
         )}
      </>
   );
};

export { SwitchTheme };
