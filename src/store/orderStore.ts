import {defineStore} from "pinia";
import {store} from "@/store";
import getSuccess from '@/assets/image/get_success.png'


const useOrderStore = defineStore('orderStore', {
    state: () => {
        return {
            payState: {
                0: {payName: '未支付', img: getSuccess},
                1: {payName: '支付成功', img: getSuccess},
                2: {payName: '待支付'},
                3: {payName: '支付失败'}
            },
            getState: {
                0: {payName: '未领取', img: getSuccess},
                1: {payName: '领取成功', img: getSuccess},
                2: {payName: '待领取'},
                3: {payName: '领取失败'}
            }
        }
    },
    getters: {},
    actions: {}
})

export function useOrderStoreHook() {
    return useOrderStore(store)
}
