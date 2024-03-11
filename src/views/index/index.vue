<script setup lang="ts" name="Index">
import { getPayEnv } from '@/utils/tools';
import { getSkipData } from '@/api/code';
const route = useRoute();
async function init() {
  const env = getPayEnv();
  const codePlate = route.query.codePlate;
  const path = 'pages/scene/index';
  if (env == 'wx') {
    // 密文跳转
    const url = await getSkipData(codePlate as string);
    window.location.href = url;
    // 明文跳转，目前安卓不支持
    // const appId = 'xxx';
    // window.location.href = `weixin://dl/business/?appid=${appId}&path=${path}&query=q=?codePlate=${codePlate}`;
    return;
  }
  if (env == 'alipay') {
    const appId = 'xxx';
    const query = encodeURIComponent(`qrCode=?codePlate=${codePlate}`);
    const scheme = `alipays://platformapi/startapp?appId=${appId}&page=${path}&query=${query}`;
    window.location.href = `https://ds.alipay.com/?scheme=${encodeURIComponent(scheme)}`;
  }
}
init();
</script>
<style lang="less" scoped></style>
