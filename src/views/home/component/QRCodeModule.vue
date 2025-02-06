<template>
  <!-- 表单-手机验证 -->
  <van-overlay class="modal" :show="phoneShow" :lock-scroll="false">
    <div class="modal-con" @click.stop>
      <div class="content">
        <div class="qr-code-box">
          <img :src="qr" alt="" srcset="">
        </div>
      </div>
      <div class="close" @click="handleCancelChange"></div>
    </div>
  </van-overlay>
</template>

<script setup>
import {defineProps, onMounted, reactive, ref, toRef} from "vue";
import qr from "@/assets/image/wx_qr.png"

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
    min-height: 436px;
    overflow: hidden;

    .content {
      width: 656px;
      min-height: 672px;
      border-radius: 20px;
      box-sizing: border-box;
      background: url("@/assets/image/wxts_ewm.png") no-repeat;
      background-size: contain;
      overflow: hidden;

      .qr-code-box{
        margin: 205px auto 0;
        width: 388px;
        height: 388px;
      }

      .title {
        margin: 274px 82px 0 60px;
        text-align: center;
        font-size: 36px;
        color: #8f1b0f;
        line-height: 1.6em;
        font-weight: 500;
        width: 500px;
        height: auto;
      }

      .confirm-button {
        margin: 80px 10px 0 10px;
        width: 615px;
        height: 152px;
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
