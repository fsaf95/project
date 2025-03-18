<script setup lang="ts">
import {useRouter} from "vue-router";

const props = defineProps({
  showPay: Boolean,
})
const router = useRouter()
const emits = defineEmits(['pay', 'handleCancel'])

const handleCancelOrder = () => {
  emits('handleCancel')
}
const payOrder = () => {
  emits('pay')
}
</script>

<template>
  <div class="order-actions">
    <nut-button v-if="showPay" class="pay-btn" type="default"
                @click="payOrder">去支付
    </nut-button>
    <nut-button v-if="showPay" class="cancel-order"
                type="danger" @click="handleCancelOrder">重新下单
    </nut-button>
    <nut-button v-if="showPay" class="order-list-btn"
                type="danger" @click="router.replace({path: '/order'})">查看订单列表
    </nut-button>
  </div>
</template>

<style scoped lang="less">

</style>
