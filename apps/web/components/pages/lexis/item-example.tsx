'use client';

import { motion } from 'motion/react';
import { Tag } from 'primereact/tag';

type Props = {
   collapse: boolean;
};

const LexisItemExample = ({ collapse }: Props) => {
   return (
      <motion.div
         className='px-4 flex flex-col gap-10'
         initial={{ height: 0, paddingBottom: 0 }}
         layout={true}
         animate={{
            height: collapse ? 0 : 'auto',
            paddingBottom: collapse ? 0 : 16,
         }}
      >
         <div>
            <Tag severity='success' value='Vi du 1' />

            <p className='mt-4'>
               - No thanks, I'm already eat a banana in the morning.
            </p>

            <p className='mt-4'>
               - Không cảm ơn, tôi đã đã ăn 1 quả chuối sáng nay rồi
            </p>
         </div>

         <div>
            <Tag severity='success' value='Vi du 2' />

            <p className='mt-4'>
               - No thanks, I'm already eat a banana in the morning.
            </p>

            <p className='mt-4'>
               - Không cảm ơn, tôi đã đã ăn 1 quả chuối sáng nay rồi
            </p>
         </div>

         <div>
            <Tag severity='success' value='Vi du 2' />

            <p className='mt-4'>
               - No thanks, I'm already eat a banana in the morning.
            </p>

            <p className='mt-4'>
               - Không cảm ơn, tôi đã đã ăn 1 quả chuối sáng nay rồi
            </p>
         </div>

         <div>
            <Tag severity='success' value='Vi du 2' />

            <p className='mt-4'>
               - No thanks, I'm already eat a banana in the morning.
            </p>

            <p className='mt-4'>
               - Không cảm ơn, tôi đã đã ăn 1 quả chuối sáng nay rồi
            </p>
         </div>
      </motion.div>
   );
};

export { LexisItemExample };
