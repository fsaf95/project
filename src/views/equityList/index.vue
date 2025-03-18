<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useRouter} from "vue-router";
import bank_logo from "@/assets/image/zhonghuo.png"
import icon_yff from "@/assets/image/icon_yff.png"
import icon_dff from "@/assets/image/icon_dff.png"

// 定义状态图片对象的类型
type StateImgType = {
  [key: number]: {
    img: any;
    text: string;
  };
}

export default defineComponent({
  name: "index",
  setup() {
    const router = useRouter()
    // 时间
    const t = ref('')
    // 状态
    const stateImg = ref<StateImgType>({
      0: {
        img: icon_yff,
        text: '未领取'
      },
      1: {
        img: icon_dff,
        text: '已领取'
      },
      2: {
        img: icon_yff,
        text: '已过期'
      }
    })
    // 代金券包
    const voucherPackArr = ref([
      {threshold_amount: 10000, act_name: "50元微信立减金", obtain_status: 1, order_no: '158448845', expire_days: 30,},
      {threshold_amount: 10000, act_name: "50元微信立减金", obtain_status: 0, order_no: '158448845', expire_days: 30,},
    ])
    // 活动规则
    const batchInfo = ref({
      notice: `<p>注:</p>
        <p>活动期间，县域借记卡客户，使用手机银行APP领取100元立减金（两张指定商圈50元微信立减金）。每人每月限领取一次，数量有限，先到先得。总活动名额10000个。
        </p>`,
      desc: `<p>1、本活动适用于县域借记卡客户，账户及卡片状态正常且卡在有效期内（客户办卡预留手机号码须与微信绑定手机号码相同）。</p>
        <p>2、每客户可领一次，一次性领取2张50元微信立减金。立减金券领取成功后可在我的订单以及微信卡包中查看。</p>
        <p>3、立减金使用效期为7天，请在有效期内使用；立减金不可拆分、不可转让使用，过期作废。客户在支付时使用发行的借记卡，即可使用微信立减，支付金额满100元方可使用1张，每次支付仅可使用1张，不与其他活动优惠叠加使用。</p>
        `
    })
    return {
      t,
      stateImg,
      bank_logo,
      batchInfo,
      voucherPackArr,
      router,
    }
  }
})
</script>

<template>
  <div class="equity">
    <div class="voucher_pack">
      <div class="voucher_pack_card" v-for="(item,index) in voucherPackArr" :key="index">
        <div class="icon-state"><img :src="stateImg[item.obtain_status as
        0|1|2]?.img" alt=""></div>
        <div class="left">
          <div class="w-[126px] h-[126px] bg-[#fff] rounded-full flex items-center justify-center">
            <div class="icon-img">
              <img :src="bank_logo" alt="">
            </div>
          </div>
        </div>
        <div class="right">
          <div class="w-full h-full">
            <p class="right_t">50元微信立减金</p>
            <p class="right_x">(满100元可用)</p>
            <p class="right-p">领取日起7天内可用</p>
            <div class="xian"></div>
            <p class="right-p">单号：{{ item.order_no }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hint-con" v-if="batchInfo">
      <div class="hint-text" v-html="batchInfo.notice"></div>
    </div>
    <div class="activity-con">
      <p class="title">活动规则</p>
      <p v-html="batchInfo.desc"></p>
    </div>
  </div>
</template>

<style scoped lang="less">
.equity {
  position: relative;
  width: 750px;
  min-height: 100vh;
  background: #f8f8f8;
  box-sizing: border-box;
  overflow: hidden;

  .voucher_pack {
    margin: 40px auto 10px;
    padding: 0 53px;
    width: 100%;
    height: auto;
    box-sizing: border-box;

    .title {
      margin-bottom: 30px;
      font-size: 28px;
      color: #333333;
      font-weight: 500;
      line-height: 1.5em;
    }

    .voucher_pack_card {
      position: relative;
      display: flex;
      align-items: center;
      margin: 15px auto;
      padding: 0 10px 12px 0;
      width: 646px;
      height: 215px;
      //background: url("@/assets/image/quan_bg.png") no-repeat;
      //background-size: contain;
      background: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-sizing: border-box;

      .icon-state {
        position: absolute;
        top: 20px;
        right: 10px;
        width: 124px;
        height: 109px;
      }

      .left {
        width: 166px;
        height: 202px;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon-img {
          width: 84px;
          height: 82px;
          border-radius: 50%;
          background: #ffffff;
          box-sizing: border-box;
        }
      }

      .right {
        flex: 1 1 auto;
        position: relative;
        padding: 30px 136px 30px 35px;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;

        .icon-logo {
          position: absolute;
          top: 36px;
          left: 30px;
          width: 40px;
          height: 40px;
        }

        .xian {
          margin: 4px 0 4px -10px;
          width: 300px;
          border-top: 3px dashed #d30000;
        }

        p {
          text-align: left;
        }

        .right_t-box {
        }

        .right_t {
          font-size: 30px;
          color: #000000;
          font-weight: 600;
          line-height: 1.6em;
          word-break: break-word;
          word-wrap: break-word;
        }

        .right_cnt_btn {
          padding: 6px 15px;
          background-color: #de2325;
          color: #ffffff;
          font-size: 26px;
          line-height: 26px;
          border-radius: 40px;
          box-sizing: border-box;
          z-index: 1;
        }


        .right_x {
          font-size: 26px;
          color: #d30000;
          font-weight: 600;
          line-height: 1.3em;
        }

        .right-p {
          font-size: 22px;
          color: #000000;
          line-height: 1.3em;
          font-weight: 500;
          word-break: break-word;
          word-wrap: break-word;
        }
      }
    }
  }

  .hint-con {
    margin-bottom: 50px;
    width: 100%;
    height: auto;
    padding: 0 60px;
    box-sizing: border-box;

    .hint-text {
      text-align: left;
      line-height: 1.6em;
      font-size: 26px;
      color: #d32c2e !important;
      font-weight: 500;

      p {
        color: #d32c2e !important;
      }
    }
  }

  .activity-con {
    margin: 0 auto 30px;
    position: relative;
    padding: 45px 28px;
    width: 704px;
    height: auto;
    background: #f1f1f1;
    box-sizing: border-box;

    p {
      color: #333333;
      font-weight: 500;
      line-height: 1.6em;
      font-size: 28px;
      text-align: justify;
    }

    .title {
      margin-bottom: 40px;
      font-size: 36px;
      font-weight: bold;
      text-align: center;
    }
  }

  .order-btn {
    position: fixed;
    top: 250px;
    right: 0;
    //background: url("@/assets/image/home_Hover_button_wdqy.png") no-repeat;
    //background-size: contain;
    width: 56px;
    height: 158px;
    z-index: 100;
  }

  .activity-rules-btn2 {
    position: fixed;
    top: 422px;
    right: 0;
    width: 143px;
    height: 63px;
    z-index: 100;
  }

  .home-head {
    position: relative;
    margin: 1270px auto 40px;
    padding: 30px 50px;
    width: 669px;
    min-height: 1055px;
    border-radius: 20px;
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;

    .home_img {
      margin-top: 20px;
      width: 572px;
      height: 254px;
      line-height: 0;
      box-sizing: border-box;
      background: transparent;
    }

    .form_btn {
      margin: 30px auto 0;
      width: 574px;
      min-height: 116px;
    }
  }

  :root .van-tab--card {
    width: 206px;
    height: 64px;
    line-height: 64px;
    color: #333333;
    border-radius: 100px 0 0 0;
    background-color: #bebcbc;
    border: none;
  }
}
</style>
