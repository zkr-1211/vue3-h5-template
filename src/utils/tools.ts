/**
 * 判断支付宝、微信支付
 * @returns 支付环境判断
 */
export function getPayEnv(): string {
  const browser = navigator.userAgent.toLowerCase();
  let payEnv = "";
  if ((browser.match(/Alipay/i) as unknown) == "alipay") {
    payEnv = "alipay";
  }
  if ((browser.match(/MicroMessenger/i) as unknown) == "micromessenger") {
    payEnv = "wx";
  }
  return payEnv;
}

//  截取url中的code方法
export function getUrlCode(): Record<string, string> {
  const url = location.search;
  const theRequest: Record<string, string> = {};
  if (url.indexOf("?") !== -1) {
    const str = url.substr(1);
    const strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  return theRequest;
}

// 支付宝获取code
export function getQueryParams(): Record<string, string> {
  const result: Record<string, string> = {}; // 存参数得对象
  const urlString = location.href;
  // 利用正则表达式
  const reg = /[?&][^?&]+=[^?&]+/g;
  const found = urlString.match(reg); // 拿到有符合正则得字符串，输出为数组 [ '?name=home', '&age=20' ]
  if (found) {
    found.forEach(item => {
      const temp = item.substring(1).split("="); // = 分割
      const key = temp[0];
      const value = temp[1];
      result[key] = value;
    });
  }
  return result;
}
