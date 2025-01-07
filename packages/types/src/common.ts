type Option<TCode = string, TType = string> = {
   code: TCode;
   label?: string;
   type?: TType;
   description?: string | null;
   icon?: string;
   image?: string;
   hide?: boolean;
   badge?: number;
   items?: Option[];
   command?: () => void;
};

export type { Option };
