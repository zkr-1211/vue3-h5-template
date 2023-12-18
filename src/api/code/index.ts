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
interface loginRes {
  access_token: string;
  user_openid: string;
}
interface parseQRCodeRes {
  codePlate: string;
  lifecycle: string;
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
