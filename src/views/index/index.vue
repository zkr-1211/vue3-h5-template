<script setup lang="ts" name="Index">
import { login, parseQRCode, type loginReq } from "@/api/code";
import { ref } from "vue";
import { getPayEnv } from "@/utils/tools";
import { storage } from "@/utils/storage";
const code = ref("");
const codePlate = ref("");
let parseQRCodeInfo = ref<any>({});
function getEnvJumpCode() {
  const env = getPayEnv();
  console.log("🚀 ~ file: index.vue:11 ~ getEnvJumpCode ~ env:", env);

  if (env == "wx") {
    // 在微信中打开
    code.value = getUrlCode().code;
  }
  if (env == "alipay") {
    //  支付宝
    code.value = getQueryParams().auth_code;
  }
  if (code.value) {
    storage.setItem("userCode", code.value);
  }
  codePlate.value = storage.getItem("codePlate") || "";
  if (codePlate.value && code.value) {
    loginInfo();
  }
}
// 微信获取code
function getUrlCode(): Record<string, string> {
  // 截取url中的code方法
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
function getQueryParams(): Record<string, string> {
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
async function loginInfo() {
  const env = getPayEnv();
  const userCode = storage.getItem("userCode") || code.value;
  const token = storage.getItem("token");
  const codePlateAndToken = JSON.parse(storage.getItem("codePlateAndToken"));
  const codePlateJson = codePlateAndToken[codePlate.value];
  const params: loginReq = {
    appId: codePlateJson?.appId,
    appType: env == "wx" ? 2 : 1,
    data: {
      code: userCode,
      scope: env == "wx" ? "snsapi_base" : "auth_base"
    },
    sign: codePlateJson?.sign,
    qrCodeEncodeStr: codePlate.value
  };
  if (token) {
    getParseQRCode();
    return;
  }
  const userInfoRes = await login(params);
  storage.setItem("token", userInfoRes.access_token, 60 * 60 * 24);
  storage.setItem("user_openid", userInfoRes.user_openid, 60 * 60 * 24);
  getParseQRCode();
}
async function getParseQRCode() {
  const codestr = decodeURIComponent(codePlate.value).replace(/"/g, "");
  parseQRCodeInfo.value = await parseQRCode(codestr);
}
getEnvJumpCode();
</script>

<template>
  <div>index</div>
</template>
<style lang="less" scoped></style>
