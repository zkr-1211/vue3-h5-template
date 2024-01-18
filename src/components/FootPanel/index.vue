<script setup lang="ts" name="FootPanel">
interface Props {
  title: string;
}
withDefaults(defineProps<Props>(), {
  title: '『 涌泉古寺 』'
});
</script>
<template>
  <div class="container1">
    <div class="left">
      已有0人捐款
    </div>
    <div class="right">
      我的功德
    </div>
  </div>
</template>

<style lang="less" scoped>
.container1 {
  width: 375px;
  height: 60px;
  font-size: 16px;
  background: #F7F5EF;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
}
</style>
