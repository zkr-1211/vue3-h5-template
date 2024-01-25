<template>
  <div>
    <div class="lightLamp">
      <template v-if="list && list.length > 0">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="choose-item"
          @click="toDonation(item)"
        >
          <div :style="{ 'font-size': toChine(item).length >= 10 ? '13px' : '15px' }">
            <img
              class="w-[65px] h-[53px]"
              src="@/assets/images/icon_light.png"
              mode="scaleToFill"
            >
          </div>
          <div>事业灯</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts" name="LightLamp">
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
const emit = defineEmits(['donation']);
const toDonation = (item: any) => {
  emit('donation', item);
};
</script>

<style lang="less" scoped>
.lightLamp {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 10px;

  .choose-item {
    z-index: 5;
    color: #651E0C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
