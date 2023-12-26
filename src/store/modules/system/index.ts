import { defineStore } from 'pinia'
import { getPayChannel, getPayState, getOrderState } from '@/api/dict'
import type { DictType } from '@/api/dict/type'
import type { DictProps } from './types'
export const useDictStore = defineStore('dict', {
  state: (): DictProps => ({
    payChannel: {} as DictType,
    payState: {} as DictType,
    orderState: {} as DictType
  }),

  getters: {
    getPayChannel(): DictType {
      return this.payChannel
    },
    getPayState(): DictType {
      return this.payState
    },
    getOrderState(): DictType {
      return this.orderState
    }
  },

  actions: {
    async reqPayChannel() {
      const res = await getPayChannel()
      this.payChannel = res
    },
    async reqPayState() {
      const res = await getPayState()
      this.payState = res
    },
    async reqOrderState() {
      const res = await getOrderState()
      this.orderState = res
    }
  }
})

export default useDictStore
