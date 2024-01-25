<script setup lang="ts" name="MeritList">
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll';
defineProps<{
  list?: Array<any>
}>();

const tableListRef = ref<HTMLElement | null>(null);
const handleScroll = () => {
  const tableList = tableListRef.value;
  if (tableList) {
    const scrollTop = tableList.scrollTop;
    const scrollHeight = tableList.scrollHeight;
    const clientHeight = tableList.clientHeight;
    if (scrollTop + clientHeight > scrollHeight / 2) {
      // 滚动条位置在整个容器的一半以下时自动回到顶部
      tableList.scrollTop = 0; // 回到顶部
    }
  }
};

</script>
<template>
  <div
    ref="tableListRef"
    class="table-list"
    @scroll="handleScroll"
  >
    <vue3-seamless-scroll
      class="table"
      :step="0.5"
      :list="list"
    >
      <table class="table">
        <tbody>
          <tr
            v-for="(item, index) in list"
            :key="index"
          >
            <th>{{ item.time }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.type }}</th>
            <th>{{ item.amt }}元</th>
          </tr>
        </tbody>
      </table>
    </vue3-seamless-scroll>
  </div>
</template>

<style lang="less" scoped>
.table-list {
  height: 172px;
  overflow: auto;
  .table {
    width: 300px;
    line-height: 30px;
    position: relative;
    z-index: 999;
  }
}
</style>
