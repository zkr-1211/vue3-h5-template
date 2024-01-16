<script setup lang="ts" name="Index">
import { getPayEnv } from '@/utils/tools';
import { html } from './html';
const route = useRoute();
// const htmlString = ref(route.query.html);
const htmlString = ref(html);
// console.log('🚀 ~ htmlString:', htmlString.value);
function init() {
  const env = getPayEnv();

  // window.location.href = `https://wap.dev.psbc.com/mobilebank/CashierDeskChoosePayType.do?version=html5&OrderNum=IKVhJuNxkOv1FvxdiCLPvPU+OsJzO6gC+/EzjmXLRjU=&instType=-1#`;
  if (env == 'wx') {
    // const codePlate = route.query.codePlate;
    // const appId = 'wx7cd05626d476f4cc';
    // const path = 'pages/scene/index';
    // window.location.href = `weixin://dl/business/?appid=${appId}&path=${path}&query=q=?codePlate=${codePlate}`;
    // window.location.href = `https://wxaurl.cn/8AvqO5u9RTq`;
    // window.location.href = `https://wap.dev.psbc.com/mobilebank/CashierDeskChoosePayType.do?version=html5&OrderNum=IKVhJuNxkOv1FvxdiCLPvPU+OsJzO6gC+/EzjmXLRjU=&instType=-1#`;
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
// init();
const submitForm = () => {
  const formDom = document.getElementById('form') as HTMLFormElement;
  if (!formDom) {
    console.error('未找到表单元素');
  }
  // console.log('🚀 ~ submitForm ~ submitForm:');
  // window.location.href = `http://wap.dev.psbc.com/mobilebank/CashierDeskChoosePayType.do?version=html5&OrderNum=IKVhJuNxkOv1FvxdiCLPvPU+OsJzO6gC+/EzjmXLRjU=&instType=-1#`;
  formDom.submit();
};
onMounted(() => {
  // submitForm();
  // 获取表单元素
  // 获取表单元素
  const form = document.querySelector('#form') as HTMLFormElement;

  // 构造表单数据
  const formData = new FormData(form);
  let formBody = {};
  // 添加表单字段
  for (const [name, value] of formData) {
    // 添加表单字段 key value 形式的对象 如{name: value, age:123}
    formBody = {
      ...formBody,
      [name]: value
    };
  }
  // 发起异步请求
  console.log('🚀 ~ onMounted ~ form:', form.action, form.method, formBody);
  fetch(form.action, {
    method: form.method,
    body: formData
  })
    .then((response) => {
      console.log('🚀 ~ .then ~ response:', response);
      // 处理响应
    })
    .catch((error) => {
      // 处理错误
      console.error('提交失败', error);
    });
});
</script>
<template>
  <div>123</div>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="htmlString" />
</template>
<style lang="less" scoped></style>
