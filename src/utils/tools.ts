/**
 * 判断支付宝、微信支付
 * @returns 支付环境判断
 */
export function getPayEnv(): string {
  const browser = navigator.userAgent.toLowerCase();
  let payEnv = "";
  if ((browser.match(/Alipay/i) as unknown) === "alipay") {
    payEnv = "alipay";
  }
  if ((browser.match(/MicroMessenger/i) as unknown) === "micromessenger") {
    payEnv = "wx";
  }
  return payEnv;
}
