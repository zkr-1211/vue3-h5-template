<script setup lang="ts" name="Demo">
import { getPayEnv } from '@/utils/tools';
const audio = ref<HTMLAudioElement>(new Audio('https://scene-star.obs.cn-east-3.myhuaweicloud.com:443/3fabf853-8932-4a66-93e8-c362056ca301.mp3'));
const isPlay = ref(false);
const rotate = ref(false);

function playVoice() {
  audio.value.play();
  rotate.value = true;
}
function changePlay() {
  isPlay.value ? audio.value.pause() : audio.value.play();
  rotate.value = !isPlay.value;
  isPlay.value = !isPlay.value;
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
  <div class="audio">
    <svg-icon
      name="github"
      :class="{ run: rotate }"
      @click="changePlay"
    />
  </div>
</template>

<style lang="less" scoped>
.audio {
  position: fixed;
  right: 16px;
  top: 16px;
  z-index: 999;
  font-size: 35px
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
