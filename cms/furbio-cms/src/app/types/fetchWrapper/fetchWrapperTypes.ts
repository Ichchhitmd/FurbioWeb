export interface FetchOptions<B> {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: HeadersInit;
    body?: B;
}