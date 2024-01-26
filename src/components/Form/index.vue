<script setup lang="ts" name="FootPanel">
interface FormData {
  name?: string;
  require?: boolean;
  label?: string;
  hide?: boolean;
  value?: any;
  length?: number;
  inline?: boolean;
  list?: Array<any>;
}
interface Props {
  data: {
    [key: string]: FormData;
  };
  type: number;
}
const props = defineProps<Props>();
const data = ref(props.data);
const pattern = ref(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/);
// const resetFields = ['cop-donaName', 'cop-donaPhone', 'cop-amt', 'cop-time'];
// resetFields.forEach(field => {
//   data.value[field].value = undefined;
// });
// 供灯
const formLight = ref({
  time: '',
  amt: '',
  phone: '',
  wish: ''
});
// 捐款
const form = ref({
  name: '',

  type: '',
  time: '',
  amt: '',

  phone: '',
  wish: ''
});
// 打开选择时长
const showSelectTime = ref(false);
const isFirstOpen = ref(true);
const showSelectTimeFn = () => {
  showSelectTime.value = true;
  if (isFirstOpen.value) {
    const list = data.value['cop-donaDuration'].list!;
    list.forEach(item => { item['text'] = item['value']; });
    list.push({ text: '自定义' });
    isFirstOpen.value = false;
  }
};
// 打开选择类型
const showSelectType = ref(false);
const showSelectTypeFn = () => {
  showSelectType.value = true;
  if (isFirstOpen.value) {
    const list = data.value['cop-donaType'].list!;
    list.forEach(item => { item['text'] = item['value']; });
    isFirstOpen.value = false;
  }
};
// 确定选择类型
const onTypeConfirm = ({ selectedOptions }: any) => {
  console.log('🚀 ~ onTypeConfirm ~ selectedOptions:', selectedOptions);
  showSelectType.value = false;
};
// 是否自定义时长
const isCustomTime = ref(false);
// 确定选择时长
const onTimeConfirm = ({ selectedOptions }: any) => {
  isCustomTime.value = selectedOptions[0].text === '自定义';
  showSelectTime.value = false;
};
const wishIndex = ref(0);
const isChangeWish = ref(false);
// 更换祈福
const changeWish = () => {
  isChangeWish.value = true;
  setTimeout(() => {
    isChangeWish.value = false;
  }, 500);
  if (data.value['cop-donaWish'].list!.length > wishIndex.value + 1) {
    wishIndex.value++;
  } else {
    wishIndex.value = 0;
  }
};
// 提交
const onSubmit = () => {
  console.log('111');
};

</script>
<template>
  <div class="pop">
    <div class="title">
      『 供奉信息 』
    </div>
    <van-form @submit="onSubmit">
      <!-- 供灯模式 -->
      <template v-if="type === 1">
        <!-- 供奉时长 -->
        <div
          class="input-item"
          @click="showSelectTimeFn"
        >
          <div>供奉时长</div>
          <div class="flex items-center">
            <div class="mr-[6px]">
              1
            </div>
            <img
              class="w-[16px] h-[16px]"
              src="@/assets/images/icon_down.png"
              alt=""
            >
          </div>
        </div>
        <!-- 填写时长 -->
        <div
          v-if="isCustomTime"
          class="input-item"
        >
          <!-- <div>填写时长</div> -->
          <div class="flex items-center">
            <div class="mr-[6px]">
              <van-field
                v-model="data['cop-time'].value"
                label="填写时长"
                input-align="right"
                placeholder="请填写时长"
              />
            </div>
            <div class="">
              天
            </div>
          </div>
        </div>
        <!-- 功德金额 -->
        <div class="input-item">
          <div class="flex items-center">
            <div class="mr-[6px]">
              <van-field
                disabled
                label="功德金额"
                input-align="right"
                placeholder="0"
              />
            </div>
            <div class="">
              元
            </div>
          </div>
        </div>
      </template>
      <!-- 捐款模式 -->
      <template v-else>
        <!-- 捐赠类型 -->
        <div
          v-if="data['cop-donaName'].hide"
          class="input-item"
          @click="showSelectTypeFn"
        >
          <div>捐赠类型</div>
          <div class="flex items-center">
            <div class="mr-[6px]">
              类型1
            </div>
            <img
              class="w-[16px] h-[16px]"
              src="@/assets/images/icon_down.png"
              alt=""
            >
          </div>
          <!-- <van-stepper
          v-model.number="data['cop-amt'].value"
          :decimal-length="2"
          :min="0.01"
          :max="99999.99"
          :show-plus="false"
          :show-minus="false"
        /> -->
        </div>
        <!-- 祈福姓名 -->
        <div
          v-if="data['cop-donaName'].hide"
          class="input-item"
        >
          <div class="flex items-center">
            <div class="mr-[6px]">
              <van-field
                v-model="data['cop-donaName'].value"
                label="祈福姓名"
                :required="data['cop-donaName'].require"
                input-align="right"
                placeholder="不填, 默认匿名"
                :length="data['cop-donaName'].length || 10"
                :rules="[{ required: data['cop-donaName'].require, message: '请输入祈福姓名' }]"
              />
            </div>
          </div>
        </div>
      </template>

      <!-- 手机号码 -->
      <div
        v-if="data['cop-donaPhone'].hide"
        class="input-item"
      >
        <div class="flex items-center">
          <div class="mr-[6px]">
            <van-field
              v-model="data['cop-donaPhone'].value"
              input-align="right"
              placeholder="可不填"
              type="tel"
              :required="data['cop-donaPhone'].require"
              :label="data['cop-donaPhone'].label"
              :length="data['cop-donaPhone'].length || 11"
              :rules="data['cop-donaPhone'].require || data['cop-donaPhone'].value ? [{ pattern, message: '请输入正确手机号' }] : []"
            />
          </div>
        </div>
      </div>

      <!-- 祈福心愿 -->
      <div
        v-if="data['cop-donaWish'].hide"
        class="input-item"
      >
        <div>祈福心愿</div>
        <div class="flex items-center">
          <div class="mr-[6px]">
            {{ data['cop-donaWish'].list![wishIndex].value }}
          </div>
          <div
            class="flex items-center"
            @click="changeWish"
          >
            <img
              :class="[isChangeWish ? 'wishImg' : '', 'w-[12px] h-[12px] mr-[3px]']"
              src="@/assets/images/icon_sx.png"
              alt=""
            >
            更换
          </div>
        </div>
      </div>
      <div class="btn">
        <van-button
          class="vanbtn"
          round
          block
          native-type="submit"
        />
        <span>
          立即捐赠(￥12)
        </span>
      </div>
    </van-form>
    <teleport to="body">
      <van-popup
        v-model:show="showSelectType"
        round
        position="bottom"
      >
        <van-picker
          :columns="data['cop-donaType'].list"
          @cancel="showSelectType = false"
          @confirm="onTypeConfirm"
        />
      </van-popup>
      <van-popup
        v-model:show="showSelectTime"
        round
        position="bottom"
      >
        <van-picker
          :columns="data['cop-donaDuration'].list"
          @cancel="showSelectTime = false"
          @confirm="onTimeConfirm"
        />
      </van-popup>
    </teleport>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>
