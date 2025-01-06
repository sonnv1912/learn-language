type Option<T = string> = {
   code: T;
   label?: string;
   description?: string | null;
   icon?: string;
   image?: string;
   hide?: boolean;
   badge?: number;
   items?: Option[];
   action?: () => void;
};

export type { Option };
