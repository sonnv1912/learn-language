import { useWebApp } from '@packages/hooks';
import { PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import { useContext, useEffect } from 'react';

const SwitchTheme = () => {
   const { changeTheme } = useContext(PrimeReactContext);
   const theme = useWebApp((state) => state.theme);
   const setTheme = useWebApp((state) => state.setTheme);

   useEffect(() => {
      if (theme === 'light') {
         changeTheme?.('dark', 'light', 'theme');

         return;
      }

      changeTheme?.('light', 'dark', 'theme');
   }, [theme, changeTheme]);

   return (
      <>
         {theme === 'light' && (
            <Button
               icon='pi pi-moon'
               rounded={true}
               text={true}
               onClick={() => {
                  setTheme?.('dark');
               }}
            />
         )}

         {theme === 'dark' && (
            <Button
               icon='pi pi-sun'
               rounded={true}
               text={true}
               onClick={() => {
                  setTheme?.('light');
               }}
            />
         )}
      </>
   );
};

export { SwitchTheme };
