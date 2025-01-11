'use client';

import { LexisItemContext } from '@components/pattern/lexis-item';
import { ClientOnly } from '@components/ui/client-only';
import { faker } from '@faker-js/faker';
import type { Lexis } from '@packages/types';
import { i18n } from '@packages/utils';
import { AnimatePresence } from 'motion/react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Sidebar } from 'primereact/sidebar';
import { type MouseEvent, useState } from 'react';
import { LexisItem } from './item';

type Props = {
   data: Lexis[];
};

const ListLexis = ({
   data = [
      {
         date_created: new Date().toDateString(),
         description: '',
         examples: [
            {
               language: 'hi',
               translate: 'Chào',
            },
         ],
         image: faker.image.avatar(),
         language: faker.food.fruit(),
         tags: [faker.food.fruit(), faker.food.fruit()],
         translate: faker.food.fruit(),
      },
   ],
}: Props) => {
   const [_data, setData] = useState(data);
   const [selected, setSelected] = useState<Lexis>();

   const onPressTrash = (
      e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
      data: Lexis,
   ) => {
      confirmPopup({
         target: e.currentTarget,
         message: i18n.t('page:lexis.message.confirm_delete', {
            word: data,
         }),
         icon: 'pi pi-exclamation-triangle',
         defaultFocus: 'reject',
         acceptLabel: i18n.t('common:absolutely_yes'),
         rejectLabel: i18n.t('common:accidentally'),
         accept: () => {
            setData((prev) => prev.filter((t) => t.language !== data.language));
         },
      });
   };

   return (
      <div className='p-4 grid grid-cols-3 gap-4'>
         <ClientOnly fallback={'loading'}>
            <AnimatePresence mode='popLayout'>
               {_data.map((item) => (
                  <LexisItemContext
                     key={item.language}
                     data={item}
                     edit={false}
                     onPressTrash={(e) => {
                        onPressTrash(e, item);
                     }}
                     onPressShowMore={() => {
                        setSelected(item);
                     }}
                  >
                     <LexisItem />
                  </LexisItemContext>
               ))}
            </AnimatePresence>
         </ClientOnly>

         <Sidebar
            className='w-[35vw]'
            visible={!!selected}
            showCloseIcon={false}
            position='right'
            blockScroll={true}
            onHide={() => setSelected(undefined)}
         >
            {selected && (
               <LexisItemContext
                  edit={true}
                  data={selected}
                  onPressClose={() => {
                     setSelected(undefined);
                  }}
                  onPressConfirm={() => {
                     setSelected(undefined);
                  }}
                  onPressTrash={(e) => {
                     if (selected) {
                        onPressTrash(e, selected);
                     }
                  }}
               >
                  <LexisItem />
               </LexisItemContext>
            )}
         </Sidebar>

         <ConfirmPopup />
      </div>
   );
};

export { ListLexis };
