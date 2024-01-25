<script setup lang="ts">
const props = defineProps<{
  content?: string;
}>();
const desShowAll = ref(false);
const desTextRows = ref(0);

// 使用 watchEffect 监听文本变化和 showAll 变化，更新 textRows
const desContent = ref<HTMLDivElement>();
watchEffect(() => {
  if (desContent.value) {
    // 计算文本占据的行数
    const lineHeight = parseFloat(window.getComputedStyle(desContent.value).lineHeight);
    const height = desContent.value.scrollHeight;
    desTextRows.value = Math.ceil(height / lineHeight);
  }
});
const toggleShow = () => {
  desShowAll.value = !desShowAll.value;
};
</script>
<template>
  <van-row>
    <div class="roadshowDescValueDiv">
      <div
        ref="desContent"
        class="desContent"
        :class="{ 'show-all': desShowAll }"
      >
        {{ props.content }}
      </div>
      <template v-if="desTextRows > 2">
        <van-divider :style="{ color: '#DFD4CB', borderColor: '#DFD4CB'}" />
        <div
          class="mt-[10px] text-center flex align-center justify-center"
          @click.prevent="toggleShow"
        >
          <div>
            {{ desShowAll ? "收起更多" : "展开更多" }}
          </div>
          <img
            class="w-[20px] h-[20px] "
            :style="{ rotate: desShowAll ? '180deg' : '0deg' }"
            src="@/assets/images/icon_xl.png"
            mode="scaleToFill"
          >
        </div>
      </template>
    </div>
  </van-row>
</template>
<style lang="less" scoped>
.roadshowDescValueDiv {
  position: relative;

  .desContent {
    position: relative;
    line-height: 24px;
    font-size: 15px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    word-break: break-all;
    -webkit-box-orient: vertical;
    z-index: 9;
  }

  .show-all {
    -webkit-line-clamp: unset;
  }
}
</style>
