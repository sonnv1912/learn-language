export type ApiResponse<T = undefined> = {
   data?: T | undefined;
   errors: {
      message: string;
      extensions: {
         code: string;
      };
   }[];
   ok: boolean;
   status: number;
} | null;

export type POST = 'post';
export type DELETE = 'delete';
export type PATCH = 'patch';
export type GET = 'get';

export type RequestOptions = (
   | {
        method: GET;
        params?: object;
     }
   | {
        method: POST | DELETE | PATCH;
        body?: object;
     }
) & {
   token?: string;
};

export type RequestProps = {
   endpoint: string;
   options: RequestOptions;
};
