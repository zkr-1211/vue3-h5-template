import { getPayChannel, getPayState, getOrderState } from "@/api/dict";
import type { DictType } from "@/api/dict/type";
import { defineStore } from "pinia";

const useDictStore = defineStore("dict", {
  state: () => ({
    payChannel: {} as DictType,
    payState: {} as DictType,
    orderState: {} as DictType
  }),
  actions: {
    async getPayChannel() {
      const res = await getPayChannel();
      this.payChannel = res;
    },
    async getPayState() {
      const res = await getPayState();
      this.payState = res;
    },
    async getOrderState() {
      const res = await getOrderState();
      this.orderState = res;
    }
  }
});

export default useDictStore;
