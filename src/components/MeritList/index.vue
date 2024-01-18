<script setup lang="ts" name="MeritList">
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
const props = defineProps<{
  list?: Array<any>
}>();
console.log('🚀 ~ props:', props);
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
  <div class="table-list">
    <vue3-seamless-scroll
      :step="0.5"
      :list="list"
      :class-option="classOption"
      class="table"
    >
      <!-- 表格上下间距 -->

      <table
        class="table"
      >
        <tbody>
          <tr
            v-for="(item, index) in list"
            :key="index"
          >
            <th>{{ item.time }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.type }}</th>
            <th>{{ item.price }}元</th>
          </tr>
        </tbody>
      </table>
    </vue3-seamless-scroll>
  </div>
</template>

<style lang="less" scoped>
.table-list {
  height: 172px;
  overflow: hidden;

  .table {
    width: 300px;
    line-height: 30px;
  }
}
</style>
