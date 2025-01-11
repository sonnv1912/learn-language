import { Tag } from 'primereact/tag';
import { useLexisItemContext } from '.';

const LexisItemTag = () => {
   const tags = useLexisItemContext((state) => state.data.tags);

   return (
      <div className='flex flex-wrap gap-2'>
         {tags.map((tag) => (
            <Tag key={tag} value={tag} />
         ))}
      </div>
   );
};

export { LexisItemTag };
