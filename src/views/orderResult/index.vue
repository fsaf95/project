<script lang="ts">
import {computed, defineComponent, onMounted, Ref, ref} from 'vue'
import wx from "weixin-js-sdk";
import {useRoute, useRouter} from "vue-router";
import ClipboardJS from "clipboard";
import {showFailToast, showToast} from "vant";
import {isWeixin} from "@/utils/utils";
import getCancel from '@/assets/image/get_fail.png'
import getUnpaid from '@/assets/image/get_ing.png'
import getSuccess from '@/assets/image/get_success.png'
import getWaiting from '@/assets/image/get_waiting.png'
import get_lose from "@/assets/image/get_lose.png"
import getSuccessMoney from "@/assets/image/get_succes_money.png"
import getDjlqImg from "@/assets/image/get_djlq.png"
import OrderStatus from "./component/OrderStatus.vue";
import ElectronicCoupon from "./component/ElectronicCoupon.vue";
import OrderInformation from "@/views/orderResult/component/OrderInformation.vue";
import OrderActions from "@/views/orderResult/component/OrderActions.vue";
import {useOrderStatus} from "@/views/orderResult/composables/useOrderStatus";
import {apiCancelOrder, apiGetPayParams, apiOrderInfo, apiPaySuccess} from "@/api/user";

// 图片资源
const statusImages = {
  cancel: getCancel,
  unpaid: getUnpaid,
  success: getSuccess,
  waiting: getWaiting,
  lose: get_lose,
  successMoney: getSuccessMoney,
  djlq: getDjlqImg
}

interface OrderInfoType {
  sku_name: string, // 商品名称
  obtain_time: string, // 领取时间
  notify_time: string, // 通知时间
  order_no: string, // 订单号
  obtain_status: number,// 领取状态
  pay_status: string, // 支付方式
  obtain_style: string, // 领取方式
  card_no: string, // 卡号
  card_pwd: string,// 卡密
  link: string,// 链接
  act_type: number,// 活动类型
  remark: string,// 备注
  sku_id: number // 商品id
}


export default defineComponent({
  name: "OrderResult",
  components: {OrderActions, OrderInformation, ElectronicCoupon, OrderStatus},
  setup() {
    const route = useRouter().currentRoute.value
    const orderNo = ref(route.query.order_no as string) // 订单号
    // 订单数据
    const orderData = ref<OrderInfoType>({}) // 订单数据
    // 订单状态描述
    const stateInfoData = ref<any>({
      state_desc: '待支付',
      img: getUnpaid,
      color: 0,
      btnState: 1,
      imageWidth: "get_waiting"
    })

    // 取消订单
    const cancelOrder = async () => {
      try {
        const res = await apiCancelOrder({order_no: orderNo.value})
        if (res.code !== 0) {
          showFailToast(res.msg)
        } else {
          await handleApiOrderInfo(orderNo.value); // 获取订单详情
        }
      } catch (error: any) {
        showFailToast(error.msg)
      }
    }

    // 计算属性
    const showElectronicCoupon = computed(() => {
      return [2].includes(orderData.value.act_type) && orderData.value.obtain_status === 1
    })

    const paymentActions = computed(() => ({
      showPay: stateInfoData.value.btnState === 1 && orderData.value.obtain_status === 0,
    }))

    // 获取订单详情
    const handleApiOrderInfo = async (order_no: any) => {
      try {
        const res = await apiOrderInfo(order_no);
        if (res.code === 0) {
          stateInfoData.value = useOrderStatus(res.data[0]) // 订单状态处理
          orderData.value = res.data[0]
        } else {
          showFailToast(res.msg)
        }
      } catch (error: any) {
        showFailToast(error.msg)
      }
    }

    const handlePayment = async () => {
      if (isWeixin()) {
        wx.miniProgram.navigateTo({
          url: `../pay/pay?order_no=${orderNo.value}&token=${localStorage.getItem('token')}`
        })
      } else {
        try {
          const res = await apiGetPayParams({order_no: orderNo.value})
          if (res.code === 0) {
            const pay_params = res.data
            if (typeof WeixinJSBridge === "undefined") {
              if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', () => onBridgeReady(pay_params), false);
              } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', () => onBridgeReady(pay_params));
                document.attachEvent('onWeixinJSBridgeReady', () => onBridgeReady(pay_params));
              }
            } else {
              onBridgeReady(pay_params);
            }
          } else {
            showFailToast('获取支付参数失败')
          }
        } catch (error) {
          showFailToast('唤起支付弹窗失败')
        }
      }
    }

    const onBridgeReady = (payParams: any) => {
      WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId": payParams.appId,  //公众号名称，由商户传入
            "timeStamp": payParams.timeStamp, //支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            "nonceStr": payParams.nonceStr,  //支付签名随机串，不长于 32 位
            "package": payParams.package,//统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            "signType": payParams.signType,  //签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            "paySign": payParams.paySign, //支付签名
          },
          function (res: any) {
            if (res.err_msg === "get_brand_wcpay_request:ok") {
              showToast('支付成功！');
              apiPaySuccess({order_no: orderNo.value});
              window.location.reload() // 刷新页面
            } else {
              window.location.reload() // 刷新页面
            }
          });
    }


    onMounted(() => {
      // orderNo.value = route.query.order_no as string
      // handleApiOrderInfo(orderNo.value) // 获取订单详情
    })

    return {
      statusImages,
      orderData,
      route,
      orderNo,
      stateInfoData,
      showElectronicCoupon,
      cancelOrder,
      paymentActions,
      handlePayment,
      handleCopy: (link: string) => {
        if (orderData.value.act_type === 4 ||
            (orderData.value.act_type === 2 && orderData.value.obtain_status === 1)) {
          window.location.href = link
        }
      }
    }
  }
})
</script>

<template>
  <div class="order-result">
    <!--   订单状态描述-->
    <OrderStatus :state-info="stateInfoData"/>


    <!-- 电子优惠券   -->
    <ElectronicCoupon v-if="showElectronicCoupon"
                      :image="statusImages.djlq"
                      :link="orderData.link" @claim="handleCopy"/>

    <!--  订单信息详细  -->
    <OrderInformation :order-data="orderData" @copy="handleCopy"/>

    <!--  订单操作按钮  -->
    <OrderActions :showPay="paymentActions.showPay" @handleCancel="cancelOrder" @pay="handlePayment"/>
  </div>
</template>

<style scoped lang="less">
.order-result {
  position: relative;
  width: 100%;
  padding: 100px 35px;
  box-sizing: border-box;
  background-color: #F6F6F6;
}
</style>
