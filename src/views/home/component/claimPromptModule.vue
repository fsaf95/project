<template>
  <!-- 打卡成功提示 -->
  <van-overlay class="modal" :show="phoneShow" :lock-scroll="false">
    <div class="modal-con" @click.stop>
      <div class="content">
        <div class="title"></div>
        <div class="confirm-button" @click="handleCancelChange"></div>
      </div>
    </div>
  </van-overlay>
</template>

<script setup>
import {defineProps, toRef} from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
})

const phoneShow = toRef(props, 'show')

const emits = defineEmits(['handleCancel'])

//隐藏手机登录弹窗
const handleCancelChange = () => {
  emits("handleCancel")
}
</script>

<style lang="less" scoped>
.modal {
  z-index: 1111;

  .modal-con {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-320px, -50%);
    width: 657px;
    min-height: 620px;
    overflow: hidden;

    .content {
      width: 657px;
      min-height: 582px;
      border-radius: 20px;
      box-sizing: border-box;
      background: url("@/assets/image/wxtx_lq.png") no-repeat;
      background-size: contain;
      overflow: hidden;

      .title {
        margin: 176px auto 40px;
        width: 197px;
        height: 197px;
        background: url("@/assets/image/hdtc_succeed_iocn.png") no-repeat;
        background-size: contain;
      }

      .confirm-button {
        margin: 0 0 0 96px;
        width: 450px;
        height: 138px;
        background: url("@/assets/image/hdtc_button.png") no-repeat;
        background-size: contain;
      }
    }

    .close {
      margin: 40px 0 0 270px;
      width: 78px;
      height: 78px;
      background: url("@/assets/image/button_close.png") no-repeat;
      background-size: contain;
    }
  }
}

.van-stepper--round .van-stepper__plus {
  background: #ff3c01;
}

.van-stepper--round .van-stepper__minus {
  color: #ff3c01;
  border: 1px solid #ff3c01;
}
</style>
