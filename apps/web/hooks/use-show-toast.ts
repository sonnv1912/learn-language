type Props = {
   title: string;
   description?: string;
};

const useShowToast = () => {
   const toast = useToast();

   return {
      error: ({ title, description }: Props) => {
         toast.add({
            title,
            description,
            color: 'red',
            icon: 'ep:warning-filled',
         });
      },
      success: ({ title, description }: Props) => {
         toast.add({
            title,
            description,
            color: 'green',
            icon: 'ep:success-filled',
         });
      },
   };
};

export { useShowToast };
