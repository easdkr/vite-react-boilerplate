import axios from 'axios'
import { Interceptor } from 'src/apis/application/service/axios.interceptor'

export class AxiosInstanceFactory {
  static createInstance(baseUrl: string, interceptor?: Interceptor) {
    const axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
    })

    if (interceptor) {
      axiosInstance.interceptors.request.use(interceptor.request.onFulfilled, interceptor.request.onRejected)
      axiosInstance.interceptors.response.use(interceptor.response.onFulfilled, interceptor.response.onRejected)
    }

    return axiosInstance
  }
}
