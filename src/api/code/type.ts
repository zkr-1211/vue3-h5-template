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
