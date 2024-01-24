<script setup lang="ts" name="Banner">
interface Props {
  title: string;
}
withDefaults(defineProps<Props>(), {
  title: '『 涌泉古寺 』'
});
</script>
<template>
  <div class="w-[375px] relative">
    <slot />
    <img
      class="w-[375px] h-[37px] absolute bottom-[10px] left-0"
      src="@/assets/images/banner_bg.png"
      alt=""
    >
  </div>
</template>
<style lang="less" scoped>
</style>
