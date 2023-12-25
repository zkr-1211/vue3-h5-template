<script setup lang="ts" name="Temple">
import { login, parseQRCode } from "@/api/code";
import type { preLoginRes, loginReq, parseQRCodeRes } from "@/api/code/type";
import { getPayEnv, getUrlCode, getQueryParams } from "@/utils/tools";
import setPageTitle from "@/utils/set-page-title";
import { storage } from "@/utils/storage";
const router = useRouter();
const codePlate = ref("");
let parseQRCodeInfo: parseQRCodeRes = reactive({
  codePlate: {
    appType: "",
    cpId: 0,
    cpName: "",
    cpState: 0,
    cpUrl: "",
    decorateJson: "",
    endDate: "",
    startDate: "",
    orderButton: "",
    version: ""
  },
  lifecycle: ""
});
function getEnvJumpCode() {
  const env = getPayEnv();
  let code = "";
  if (env == "wx") {
    code = getUrlCode().code;
  }
  if (env == "alipay") {
    code = getQueryParams().auth_code;
  }
  codePlate.value = storage.getItem("codePlate") || "";
  if (codePlate.value && code) {
    storage.setItem("userCode", code);
    loginInfo(code);
  }
}
async function loginInfo(code: string) {
  const token = storage.getItem("token");
  if (token) {
    getParseQRCode();
    return;
  }
  const env = getPayEnv();
  const codePlateJson: preLoginRes = JSON.parse(storage.getItem("codePlateJson") as string);
  const params: loginReq = {
    appId: codePlateJson?.id,
    appType: env == "wx" ? 2 : 1,
    data: {
      code,
      scope: env == "wx" ? "snsapi_base" : "auth_base"
    },
    sign: codePlateJson?.sign,
    qrCodeEncodeStr: codePlate.value
  };
  const userInfoRes = await login(params);
  storage.setItem("token", userInfoRes.access_token);
  storage.setItem("userOpenid", userInfoRes.user_openid);
  getParseQRCode();
}
async function getParseQRCode() {
  const codestr = decodeURIComponent(codePlate.value).replace(/"/g, "");
  parseQRCodeInfo = await parseQRCode(codestr);
  setPageTitle(parseQRCodeInfo.codePlate.cpName);
}
function toTemple() {
  router.replace({
    path: "/index",
    params: { codePlate: storage.getItem("codePlate") || "" }
  });
}
getEnvJumpCode();
</script>

<template>
  <div @click="toTemple">temple</div>
</template>
<style lang="less" scoped></style>
