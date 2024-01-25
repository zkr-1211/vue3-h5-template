<script setup lang="ts" name="FootPanel">
interface Props {
  data: Object;
}
withDefaults(defineProps<Props>(), {
  data: () => {}
});
const form = ref({
  'name': undefined,
  'phone': undefined,
  'amt': undefined,
  'time': undefined
});
</script>
<template>
  <div class="pop">
    <div class="title">
      『 供奉信息 』
    </div>
    <!-- 供奉时长 -->
    <div class="input-item">
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
    <div class="input-item">
      <!-- <div>填写时长</div> -->
      <div class="flex items-center">
        <div class="mr-[6px]">
          <van-field
            v-model="form.time"
            label="填写时长"
            input-align="right"
            placeholder="请输入填写时长"
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
            label="功德金额"
            input-align="right"
            placeholder="请输入功德金额"
          />
        </div>
        <div class="">
          元
        </div>
      </div>
    </div>
    <!-- 捐赠金额 -->
    <div
      v-if="data['cop-donaName'].hide"
      class="input-item"
    >
      <div class="flex items-center">
        <div class="mr-[6px]">
          <van-stepper
            v-model="form.amt"
            step="2"
            :show-plus="false"
            :show-minus="false"
          />
          <van-field
            v-model="form.amt"
            :required="data['cop-donaName'].require"
            label="捐赠金额"
            type="digit"
            input-align="right"
            placeholder="请输入捐赠金额"
          />
        </div>
      </div>
    </div>
    <!-- 祈福姓名 -->
    <div
      v-if="data['cop-donaName'].hide"
      class="input-item"
    >
      <div class="flex items-center">
        <div class="mr-[6px]">
          <van-field
            v-model="form.name"
            label="祈福姓名"
            :required="data['cop-donaName'].require"
            input-align="right"
            placeholder="请输入祈福姓名"
          />
        </div>
      </div>
    </div>
    <!-- 手机号码 -->
    <div
      v-if="data['cop-donaPhone'].hide"
      class="input-item"
    >
      <div class="flex items-center">
        <div class="mr-[6px]">
          <van-field
            v-model="form.phone"
            type="tel"
            :required="data['cop-donaPhone'].require"
            label="手机号码"
            input-align="right"
            placeholder="请输入手机号码"
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
          生活如意 事业高升
        </div>
        <img
          class="w-[12px] h-[12px] mr-[3px] mt-[2px]"
          src="@/assets/images/icon_sx.png"
          alt=""
        >
        更换
      </div>
    </div>
    <div class="btn">
      <span>
        立即捐赠(￥12)
      </span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pop {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6D3625;
  font-size: 14px;

  .title {
    font-size: 18px;
    color: #6D3625;
    margin-bottom: 16px;
  }

  .input-item {
    width: 255px;
    height: 55px;
    padding: 17px 10px;
    border: 1px solid #6D3625;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ::v-deep .van-field {
    background-color: #F5F4F1;
    color: #6D3625 !important;
    padding: 0;
  }

  ::v-deep .van-field__label {
    color: #6D3625;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('@/assets/images/btn_long.png');
    background-size: 100% 100%;
    width: 261px;
    height: 50px;
    span {
      font-size: 16px;
      font-weight: 700;
      background: linear-gradient(130deg, #EEDD85 0%, #FEF6B3 53%, #D9B25B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
