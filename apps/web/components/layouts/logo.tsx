import { APP_NAME } from '@packages/utils';
import Image from 'next/image';
import Link from 'next/link';
import LogoIcon from '@packages/assets/icons/ic-logo.png';

const Logo = () => {
   return (
      <Link href='/' className='flex items-center gap-1'>
         <Image alt='' src={LogoIcon} width={40} height={40} />

         <p className='font-bold text-xl'>{APP_NAME}</p>
      </Link>
   );
};

export { Logo };
