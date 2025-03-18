<script lang="ts">
import {defineComponent, onMounted, ref, UnwrapRef} from 'vue'
import sd from "@/assets/image/hone_bg.png";
import wx from "weixin-js-sdk";
import {useRouter} from "vue-router";
import {showFailToast, showToast} from "vant";
import {isWeixin} from "@/utils/utils";

// 定义产品数据的类型
interface ProductInfoData {
  [key: string]: {
    productTitle: string;
    productSubTitle: string;
    productContent: string;
    bannerImage: string;
  };
}

export default defineComponent({
  name: "index",
  setup() {
    const router = useRouter()
    const productSkuId = ref(3134) // 选择领取的skuId
    const productInfoData = ref<UnwrapRef<ProductInfoData>>({
      "3134": {
        productTitle: "立减金",
        productSubTitle: "立减金活动",
        productContent: "立减金活动内容",
        bannerImage: sd
      }
    })
    const productData = ref({
      sku_name: "立减金",
      is_obtained: 0,
    })
    const productStoreData = ref<any>({}) // 产品库存数据
    const disabledBtn = ref(false) // 领取按钮是否禁用
    const btnStatueText = ref("立即领取") // 领取按钮文字
    const isCouponClaimPopupVisible = ref(false)// 领取弹窗显示状态
    const productOrder = ref('') // 产品订单号

    // 唤起微信支付
    const onBridgeReady = (payParams: any) => {
      WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId": payParams.appId, //公众号名称，由商户传入
            "timeStamp": payParams.timeStamp, //时间戳，自1970年以来的秒数
            "nonceStr": payParams.nonceStr, //支付签名随机串
            "package": payParams.package, // 统一支付接口返回的prepay_id参数值
            "signType": payParams.signType, //微信签名方式：
            "paySign": payParams.paySign //微信签名
          },
          function (res: any) {
            if (res.err_msg === "get_brand_wcpay_request:ok") {
              // 使用以上方式判断前端返回,微信团队郑重提示：
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              showToast('支付成功')
              paySuccess({order_no: productOrder.value})
              router.push({path: '/actResult', query: {order_no: productOrder.value}}) // 跳转到订单结果页面
            } else {
              router.push({path: '/actResult', query: {order_no: productOrder.value}}) // 跳转到订单结果页面
            }
          }
      )
    }

    // 支付函数
    const payOrder = async (order_no: any) => {
      // 唤起支付弹窗
      if (isWeixin()) {
        wx.miniProgram.navigateTo({
          url: `../pay/pay?order_no=${order_no}&token=${localStorage.getItem('token')}`
        });
      } else {
        try {
          const res = await handlePayParams({order_no: order_no})
          if (res.code === 0) {
            const payParams = res.data
            if (typeof WeixinJSBridge === "undefined") {
              if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', () => onBridgeReady(payParams), false);
              } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', () => onBridgeReady(payParams));
                document.attachEvent('onWeixinJSBridgeReady', () => onBridgeReady(payParams));
              }
            } else {
              onBridgeReady(payParams);
            }
          } else {
            showFailToast('获取支付参数失败')
          }
        } catch (error) {
          showFailToast('唤起支付弹窗失败')
        }
      }
    }

    // 处理响应代码
    const handleResponseCode = async (res: any, order_no: string) => {
      if (res.code === 0) {
        return true;
      } else if (res.code === 400112) {
        showToast(res.msg)
        await router.push({path: '/order'})
      } else if (res.code === 400117) {
        showToast(res.msg)
        await router.push({path: '/actResult', query: {order_no: order_no}})
      } else {
        showFailToast(res.msg);
      }
      return false;
    }

    // 立即领取
    const handleImmediateClaim = async () => {
      if (disabledBtn.value) return // 按钮禁用，不执行后续操作
      btnStatueText.value = "领取中..." // 修改按钮文字

      //   判断是否领取过
      if (productData.value.is_obtained === 1) {
        showToast('您已领取过该优惠券')
      } else {
        // 未领取
        try {
          const res = await checkObtain(productSkuId.value) // 检查是否已经领取其它权益
          if (await handleResponseCode(res, productOrder.value)) {
            isCouponClaimPopupVisible.value = true; // 显示领取弹窗
          }
        } catch (error) {
          showFailToast('检查领取状态失败' || error.msg)
        }
      }
    }

    // 确认点击领取
    const handleCouponClaim = async () => {
      try {
        const res = await bocObtain(productSkuId.value) // 领取优惠券
        if (await handleResponseCode(res, productOrder.value)) {
          productOrder.value = res.data.order_no
          // 判断订单号是否存在
          if (productOrder.value) {
            // 判断是否为免费领取
            if (productData.value.obtain_style === 'free') {
              await router.push({path: '/actResult', query: {order_no: productOrder.value}}) // 跳转到活动结果页面
              isCouponClaimPopupVisible.value = false
            } else {
              isCouponClaimPopupVisible.value = false;
              showToast('唤起支付弹窗')
              await payOrder(productOrder.value)
            }
          }
        }
      } catch (error) {
        showFailToast('领取优惠券失败' || error.msg)
      }
    }

    onMounted(() => {

    })

    return {
      productSkuId,
      productInfoData,
      productData,
      productStoreData,
      disabledBtn,
      btnStatueText,
      isCouponClaimPopupVisible,
      handleImmediateClaim,
      handleCouponClaim,
      router
    }
  }
})
</script>

<template>
  <!--商品详情页面-->
  <div class="product-detail">
    <div class="banner-image">
      <nut-image :src="productInfoData[productSkuId]?.bannerImage"/>
    </div>
    <div class="product-title-box">
      <p class="product-title">
        {{ productData.sku_name ? productData.sku_name : productInfoData[productSkuId]?.productTitle }}</p>
      <p class="product-store">剩余：{{ productStoreData[productSkuId] || 0 }}张</p>
    </div>
    <div class="product-desc">
      <p class="title"><span class="text-[#F43127] font-bold">|</span>&nbsp&nbsp商品详情</p>
    </div>
    <van-action-bar class="product-action_bar">
      <van-action-bar-icon icon="wap-home-o" text="主页" :onclick="() => {router.push({path: '/home'})}"/>
      <van-action-bar-icon icon="orders-o" text="订单列表" :onclick="() => {router.push({path: '/order'})}"/>
      <van-action-bar-button type="danger" :disabled="disabledBtn"
                             :class="productData.is_obtained === 1 ? 'obtained_btn' : ''"
                             :text="btnStatueText" @click="handleImmediateClaim"/>
    </van-action-bar>
    <!-- 领取弹窗 -->
    <van-overlay :show="isCouponClaimPopupVisible">
      <div class="wrapper" @click.stop>
        <div>
          <div class="btn font-b">
            <van-button class="cancel-btn" type="default" round @click="isCouponClaimPopupVisible = false">取消
            </van-button>
            <van-button class="confirm-btn" color="linear-gradient(to bottom, #FD973C, #DF371A)" round
                        @click="handleCouponClaim">确认
            </van-button>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<style scoped lang="less">
.product-detail {
  position: relative;
  width: 100%;
  height: auto;
  box-sizing: border-box;

  .product-action_bar {
    height: 80px;
    line-height: 80px;
    background: #fff9f9;

    .van-action-bar-icon {
      background: transparent;
    }
  }
}
</style>
