// 和后端约定好接口返回的数据结构
export interface Response<T = any> {
  code: number | string;
  msg: string;
  data: T;
  total: number;
  ok: boolean;
}
