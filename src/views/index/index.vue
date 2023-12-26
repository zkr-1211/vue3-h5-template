<script setup lang="ts" name="Index">
import { preLogin } from '@/api/code';
import type { PreLoginReq } from '@/api/code/type';
import { getPayEnv, getUrlCode } from '@/utils/tools';
import { storage } from '@/utils/storage';
import { showFailToast } from 'vant';
// import router from "@/router";
// const route = useRoute();
async function init() {
  removeStores();
  const { codePlate } = getUrlCode();
  if (!codePlate) {
    showFailToast('未找到码牌信息，请重新扫码');
    return;
  }
  storage.setItem('codePlate', codePlate);
  const env = getPayEnv();
  const params: PreLoginReq = {
    appType: env == 'wx' ? 2 : 1,
    qrCodeEncodeStr: codePlate || 'TjBKQlpwUVpybHhsZUxwWERVcUYyZz09'
  };
  const preLoginData = await preLogin(params);
  storage.setItem('codePlateJson', JSON.stringify(preLoginData));
  const local = `${window.location.protocol}//${window.location.host}/retail/#/temple`;
  if (env == 'wx') {
    getWechatCode(preLoginData.id, local);
  }
  if (env == 'alipay') {
    getAliCode(preLoginData.id, local);
  }
}
// 去处理微信code
function getWechatCode(appid: string, local: string) {
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(
    local
  )}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
}
// 去处理支付宝code
function getAliCode(appid: string, local: string) {
  window.location.href = `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=${appid}&redirect_uri=${encodeURIComponent(
    local
  )}&scope=auth_base `;
}
// 删除缓存
function removeStores() {
  storage.removeItem('token');
  storage.removeItem('userCode');
  storage.removeItem('userOpenid');
}
init();
</script>

<template>
  <div>index</div>
</template>

<style lang="less" scoped></style>
