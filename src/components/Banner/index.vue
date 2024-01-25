<script setup lang="ts" name="Banner">
interface Props {
  title: string;
}
withDefaults(defineProps<Props>(), {
  title: '『 涌泉古寺 』'
});

</script>
<template>
  <div class="w-[375px] h-[200px] mb-[14px] relative">
    <template v-if="!true">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        :show-indicators="false"
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <img
        class="w-[375px] h-[37px] absolute bottom-[-2px] left-0"
        src="@/assets/images/banner_bg.png"
        alt=""
      >
    </template>
    <video
      v-else
      src="@/assets/video/test.mp4"
      poster="@/assets/images/icon_yy.png"
      class="w-[375px] h-[200px]"
      controls
      playsinline
    />
  </div>
</template>
<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 200px;
  text-align: center;
  background-color: #eee48b;
  margin-bottom: 14px;
}
</style>
