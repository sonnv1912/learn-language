import { Logo } from './logo';

const Footer = () => {
   return (
      <div className='py-8 border-t border-t-[--surface-border]'>
         <div className='max-w-screen-lg flex items-center justify-between mx-auto'>
            <Logo />
         </div>
      </div>
   );
};

export { Footer };
