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
        {{ title }}
      </div>
    </div>
    <div class="content-text">
      <!-- <slot name="content" /> -->
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  width: 343px;
  background: #999493;
  margin: 0 auto 12px;

  .content-title {
    height: 50px;
    width: 343px;
    background: linear-gradient(180deg, #9D2928 0%, #601D09 84%);
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

}
</style>
