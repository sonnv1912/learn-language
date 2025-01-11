type Lexis = {
   language: string;
   translate: string;
   image: string;
   description: string;
   date_created: string;
   tags: string[];
   examples: {
      language: string;
      translate: string;
   }[];
};

export type { Lexis };
