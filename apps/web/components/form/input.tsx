import { Divider } from 'primereact/divider';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import type { FormEvent } from 'react';

type Props = {
   value?: string | null;
   label?: string;
   icon?: string;
   placeholder?: string;
   type?: 'string' | 'password';
   ratePassword?: boolean;
   errorMessage?: string;
   onChange: (value: string) => void;
};

const header = <div className='font-bold mb-3'>Pick a password</div>;

const footer = (
   <>
      <Divider />

      <p className='mt-2'>Suggestions</p>

      <ul className='pl-2 ml-2 mt-0 line-height-3'>
         <li>At least one lowercase</li>
         <li>At least one uppercase</li>
         <li>At least one numeric</li>
         <li>Minimum 8 characters</li>
      </ul>
   </>
);

const Input = ({
   errorMessage,
   label,
   type = 'string',
   placeholder,
   icon,
   value,
   ratePassword,
   onChange,
}: Props) => {
   const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;

      onChange(target.value);
   };

   return (
      <div className='flex flex-col flex-1'>
         {label && <div className='text-md font-semibold mb-2'>{label}</div>}

         {type === 'string' && icon && (
            <IconField iconPosition='left' className='flex'>
               <InputIcon className={icon} />

               <InputText
                  value={value}
                  placeholder={placeholder}
                  invalid={!!errorMessage}
                  className='flex-1'
                  onInput={(e) => {
                     handleOnChange(e);
                  }}
               />
            </IconField>
         )}

         {type === 'string' && !icon && (
            <InputText
               value={value}
               placeholder={placeholder}
               invalid={!!errorMessage}
               className='flex-1'
               onInput={(e) => {
                  handleOnChange(e);
               }}
            />
         )}

         {type === 'password' && (
            <Password
               value={value || ''}
               placeholder={placeholder}
               invalid={!!errorMessage}
               inputClassName='w-full'
               feedback={ratePassword}
               header={header}
               footer={footer}
               toggleMask={true}
               onInput={(e) => {
                  handleOnChange(e);
               }}
            />
         )}

         {errorMessage && (
            <small v-if='errorMessage' className='text-red-500 mt-1'>
               {errorMessage}
            </small>
         )}
      </div>
   );
};

export { Input };
