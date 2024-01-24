<script setup lang="ts" name="AutoScroll">
interface Props {
  dataList: string[];
  scrollSpeed: number;
}
const props = defineProps<Props>();
const scrollContainer = ref<HTMLElement | null>(null);
const items = ref(props.dataList);
const scrollY = ref(0);
const autoScrollInterval: NodeJS.Timeout | null = null;

const handleScroll = () => {
  scrollY.value = scrollContainer.value.scrollTop;
};

onMounted(() => {
  scrollContainer.value.addEventListener('scroll', handleScroll);
  setTimeout(() => {
    startAutoScroll();
  }, 500); // 1秒后开始自动滚动
});

onUnmounted(() => {
  scrollContainer.value.removeEventListener('scroll', handleScroll);
  stopAutoScroll();
});

const startAutoScroll = () => {
  stopAutoScroll();
  let lastFrameTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const timeDiff = currentTime - lastFrameTime;
    const newY = scrollY.value + timeDiff * (props.scrollSpeed / 1000); // 根据时间差计算滚动距离
    scrollY.value = newY >= scrollContainer.value.scrollHeight - scrollContainer.value.clientHeight ? 0 : newY;
    scrollContainer.value.scrollTop = scrollY.value;
    lastFrameTime = currentTime;
    requestAnimationFrame(animateScroll);
  };

  requestAnimationFrame(animateScroll);
};

const stopAutoScroll = () => {
  clearInterval(autoScrollInterval);
};
const handleTouchStart = () => {
  // 手指触摸开始
  if (scrollContainer.value) {
    scrollContainer.value.style.overflow = 'auto'; // 显示滚动条
  }
};

const handleTouchEnd = () => {
  // 手指触摸结束
  if (scrollContainer.value) {
    scrollContainer.value.style.overflow = 'hidden'; // 隐藏滚动条
  }
};

const handleMouseDown = () => {
  // 鼠标按下
  if (scrollContainer.value) {
    scrollContainer.value.style.overflow = 'auto'; // 显示滚动条
  }
};

const handleMouseUp = () => {
  // 鼠标抬起
  if (scrollContainer.value) {
    scrollContainer.value.style.overflow = 'hidden'; // 隐藏滚动条
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
  height: 200px;
  overflow: hidden;
  position: relative;
}

.scroll-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.item {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
</style>
