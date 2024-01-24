<script setup lang="ts" name="AutoScroll">
interface Props {
  scrollSpeed: number;
}
const props = defineProps<Props>();
const scrollContainer = ref<HTMLElement | null>(null);
const scrollY = ref(0);
let animationFrameId: number | null = null;

const handleScroll = () => {
  scrollY.value = scrollContainer.value!.scrollTop;
};

const startAutoScroll = () => {
  stopAutoScroll();
  let lastFrameTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const timeDiff = currentTime - lastFrameTime;
    const newY = scrollY.value + timeDiff * (props.scrollSpeed / 1000); // 根据时间差计算滚动距离
    scrollY.value = newY >= scrollContainer.value!.scrollHeight - scrollContainer.value!.clientHeight ? 0 : newY;
    scrollContainer.value!.scrollTop = scrollY.value;
    lastFrameTime = currentTime;
    animationFrameId = requestAnimationFrame(animateScroll);
  };

  animationFrameId = requestAnimationFrame(animateScroll);
};

const stopAutoScroll = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
};

onMounted(() => {
  scrollContainer.value!.addEventListener('scroll', handleScroll);
  setTimeout(() => {
    startAutoScroll();
  }, 500); // 1秒后开始自动滚动
});

onBeforeUnmount(() => {
  // 停止自动滚动动画
  stopAutoScroll();
  // 移除滚动事件监听器
  scrollContainer.value!.removeEventListener('scroll', handleScroll);
});

const handleTouchStart = () => {
  // 手指触摸开始
  if (scrollContainer.value) {
    scrollContainer.value.style.overflow = 'auto'; // 显示滚动条
    scrollContainer.value.style.scrollBehavior = 'auto'; // 启动平滑
  }
};

const handleTouchEnd = () => {
  // 手指触摸结束
  if (scrollContainer.value) {
    scrollContainer.value.style.overflow = 'hidden'; // 隐藏滚动条
    scrollContainer.value.style.scrollBehavior = 'smooth'; // 启动平滑
  }
};

const handleMouseDown = () => {
  // 鼠标按下
  if (scrollContainer.value) {
    scrollContainer.value.style.overflow = 'auto'; // 显示滚动条
    scrollContainer.value.style.scrollBehavior = 'auto'; // 启动平滑
  }
};

const handleMouseUp = () => {
  // 鼠标抬起
  if (scrollContainer.value) {
    scrollContainer.value.style.overflow = 'hidden'; // 隐藏滚动条
    scrollContainer.value.style.scrollBehavior = 'smooth'; // 启动平滑
  }
};
</script>
<template>
  <div
    ref="scrollContainer"
    class="scroll-container"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <div
      id="scroll-content"
      class="scroll-content"
      :style="{ transform: `translateY(${-scrollY}px)` }"
    >
      <slot />
    </div>
  </div>
</template>
<style>
.scroll-container {
  position: relative;
  overflow: hidden;
  height: 200px;
  scroll-behavior: smooth; /* 启用全局的平滑滚动效果 */
}
.scroll-content {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
}
.item {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #cccccc;
  text-align: center;
}
</style>
