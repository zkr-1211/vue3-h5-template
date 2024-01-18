<script setup lang="ts" name="DescText">
const props = defineProps<{
  content?: string
}>();
const rows = ref(2);
const vanTextRef = ref('');
const toggleRows = () => {
  rows.value = rows.value === 2 ? 12 : 2;
  console.log('🚀 ~ toggleRows ~ vanTextRef.value:', vanTextRef.value);
};
// 监听内容变化，判断是否需要显示展开和收起功能

</script>
<template>
  <van-text-ellipsis
    ref="vanTextRef"
    :rows="rows"
    :content="props.content"
    expand-text="展开更多"
    collapse-text="收起更多"
    position="end"
  />
  <div
    class="text-center"
    @click="toggleRows"
  >
    {{ rows === 2 ? '展开更多' : '收起更多' }}
  </div>
</template>

<style lang="less" scoped></style>
