export type ApiResponse<T = null> = {
   data: T | null;
   ok: boolean;
   status: number;
};

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
   token: string;
};

export type RequestOptionsWithNoToken =
   | {
        method: GET;
        params?: object;
     }
   | {
        method: POST | DELETE | PATCH;
        body?: object;
     };

export type RequestProps = {
   endpoint: string;
   options: RequestOptions;
};
