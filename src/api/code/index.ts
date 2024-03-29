import { http } from '@/utils/http';
import type { LoginReq, LoginRes, ParseQRCodeRes, PreLoginReq, PreLoginRes } from './type';

enum codeAPI {
  Login = '/payfly/h5/login',
  ParseQRCode = '/payfly/h5}/codePlate/parse/',
  PreLogin = '/payfly/h5/login/pre'
}

// H5用户预登录
export function preLogin(data: PreLoginReq) {
  return http.request<PreLoginRes>({
    url: codeAPI.PreLogin,
    method: 'post',
    data: data
  });
}

// H5用户登录
export function login(data: LoginReq) {
  return http.request<LoginRes>({
    url: codeAPI.Login,
    method: 'post',
    data: data
  });
}

// 解析码牌
export function parseQRCode(encodeStr: string) {
  return http.request<ParseQRCodeRes>({
    url: codeAPI.ParseQRCode + encodeStr,
    method: 'get'
  });
}
