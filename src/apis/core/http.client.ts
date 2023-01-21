export interface IHttpClient {
  get(url: string, params?: unknown): Promise<unknown>
  post(url: string, body?: unknown): Promise<unknown>
  put(url: string, body?: unknown): Promise<unknown>
  patch(url: string, body?: unknown): Promise<unknown>
  delete(url: string, params?: unknown): Promise<unknown>
}
