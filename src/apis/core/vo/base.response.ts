export interface BaseResponse<T> {
  data?: T
  statusCode: number
}
