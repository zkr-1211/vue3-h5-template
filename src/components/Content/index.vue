<script setup lang="ts" name="Content">
interface Props {
  title: string;
}
withDefaults(defineProps<Props>(), {
  title: '『 涌泉古寺 』'
});

</script>
<template>
  <div class="content">
    <div class="content-title">
      <div class="title">
        『 {{ title }} 』
      </div>
    </div>
    <div class="content-text">
      <slot />
    </div>
    <img
      class="content-bg left-0"
      src="@/assets/images/left_btbg.png"
      alt=""
    >
    <img
      class="content-bg right-0"
      src="@/assets/images/right_btbg.png"
      alt=""
    >
  </div>
</template>

<style lang="less" scoped>
.content {
  width: 343px;
  background: #999493;
  margin: 0 auto 12px;
  position: relative;

  .content-title {
    background-image: url('@/assets/images/title_bg.png');
    background-size: 100% 100%;
    height: 50px;
    width: 343px;
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 18px;
      font-weight: 700;
      background: linear-gradient(130deg, #EEDD85 0%, #FEF6B3 53%, #D9B25B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .content-text {
    font-size: 14px;
    padding: 12px 15px 20px;
    font-weight: 600;
    color: #651E0C;
    background-color: #F7F5EF;
  }

  .content-bg {
    width: 42px;
    height: 42px;
    position: absolute;
    bottom: 0;
  }

}
</style>
