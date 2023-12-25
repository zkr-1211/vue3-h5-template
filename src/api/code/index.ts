import { http } from "@/utils/http";
import type { loginReq, loginRes, parseQRCodeRes, preLoginReq, preLoginRes } from "./type";

enum codeAPI {
  Login = "/payfly/h5/login",
  ParseQRCode = "/payfly/h5}/codePlate/parse/",
  PreLogin = "/payfly/h5/login/pre"
}

// H5用户预登录
export function preLogin(data: preLoginReq) {
  return http.request<preLoginRes>({
    url: codeAPI.PreLogin,
    method: "post",
    data: data
  });
}

// H5用户登录
export function login(data: loginReq) {
  return http.request<loginRes>({
    url: codeAPI.Login,
    method: "post",
    data: data
  });
}

// 解析码牌
export function parseQRCode(encodeStr: string) {
  return http.request<parseQRCodeRes>({
    url: codeAPI.ParseQRCode + encodeStr,
    method: "get"
  });
}
