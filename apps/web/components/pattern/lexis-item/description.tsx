import { useLexisItemContext } from '.';

const LexisItemDescription = () => {
   const description = useLexisItemContext((state) => state.data.description);

   return <p className='leading-7'>{description}</p>;
};

export { LexisItemDescription };
