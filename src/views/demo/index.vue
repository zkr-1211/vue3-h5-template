<script setup lang="ts" name="Demo">
import { getPayEnv } from '@/utils/tools';
const audio = ref<HTMLAudioElement>(new Audio('https://scene-star.obs.cn-east-3.myhuaweicloud.com:443/3fabf853-8932-4a66-93e8-c362056ca301.mp3'));
const isPlay = ref(false);
const rotate = ref(false);

function playVoice() {
  audio.value.play();
  rotate.value = true;
}
function stopPlay() {
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
        >Vue3-h5-template</h3>

        <svg-icon
          class="text-[12px] ml-[5px]"
          name="link"
        />
      </a>
    </div>

    <div class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]">
      <p class="aaa">
        🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5 移动端项目基础模板
      </p>
    </div>
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
