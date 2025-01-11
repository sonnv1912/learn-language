'use client';

import { useLexisItemContext } from '@components/pattern/lexis-item';
import { LexisItemAction } from '@components/pattern/lexis-item/action';
import { LexisItemDateCreated } from '@components/pattern/lexis-item/date-created';
import { LexisItemDescription } from '@components/pattern/lexis-item/description';
import { LexisItemExample } from '@components/pattern/lexis-item/example';
import { LexisItemImage } from '@components/pattern/lexis-item/image';
import { LexisItemLanguage } from '@components/pattern/lexis-item/language';
import { LexisItemTag } from '@components/pattern/lexis-item/tag';
import { LexisItemTranslate } from '@components/pattern/lexis-item/translate';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { Divider } from 'primereact/divider';

const LexisItem = () => {
   const edit = useLexisItemContext((state) => state.edit);

   return (
      <motion.div
         layout={true}
         initial={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.4 }}
         className={clsx(
            'overflow-hidden p-card shadow-none pt-4 flex flex-col',
         )}
      >
         <div className='flex flex-1 px-4 gap-4'>
            <LexisItemImage />

            <div className='flex-1 flex flex-col gap-3'>
               <div className='flex items-center'>
                  <LexisItemLanguage />

                  <LexisItemAction />
               </div>

               <LexisItemTranslate />

               <LexisItemDescription />

               <LexisItemTag />
            </div>
         </div>

         <Divider align='right'>
            <LexisItemDateCreated />
         </Divider>

         {edit && <LexisItemExample />}
      </motion.div>
   );
};

export { LexisItem };
