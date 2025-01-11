import { useLexisItemContext } from '.';

const LexisItemDateCreated = () => {
   const date_created = useLexisItemContext((state) => state.data.date_created);

   return <p className='text-sm text-gray-400 ml-auto'>{date_created}</p>;
};

export { LexisItemDateCreated };
