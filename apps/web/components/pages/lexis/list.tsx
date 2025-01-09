'use client';

import { faker } from '@faker-js/faker';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { LexisItem } from './item';

type Props = {
   data: string[];
};

const ListLexis = ({
   data = [
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
   ],
}: Props) => {
   const chunkSize = Math.ceil(data.length / 3);
   const [_data, setData] = useState(data);
   const [array1, setArray1] = useState(data.slice(0, chunkSize));
   const [array2, setArray2] = useState(data.slice(chunkSize, chunkSize * 2));
   const [array3, setArray3] = useState(data.slice(chunkSize * 2));

   return (
      <div className='p-4 grid grid-cols-3 gap-4'>
         {/* <div className='flex flex-col gap-4'> */}
         <AnimatePresence mode='sync'>
            {_data.map((item) => (
               <LexisItem
                  key={item}
                  data={item}
                  onPressTrash={() => {
                     setData((prev) => prev.filter((t) => t !== item));
                  }}
               />
            ))}
         </AnimatePresence>
         {/* </div> */}

         {/* <div className='flex flex-col gap-4'>
            <AnimatePresence mode='sync'>
               {array2.map((item) => (
                  <LexisItem
                     key={item}
                     data={item}
                     onPressTrash={() => {
                        setArray2((prev) => prev.filter((t) => t !== item));
                     }}
                  />
               ))}
            </AnimatePresence>
         </div>

         <div className='flex flex-col gap-4'>
            <AnimatePresence mode='sync'>
               {array3.map((item) => (
                  <LexisItem
                     key={item}
                     data={item}
                     onPressTrash={() => {
                        setArray3((prev) => prev.filter((t) => t !== item));
                     }}
                  />
               ))}
            </AnimatePresence>
         </div> */}
      </div>
   );
};

export { ListLexis };
