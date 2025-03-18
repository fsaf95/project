<script setup lang="ts">
import {formatPartialText} from "@/utils/config";
import {useRouter} from "vue-router";

const props = defineProps({
  orderData: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['copy'])
const router = useRouter()

const handleCopyCardChange = (link: string) => {
  emits('copy', link)
}
</script>

<template>
  <div class="order-info card-box">
    <div class="order-info-item">
      <p class="title">商品名称</p>
      <p class="content">{{ orderData.sku_name }}</p>
    </div>
    <div class="order-info-item">
      <p class="title">下单时间</p>
      <p class="content">{{ orderData.obtain_time }}</p>
    </div>
    <div class="order-info-item">
      <p class="title">订单金额</p>
      <p class="content">¥{{ orderData.order_no }}</p>
    </div>
    <div class="order-info-item">
      <p class="title">支付方式</p>
      <p class="content">{{ orderData.pay_name }}</p>
    </div>
  </div>

  <div class="order-info card-box"
       v-if="orderData.act_type === 4 || orderData.act_type === 1 && orderData.obtain_status === 1">
    <div class="header">
      <div class="text">{{ orderData.sku_name }}</div>
      <span class="icon-arrow" @click="() => {router.push({path: '/actDetail', query: {sku_id: orderData.sku_id}})}">
          商品详情 <van-icon name="arrow"/>
        </span>
    </div>
    <div class="order-info-item">
      <p class="title">发券时间</p>
      <p class="content">¥{{ orderData.obtain_time }}</p>
    </div>
    <div class="order-info-item copyValue" :data-clipboard-text="orderData.card_no">
      <p class="title">卡号</p>
      <p class="content">¥{{ formatPartialText(orderData.card_no) }}<span class="text_btn">复制</span></p>
    </div>
    <div class="order-info-item copyValue" :data-clipboard-text="orderData.card_pwd">
      <p>卡密：</p>
      <p class="t">{{ formatPartialText(orderData.card_pwd) }} <span class="text_btn">复制</span></p>
    </div>
    <div class="order-info-item copyValue" v-if="orderData.act_type === 4" :data-clipboard-text="orderData.card_pwd">
      <p class="card-command_btn" @click="emits('copy', orderData.link)"
         :data-clipboard-text="orderData.card_pwd">
        复制卡密前往兑换
      </p>
    </div>
    <div class="line"></div>
    <p class="card-text mt-[15px] text-[red]" v-if="orderData.act_type === 4"><span>*</span>复制卡密后，将自动跳转到兑换页面
    </p>
    <p class="card-text mt-[15px] text-[red]" v-if="orderData.act_type === 2"><span>*</span>复制链接</p>
    <p class="card-text mt-[15px] text-[red]" v-if="orderData.act_type === 1"><span>*</span>复制卡密</p>
    <p class="card-text mt-[15px]"><span>*</span>卡密有效期为7天内有效，请在有效期内兑换，过期失效</p>
    <p class="card-text mt-[15px]"><span>*</span>电子券卡密已生成，不予退换</p>
  </div>
</template>

<style scoped lang="less">

</style>
