'use client';

import { Input } from '@components/form/input';
import { i18n } from '@packages/utils';
import { parseAsString, useQueryState } from 'nuqs';

const LexisPageHeader = () => {
   const [q, setQ] = useQueryState('q', parseAsString.withDefault(''));

   const onUpdateKeyword = (value: string) => {
      setQ(value);
   };

   return (
      <div className='flex items-center justify-between h-20 border-b border-[--surface-border] px-4'>
         <Input
            value={q}
            icon='pi pi-search'
            placeholder={i18n.t('page:lexis.search_learned_word')}
            onChange={onUpdateKeyword}
         />
      </div>
   );
};

export { LexisPageHeader };
