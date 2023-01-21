import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface Interceptor {
  request: {
    onFulfilled?: ((value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>) | null
    onRejected?: ((error: AxiosError) => unknown) | null
  }
  response: {
    onFulfilled?: ((value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>) | null
    onRejected?: ((error: unknown) => unknown) | null
  }
}
