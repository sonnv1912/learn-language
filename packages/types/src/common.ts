type Option = {
   key: string;
   label?: string;
   items?: Option[];
   icon?: string;
   to?: string;
   action?: () => void;
};

export type { Option };
