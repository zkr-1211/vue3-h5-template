<template>
  <div>
    <div class="donation">
      <template v-if="list && list.length > 0">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="choose-item"
        >
          <div :style="{ 'font-size': toChine(item).length >= 10 ? '12px' : '14px' }">
            {{ toChine(item) }}
          </div>
          <div>{{ item }}</div>
        </div>
      </template>

      <template v-if="true">
        <div class="choose-item">
          随喜金额
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts" name="Donation">
import { useToChinese } from '@/utils/toChinese';
interface Props {
  list: number[];
}
withDefaults(defineProps<Props>(), {
  list: () => [1, 2, 3, 4]
});
const toChine = computed(() => {
  return (item: number) => {
    return useToChinese(item);
  };
});
</script>

<style lang="less" scoped>
.donation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 6px;
  grid-row-gap: 8px;

  .choose-item {
    width: 154px;
    height: 53px;
    z-index: 5;
    color: #651E0C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F0E7D8;
    border: 1px solid #966B60;
  }
}
</style>
