<template>
  <!-- 表单-手机验证 -->
  <van-overlay class="modal" :show="phoneShow" :lock-scroll="false">
    <div class="modal-con" @click.stop>
      <div class="content">
        <div class="list">
          <div class="list-box" :class="item.state ? 'active' : ''" v-for="(item,index) in storeData.ticketList" :key="index"
               @click="handleOption(item)">
            <div v-if="item.prizeAmount === 0" class="icon_state"></div>
            <div class="list-box-l">
              <p class="amount">
                ￥<span>{{ item.amount }}</span>
              </p>
              <p class="condition">
                <span>{{ item.condition }}</span>
              </p>
            </div>
            <div class="list-box-r">
              <p class="title">{{ item.title }}</p>
              <p>{{ item.subhead }}</p>
              <p class="text" v-html="item.subhead_h"></p>
            </div>
          </div>
        </div>
        <div class="confirm-button" @click="handleConfirm"></div>
      </div>
      <div class="close" @click="handleCancelChange"></div>
    </div>
  </van-overlay>
</template>

<script setup>
import {defineProps, onMounted, reactive, ref, toRef} from "vue";
import {showToast} from "vant";
import {useUser} from "@/store/user";

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const storeData = useUser()
const phoneShow = toRef(props, 'show')
const skuId = ref("") //选中的skuId
onMounted(() => {})


const emits = defineEmits(['handleCancel', 'handleConfirm'])

const handleOption = (data) => {
  if (data.prizeAmount === 0) {
    showToast("券已抢完！")
  } else {
    skuId.value = data.sku_id
    list.value.forEach(item => {
      item.state = false
      item.state = item.id === data.id
    })
  }
}

const handleConfirm = () => {
  emits("handleConfirm", skuId.value)
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
    min-height: 1083px;
    overflow: hidden;

    .content {
      margin: 10% auto 0;
      width: 657px;
      min-height: 1083px;
      border-radius: 20px;
      overflow: hidden;
      box-sizing: border-box;
      background: url("@/assets/image/hdtc_background.png") no-repeat;
      background-size: contain;

      .list {
        margin: 190px 54px 0 37px;
        position: relative;

        .list-box {
          position: relative;
          margin-bottom: 20px;
          width: 100%;
          min-height: 185px;
          display: flex;
          align-items: center;
          border-radius: 10px;
          background: url("@/assets/image/hdtc_quan.png") no-repeat;
          background-size: contain;

          &.active {
            background: url("@/assets/image/hdtc_quan_active.png") no-repeat;
            background-size: contain;
          }

          .icon_state {
            position: absolute;
            top: -12px;
            left: -5px;
            width: 100px;
            height: 100px;
            background: url("@/assets/image/pic_quan.png") no-repeat;
            background-size: contain;
            z-index: 10;
          }

          .list-box-l {
            position: relative;
            width: 170px;
            height: auto;

            p {
              text-align: center;
              font-size: 24px;
              line-height: 1.6em;
              color: #fe5000;
            }

            .amount {
              font-weight: bold;

              span {
                font-size: 72px;
              }
            }

            .condition {
              margin-top: 4px;
            }
          }

          .list-box-r {
            position: relative;
            padding: 0 24px;
            width: 390px;
            height: 100%;
            box-sizing: border-box;

            p {
              line-height: 1.6em;
              font-weight: 500;
              font-size: 20px;
              color: #fe5000;
            }

            .text {
              margin-top: 2px;
              font-size: 20px;
              color: #000000;
              line-height: 1.2em;
            }

            .title {
              font-size: 32px;
              line-height: 1.6em;
              font-weight: bold;
            }

            .date {
              margin-top: 8px;
            }

            .prize-box-btn1 {
              width: 144px;
              height: 48px;
              text-align: center;
              line-height: 48px;
              color: #ff6f4b;
              font-size: 24px;
              border: 1px solid #ff6f4b;
              border-radius: 40px;
            }

            .prize-box-btn2 {
              width: 144px;
              height: 48px;
              text-align: center;
              line-height: 48px;
              color: #ffffff;
              font-size: 24px;
              background: #ff6f4b;
              border-radius: 40px;
            }

            .prize-box-btn3 {
              width: 144px;
              height: 48px;
              text-align: center;
              line-height: 48px;
              color: #ffffff;
              font-size: 24px;
              background: #999999;
              border-radius: 40px;
            }
          }
        }
      }

      .confirm-button {
        margin: 0 10px 0 10px;
        width: 615px;
        height: 152px;
        background: url("@/assets/image/hdtc_list_button.png") no-repeat;
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
