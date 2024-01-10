<script setup lang="ts" name="Demo">
import { reactive } from 'vue';
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
import { getPayEnv } from '@/utils/tools';
const contentList = reactive([
  '✔ ⚡ Vue3 + Vite4',
  '✔ 🍕 TypeScript',
  '✔ ✨ Vant4 组件库',
  '✔ 🌀 Tailwindcss 原子类框架',
  '✔ 🍍 Pinia 状态管理',
  '✔ 🌓 支持深色模式',
  '✔ Vue-router 4',
  '✔ 支持 SVG 图标自动注册组件',
  '✔ vw 视口适配',
  '✔ Axios 封装',
  '✔ 打包资源 gzip 压缩',
  '✔ 开发环境支持 Mock 数据',
  '✔ ESLint',
  '✔ 首屏加载动画',
  '✔ 开发环境调试面板'
]);
let demo = reactive({
  name: 'Demo',
  value: '123'
});
const classOption = ref({
  step: 0.5, // 数值越大速度滚动越快
  limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
  hoverStop: true, // 是否开启鼠标悬停stop
  direction: 1, // 0向下 1向上 2向左 3向右
  openWatch: false, // 开启数据实时监控刷新dom
  singleHeight: 1, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
  singleWidth: 1, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
  waitTime: 2000
});
const audio = ref<HTMLAudioElement>(new Audio('https://scene-star.obs.cn-east-3.myhuaweicloud.com:443/3fabf853-8932-4a66-93e8-c362056ca301.mp3'));
const isPlay = ref(false);
const rotate = ref(false);
const scale = {
  name: '重置',
  value: '12322222'
};
function playVoice() {
  demo['name'] = '赋值';
  audio.value.play();
  rotate.value = true;
}
function stopPlay() {
  demo = scale;
  audio.value.pause();
  rotate.value = false;
}
onMounted(() => {
  audio.value.addEventListener('ended', handleAudioEnded);
});
// 监听音频播放结束事件
const handleAudioEnded = () => {
  // 在播放结束后重新播放
  audio.value.currentTime = 0; // 重置播放时间
  audio.value.play();
};
function musicInWeixinHandler() {
  document.addEventListener('touchstart', function() {
    const env = getPayEnv();
    if (!isPlay.value) {
      if (env == 'wx') {
        playVoice();
        isPlay.value = true;
      }
    }
  });

  document.addEventListener(
    'AlipayJSBridgeReady',
    function evt() {
      playVoice();
      document.removeEventListener('AlipayJSBridgeReady', evt, false);
    },
    false
  );
}
musicInWeixinHandler();
</script>

<template>
  <div class="demo-content px-[12px]">
    {{ JSON.stringify(demo) }}
    <input
      v-model="demo.name"
      type="text"
    >
    <!-- <div class="table1">
      <vue3-seamless-scroll
        :step="0.5"
        :list="contentList"
        :class-option="classOption"
        class="table"
      >
        <table
          class="w-full"
          cellpadding="5px"
        >
          <tbody>
            <tr
              v-for="(item, index) in contentList"
              :key="index"
            >
              <th>{{ item }}</th>
            </tr>
          </tbody>
        </table>
      </vue3-seamless-scroll>
    </div> -->

    <img
      class="block w-[120px] mx-auto mb-[20px] pt-[30px]"
      alt="Vue logo"
      src="~@/assets/logo_melomini.png"
    >

    <div class="pl-[12px] border-l-[3px] border-[color:#41b883]">
      <a
        class="flex items-center"
        target="_blank"
      >
        <svg-icon
          name="github"
          :class="{ run: rotate}"
          @click="stopPlay"
        />

        <h3
          class="font-bold text-[18px] my-[4px]"
          @click="playVoice"
        >template</h3>

        <svg-icon
          class="text-[12px] ml-[5px]"
          name="link"
        />
      </a>
    </div>

    <!-- <div class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]">
      <p class="aaa">
        🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5 移动端项目基础模板
      </p>
    </div> -->

    <!-- <div class="demo-main">
      <van-cell
        v-for="(item, idx) in contentList"
        :key="idx"
        :title="item"
      />
    </div> -->
  </div>
</template>

<style lang="less" scoped>
.table1 {
  height: 150px;
  overflow: hidden;
  background-color: rgb(197, 157, 157);
}

  /*
  turn : 定义的动画名称
  1s : 动画时间
  linear : 动画以何种运行轨迹完成一个周期
  infinite :规定动画应该无限次播放
*/

.run {
    animation: rotate 1.5s linear infinite;
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
    }

    25% {
      -webkit-transform: rotate(90deg);
    }

    50% {
      -webkit-transform: rotate(180deg);
    }

    75% {
      -webkit-transform: rotate(270deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
