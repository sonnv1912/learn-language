import { InputText } from 'primereact/inputtext';
import type { FormEvent } from 'react';

type Props = {
   value: string;
   label?: string;
   placeholder?: string;
   type?: 'string' | 'password';
   errorMessage?: string;
   onChange: (value: string) => void;
};

const Input = ({
   errorMessage,
   label,
   placeholder,
   value,
   onChange,
}: Props) => {
   const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;

      onChange(target.value);
   };

   return (
      <div className='flex flex-col'>
         <div className='text-md font-semibold mb-2'>{label}</div>

         <InputText
            value={value}
            placeholder={placeholder}
            className='flex-1'
            onInput={(e) => {
               handleOnChange(e);
            }}
         />

         <small v-if='errorMessage' className='text-red-500'>
            {errorMessage}
         </small>
      </div>
   );
};

export { Input };
