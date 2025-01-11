import { useLexisItemContext } from '.';

const LexisItemLanguage = () => {
   const language = useLexisItemContext((state) => state.data.language);

   return <p className='font-semibold text-xl flex-1 break-all'>{language}</p>;
};

export { LexisItemLanguage };
