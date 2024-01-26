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
import Form from '@/components/Form/index.vue';
import obj from './test';
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

const dataObj = ref(obj);
setPageTitle(dataObj.value.templateContent['cop-title'].value);

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
for (let i = 0; i < 100; i++) {
  list.value.push({
    time: '2022-12-12',
    name: '涌泉寺',
    type: '寺庙灯',
    price: 100
  });
}

const show = ref(true);
const toDonation = (item: any) => {
  show.value = true;
};
</script>
<template>
  <div class="container">
    <Audio :data="dataObj.templateContent['cop-bgm'].value" />
    <Banner />
    <Content :title="dataObj.templateContent['cop-title'].value">
      <TextEllipsis :content="dataObj.templateContent['cop-blurb'].value" />
    </Content>
    <Content :title="dataObj.templateContent['cop-donaType'].title">
      <Donation :list="dataObj.templateContent['cop-donaType'].value" />
    </Content>
    <Content :title="dataObj.templateContent['cop-donaType'].title">
      <LightLamp
        :list="dataObj.templateContent['cop-donaType'].value"
        @donation="toDonation"
      />
    </Content>
    <Content :title="dataObj.templateContent['cop-merit'].title">
      <MeritList :list="dataObj.templateContent['cop-merit'].value" />
    </Content>
    <div class="h-[60px]" />
    <FootPanel />
    <van-popup
      v-model:show="show"
      :style="{ padding: '20px', background: '#F5F4F1', 'border-radius': '7px' }"
    >
      <Form
        :data="dataObj.templateContent['cop-submit']"
        :type="dataObj.templateSkin"
      />
    </van-popup>
  </div>
</template>
<style lang="less" scoped>
.container {
  height: 100vh;
  overflow: auto;
  background-color: #f0e7d8;
}
</style>
