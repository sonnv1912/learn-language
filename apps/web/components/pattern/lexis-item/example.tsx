'use client';

import { Input } from '@components/form/input';
import { i18n } from '@packages/utils';
import { Tag } from 'primereact/tag';
import { useLexisItemContext } from '.';

const Item = ({
   data,
   index,
}: {
   data: {
      language: string;
      translate: string;
   };
   index: number;
}) => {
   return (
      <div key={data.language} className='flex flex-col gap-4'>
         <Tag
            className='w-fit text-sm'
            severity='success'
            value={`${i18n.t('common:example')} ${index + 1}`}
         />

         <Input
            value={data.language}
            onChange={() => {
               //
            }}
         />

         <Input
            value={data.translate}
            onChange={() => {
               //
            }}
         />
      </div>
   );
};

const LexisItemExample = () => {
   const data = useLexisItemContext((state) => state.data.examples);

   return (
      <div className='px-4 flex flex-col gap-10'>
         {data.map((item, index) => (
            <Item key={item.language} data={item} index={index} />
         ))}
      </div>
   );
};

export { LexisItemExample };
