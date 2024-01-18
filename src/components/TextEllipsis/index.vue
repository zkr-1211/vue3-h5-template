<script setup lang="ts">
const props = defineProps<{
  content?: string
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
      <div
        v-if="desTextRows > 2"
        class="toggle text-center"
        @click.prevent="toggleShow"
      >
        {{ desShowAll ? '收起更多' : '展开更多' }}
      </div>
    </div>
  </van-row>
</template>
<style lang="less" scoped>
.roadshowDescValueDiv {
  position: relative;

  .desContent {
    position: relative;
    font-size: 15px;
    line-height: 24px;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .show-all {
    -webkit-line-clamp: unset;
  }

  .toggle {
    margin-top: 10px;
    line-height: 18px;
  }
}
</style>
