<template>
  <!-- 领取成功 -->
  <van-overlay class="modal" :show="phoneShow" :lock-scroll="false">
    <div class="modal-con" @click.stop>
      <div class="content">
        <div class="icon_succeed"></div>
        <div class="order_btn" @click="handleCheckOrder"></div>
      </div>
      <div class="close" @click="handleCancelChange"></div>
    </div>
  </van-overlay>
</template>

<script setup>
import {defineProps, onMounted, reactive, ref, toRef} from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  sku_id: {
    type: String || Number,
    default: 3133
  }
})

const phoneShow = toRef(props, 'show')
const skuId = toRef(props, 'sku_id')
const sku_data = ref({
  3133: {title: "滴滴出行APP-我的-优惠券"},
  3134: {title: "美团外卖-我的-红包/神券"},
  3135: {title: "美团外卖-我的-红包/神券"}
});

const emits = defineEmits(['handleCancel','handleCheckOrder'])
const handleCheckOrder = () => {
  emits("handleCheckOrder")
}
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
      width: 657px;
      min-height: 582px;
      border-radius: 20px;
      box-sizing: border-box;
      background: url("@/assets/image/wxtx_way.png") no-repeat;
      background-size: contain;
      overflow: hidden;

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

      .icon_succeed {
        margin: 188px 10px 0 223px;
        width: 194px;
        height: 194px;
        background: url("@/assets/image/hdtc_lqcg_srcceed.png") no-repeat;
        background-size: contain;
      }

      .order_btn {
        margin: 10px 0 0 80px;
        width: 450px;
        height: 138px;
        background: url("@/assets/image/hdtc_lqcg_button.png") no-repeat;
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
