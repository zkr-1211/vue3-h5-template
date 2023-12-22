import { http } from "@/utils/http";

export interface loginReq {
  appId: string;
  appType: number;
  data: {
    code: string;
    scope: string;
  };
  sign: string;
  qrCodeEncodeStr: string;
}
export interface loginRes {
  access_token: string;
  user_openid: string;
}
export interface parseQRCodeRes {
  codePlate: {
    appType: string;
    cpId: number;
    cpName: string;
    cpState: number;
    cpUrl: string;
    decorateJson: string;
    endDate: string;
    startDate: string;
    orderButton: string;
    version: string;
  };
  lifecycle: string;
}
export interface preLoginReq {
  appType: number;
  qrCodeEncodeStr: string;
}
export interface preLoginRes {
  id: string;
  sign: string;
  type: string;
}

const flag = "payfly";

export function login(data: loginReq): Promise<loginRes> {
  return http.request({
    url: `/${flag}/h5/login`,
    method: "post",
    data: data
  });
}

export function parseQRCode(encodeStr: string): Promise<parseQRCodeRes> {
  return http.request({
    url: `/${flag}/h5/codePlate/parse/${encodeStr}`,
    method: "get"
  });
}

// H5用户预登录
export function preLogin(data: preLoginReq): Promise<preLoginRes> {
  return http.request({
    url: `/${flag}/h5/login/pre`,
    method: "post",
    data: data
  });
}
