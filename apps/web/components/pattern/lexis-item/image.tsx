'use client';

import { Avatar } from 'primereact/avatar';
import { useLexisItemContext } from '.';

const LexisItemImage = () => {
   const image = useLexisItemContext((state) => state.data.image);

   return <Avatar label='B' size='large' image={image} shape='circle' />;
};

export { LexisItemImage };
