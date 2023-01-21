import { AxiosInstance } from 'axios'
import { AxiosInstanceFactory } from 'src/apis/application/service/axios.factory'
import { IHttpClient } from 'src/apis/core/http.client'
import { BaseResponse } from 'src/apis/core/vo/base.response'

// TODO: ErrorHandler 추가할 것

const globalAxiosInstance = AxiosInstanceFactory.createInstance('https://mock.easdkr.com')

class AxiosHttpClient implements IHttpClient {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly axiosInstance: AxiosInstance) {}

  async get<Response>(url: string, params: unknown): Promise<BaseResponse<Response>> {
    const res = await this.axiosInstance.get<Response>(url, { params })

    return {
      data: res.data,
      statusCode: res.status,
    }
  }

  async post<Response>(url: string, body?: unknown): Promise<BaseResponse<Response>> {
    const res = await this.axiosInstance.post<Response>(url, body)

    return {
      data: res.data,
      statusCode: res.status,
    }
  }

  async put<Response>(url: string, body?: unknown): Promise<BaseResponse<Response>> {
    const res = await this.axiosInstance.put<Response>(url, body)

    return {
      data: res.data,
      statusCode: res.status,
    }
  }

  async patch<Response>(url: string, body?: unknown): Promise<BaseResponse<Response>> {
    const res = await this.axiosInstance.patch<Response>(url, body)

    return {
      data: res.data,
      statusCode: res.status,
    }
  }

  async delete<Response>(url: string, params?: unknown): Promise<BaseResponse<Response>> {
    const res = await this.axiosInstance.delete<Response>(url, { params })

    return {
      data: res.data,
      statusCode: res.status,
    }
  }
}

const axiosHttpClient = new AxiosHttpClient(globalAxiosInstance)

export default axiosHttpClient
