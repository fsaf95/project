import getSuccess from "@/assets/image/get_success.png";
import getUnpaid from "@/assets/image/get_ing.png";
import getWaiting from "@/assets/image/get_waiting.png";
import get_lose from "@/assets/image/get_lose.png";
import getCancel from "@/assets/image/get_fail.png";
import getSuccessMoney from "@/assets/image/get_succes_money.png";

export const formatPartialText = (value: string) => {
    const start = value.slice(0, 3)
    const end = value.slice(-3)
    return `${start}******${end}`
}

export const OrderStateConfig = {
    free: {
        state_desc: '领取成功',
        img: 'success',
        btnState: 2
    },
    paid: {
        '0_0': {
            state_desc: '待支付',
            img: getUnpaid,
            color: 0,
            btnState: 1,
            imageWidth: "get_waiting"
        },
        '1_0': {
            state_desc: '待发放',
            img: getWaiting,
            color: 0,
            btnState: 3,
            imageWidth: "get_waiting"
        },
        '1_1': {
            state_desc: '领取成功',
            img: getSuccess,
            color: 0,
            btnState: 2,
            imageWidth: 'get_success'
        },
        '1_2': {
            state_desc: '领取失败',
            img: get_lose,
            color: 0,
            btnState: 2,
            imageWidth: 'get_lose'
        },
        '1_3': {
            state_desc: '领取异常',
            img: get_lose,
            color: 0,
            btnState: 2,
            imageWidth: 'get_lose'
        },
        '2_0': {
            state_desc: '已取消',
            img: getCancel,
            color: 1,
            btnState: 4,
            imageWidth: "get_fail"
        },
        '3_0': {
            state_desc: '处理中',
            img: getUnpaid,
            color: 0,
            btnState: 4,
            imageWidth: "get_ing"
        },
        '4_3': {
            state_desc: '已退款',
            img: getSuccessMoney,
            color: 0,
            btnState: 4,
            imageWidth: "getSuccessMoney"
        }
    }
}
