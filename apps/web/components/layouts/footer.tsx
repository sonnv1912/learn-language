import { Logo } from './logo';

const Footer = () => {
   return (
      <div className='py-4 px-10 border-t border-t-[--surface-border] flex items-center justify-between'>
         <Logo />

         <p>06-08-2024</p>
      </div>
   );
};

export { Footer };
