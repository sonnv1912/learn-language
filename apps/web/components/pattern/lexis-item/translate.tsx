import { useLexisItemContext } from '.';

const LexisItemTranslate = () => {
   const translate = useLexisItemContext((state) => state.data.translate);

   return <p className='leading-7'>{translate}</p>;
};

export { LexisItemTranslate };
