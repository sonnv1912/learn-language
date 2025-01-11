export type Option<TCode = string, TType = string> = {
   code: TCode;
   label?: string;
   type?: TType;
   description?: string | null;
   icon?: string;
   image?: string;
   hide?: boolean;
   badge?: number;
   url?: string;
   items?: Option[];
   command?: () => void;
};

export type AppTheme = 'dark' | 'light';

export type Toast = Option<string, 'error' | 'success' | 'info'>;
