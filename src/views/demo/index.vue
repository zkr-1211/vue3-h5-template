<script setup lang="ts" name="Demo">
import { reactive } from "vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
const contentList = reactive([
  "✔ ⚡ Vue3 + Vite4",
  "✔ 🍕 TypeScript",
  "✔ ✨ Vant4 组件库",
  "✔ 🌀 Tailwindcss 原子类框架",
  "✔ 🍍 Pinia 状态管理",
  "✔ 🌓 支持深色模式",
  "✔ Vue-router 4",
  "✔ 支持 SVG 图标自动注册组件",
  "✔ vw 视口适配",
  "✔ Axios 封装",
  "✔ 打包资源 gzip 压缩",
  "✔ 开发环境支持 Mock 数据",
  "✔ ESLint",
  "✔ 首屏加载动画",
  "✔ 开发环境调试面板"
]);
const classOption = ref({
  step: 0.5, // 数值越大速度滚动越快
  limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
  hoverStop: true, // 是否开启鼠标悬停stop
  direction: 1, // 0向下 1向上 2向左 3向右
  openWatch: false, // 开启数据实时监控刷新dom
  singleHeight: 1, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
  singleWidth: 1, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
  waitTime: 2000
});
</script>

<template>
  <div class="demo-content px-[12px]">
    <div class="table1">
      <vue3-seamless-scroll
        :step="0.5"
        :list="contentList"
        :class-option="classOption"
        class="table"
      >
        <table class="w-full" cellpadding="5px">
          <tbody>
            <tr v-for="(item, index) in contentList" :key="index">
              <th>{{ item }}</th>
            </tr>
          </tbody>
        </table>
      </vue3-seamless-scroll>
    </div>
    <img
      class="block w-[120px] mx-auto mb-[20px] pt-[30px]"
      alt="Vue logo"
      src="~@/assets/logo_melomini.png"
    />
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883]">
      <a
        class="flex items-center"
        href="https://github.com/yulimchen/vue3-h5-template"
        target="_blank"
      >
        <svg-icon class="text-[20px] mr-[8px]" name="github" />
        <h3 class="font-bold text-[18px] my-[4px]">Vue3-h5-template</h3>
        <svg-icon class="text-[12px] ml-[5px]" name="link" />
      </a>
    </div>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5
        移动端项目基础模板
      </p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.table1 {
  height: 150px;
  overflow: hidden;
  background-color: rgb(197, 157, 157);
}
</style>
