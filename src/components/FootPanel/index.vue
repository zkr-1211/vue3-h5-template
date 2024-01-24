<script setup lang="ts" name="FootPanel">
interface Props {
  title: string;
}
withDefaults(defineProps<Props>(), {
  title: '『 涌泉古寺 』'
});
</script>
<template>
  <div class="foot">
    <div class="left">
      已有0人捐款
    </div>
    <div class="right">
      <span>
        我的功德
      </span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.foot {
  width: 375px;
  height: 60px;
  font-size: 16px;
  background: #F5F4F1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 0 22px;
  z-index: 999;

  .left {
    font-size: 16px;
    font-weight: 700;
    color: #6D3625;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    color: #6D3625;
    background-image: url('@/assets/images/btn.png');
    background-size: 100% 100%;
    width: 146px;
    height: 50px;

    span {
      font-weight: 700;
      background: linear-gradient(130deg, #EEDD85 0%, #FEF6B3 53%, #D9B25B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
