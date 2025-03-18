import {computed, Ref} from "vue";
import {OrderStateConfig} from "@/utils/config";

interface OrderData {
    "sku_name": string,
    "obtain_time": string,
    "notify_time": string,
    "order_no": string,
    "obtain_status": string,
    "pay_status": string,
    "obtain_style": string,
    "card_no": string,
    "card_pwd": string,
    "link": string,
    "act_type": number,
    "remark": string,
    "sku_id": number
}

export function useOrderStatus(orderData: OrderData) {
    const stateInfo = computed(() => {
        if (orderData.obtain_style == '1') {
            return OrderStateConfig.free
        }
        const key = `${orderData.pay_status}_${orderData.obtain_status}` as keyof typeof OrderStateConfig.paid
        return OrderStateConfig.paid[key]
    })

    return {stateInfo}
}
