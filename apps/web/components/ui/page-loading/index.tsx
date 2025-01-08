import style from './page-loading.module.css';

const PageLoading = () => {
   return (
      <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-[--surface-ground]'>
         <span className={style.loader} />
      </div>
   );
};

export { PageLoading };
