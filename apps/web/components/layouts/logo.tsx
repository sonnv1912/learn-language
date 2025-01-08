import LogoIcon from '@packages/assets/icons/ic-logo.png';
import { APP_NAME } from '@packages/utils';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
   size?: number;
   textSize?: 'xl' | 'lg' | 'md';
};

const Logo = ({ size = 40, textSize = 'xl' }: Props) => {
   return (
      <Link href='/' className='flex items-center gap-1'>
         <Image alt='' src={LogoIcon} width={size} height={size} />

         <p className={`font-bold text-${textSize}`}>{APP_NAME}</p>
      </Link>
   );
};

export { Logo };
