<template>
  <!-- 分享二维码 -->
  <van-overlay class="modal" :show="phoneShow" :lock-scroll="false">
    <div class="modal-con" @click.stop>
      <div class="content">
          <img :src="useUserInfo.shareImg" alt="" srcset="">
      </div>
      <p class="modal_text">长按图片转发给微信好友</p>
      <div class="close" @click="handleCancelChange"></div>
    </div>
  </van-overlay>
</template>

<script setup>
import {defineProps, onMounted, reactive, ref, toRef} from "vue";
import {useUser} from "@/store/user";

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
})

const useUserInfo = useUser()

const phoneShow = toRef(props, 'show')
const emits = defineEmits(['handleCancel'])

// 隐藏分享二维码
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
    width: 640px;
    min-height: 1240px;
    overflow: hidden;

    .content {
      margin: 0 auto;
      width: 560px;
      min-height: 800px;
      border-radius: 20px;
      box-sizing: border-box;
      //background: url("@/assets/image/create_share.png") no-repeat;
      //background-size: contain;
      overflow: hidden;

      .qr-code-box {
        margin: 671px 0 0 128px;
        width: 360px;
        height: 360px;
        border-radius: 10px;
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

    .modal_text {
      margin-top: 10px;
      font-size: 42px;
      line-height: 1.6em;
      color: #ffffff;
      font-weight: 500;
      text-align: center;
    }

    .close {
      margin: 20px 0 0 270px;
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
