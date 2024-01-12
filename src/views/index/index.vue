<script setup lang="ts" name="Index">
import { getPayEnv } from '@/utils/tools';
const route = useRoute();
function init() {
  const env = getPayEnv();
  if (env == 'wx') {
    // const codePlate = route.query.codePlate;
    // const appId = 'wx7cd05626d476f4cc';
    // const path = 'pages/scene/index';
    // window.location.href = `weixin://dl/business/?appid=${appId}&path=${path}&query=q=?codePlate=${codePlate}`;
    window.location.href = `https://wxaurl.cn/8AvqO5u9RTq`;
    return;
  }
  if (env == 'alipay') {
    const codePlate = route.query.codePlate;
    const appId = '2021004130628893';
    const path = 'pages/scene/index';
    const query = encodeURIComponent(`qrCode=?codePlate=${codePlate}`);
    const scheme = `alipays://platformapi/startapp?appId=${appId}&page=${path}&query=${query}`;
    window.location.href = `https://ds.alipay.com/?scheme=${encodeURIComponent(scheme)}`;
  }
}
init();
</script>
<template>
  <div>首页测试</div>
</template>
<style lang="less" scoped></style>
