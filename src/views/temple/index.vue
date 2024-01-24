<script setup lang="ts" name="Temple">
import { login, parseQRCode } from '@/api/code';
import type { PreLoginRes, LoginReq, ParseQRCodeRes } from '@/api/code/type';
import { getPayEnv, getUrlCode, getQueryParams } from '@/utils/tools';
import setPageTitle from '@/utils/set-page-title';
import { storage } from '@/utils/storage';
import { useDictStore } from '@/store';
import { useRouter } from 'vue-router';
import Content from '@/components/Content/index.vue';
import Banner from '@/components/Banner/index.vue';
import MeritList from '@/components/MeritList/index.vue';
import TextEllipsis from '@/components/TextEllipsis/index.vue';
import FootPanel from '@/components/FootPanel/index.vue';
import Audio from '@/components/Audio/index.vue';
import Donation from '@/components/Donation/index.vue';
import LightLamp from '@/components/LightLamp/index.vue';

const dictStore = useDictStore();
const router = useRouter();
const codePlate = ref('');
let parseQRCodeInfo: ParseQRCodeRes = reactive({
  codePlate: {
    appType: '',
    cpId: 0,
    cpName: '',
    cpState: 0,
    cpUrl: '',
    decorateJson: '',
    endDate: '',
    startDate: '',
    orderButton: '',
    version: ''
  },
  lifecycle: ''
});
async function getParseQRCode() {
  const codestr = decodeURIComponent(codePlate.value).replace(/"/g, '');
  parseQRCodeInfo = await parseQRCode(codestr);
  setPageTitle(parseQRCodeInfo.codePlate.cpName);
}
async function loginInfo(code: string) {
  const token = storage.getItem('token');
  if (token) {
    getParseQRCode();
    return;
  }
  const env = getPayEnv();
  const codePlateJson: PreLoginRes = JSON.parse(storage.getItem('codePlateJson') as string);
  const params: LoginReq = {
    appId: codePlateJson?.id,
    appType: env === 'wx' ? 2 : 1,
    data: {
      code,
      scope: env === 'wx' ? 'snsapi_base' : 'auth_base'
    },
    sign: codePlateJson?.sign,
    qrCodeEncodeStr: codePlate.value
  };
  const userInfoRes = await login(params);
  storage.setItem('token', userInfoRes.access_token);
  storage.setItem('userOpenid', userInfoRes.user_openid);
  dictStore.reqPayChannel();
  dictStore.reqPayState();
  dictStore.reqOrderState();
  console.log('🚀 ~ file: index.vue:65 ~ loginInfo ~ dictStore:', dictStore);
  getParseQRCode();
}
function getEnvJumpCode() {
  const env = getPayEnv();
  let code = '';
  if (env === 'wx') {
    code = getUrlCode().code;
  }
  if (env === 'alipay') {
    code = getQueryParams().auth_code;
  }
  codePlate.value = storage.getItem('codePlate') || '';
  if (codePlate.value && code) {
    storage.setItem('userCode', code);
    loginInfo(code);
  }
}

getEnvJumpCode();

interface ListProps {
  time: string;
  name: string;
  type: string;
  price: number;
}
const list = ref<ListProps[]>([]);
for (let i = 0; i < 20; i++) {
  list.value.push({
    time: '2022-12-12',
    name: '涌泉寺',
    type: '寺庙灯',
    price: 100
  });
}

const DonationList = ref([10000, 99999.99, 3, 4]);
</script>
<template>
  <div class="container">
    <Audio />
    <Banner>
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        :show-indicators="false"
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </Banner>
    <Content title="『 涌泉古寺 』">
      <TextEllipsis
        title="『 涌泉古寺 』"
        content="涌泉寺为闽刹之冠，是全国重点寺庙之一。寺院建在海拔455米的鼓山山腰，占地约1.7公顷，前为香炉峰，后倚白云峰，有“进山不见寺进寺不见山的奇特建筑格局,涌泉寺始建于783年，初名华"
      />
    </Content>
    <Content title="『 供养功德 』">
      <Donation :list="DonationList" />
    </Content>
    <Content title="『 选择供灯 』">
      <LightLamp :list="DonationList" />
    </Content>
    <Content title="『 功德榜 』">
      <MeritList :list="list" />
    </Content>
    <div class="h-[60px]" />
    <FootPanel />
  </div>
</template>
<style lang="less" scoped>
.container {
  height: 100vh;
  overflow: auto;
  background-color: #f0e7d8;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 200px;
    text-align: center;
    background-color: #eee48b;
    margin-bottom: 14px;
  }
}
</style>
