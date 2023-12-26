export interface LoginReq {
  appId: string;
  appType: number;
  data: {
    code: string;
    scope: string;
  };
  sign: string;
  qrCodeEncodeStr: string;
}

export interface LoginRes {
  access_token: string;
  user_openid: string;
}

export interface ParseQRCodeRes {
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

export interface PreLoginReq {
  appType: number;
  qrCodeEncodeStr: string;
}

export interface PreLoginRes {
  id: string;
  sign: string;
  type: string;
}
