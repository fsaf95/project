import {http} from "@/utils/http";


type ListResult = {
    code: number;
    msg: string;
    data: Array<any>;
};
const actId = "oO3n5QRqx"

// export function getOrderList(params?: object): Promise<ListResult> {
//     return http.request({
//         url: "/page/szicbc/customer/order/list/" + actId,
//         method: "get",
//         params
//     });
// }

// 获取图片验证码
export function getImageCode() {
    return http.request({
        url: "/page/common/imageCode",
        method: "get",
    })
}

// 获取短信验证码
export function getSendSmsCode(data: any): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/sendSmsCode",
        method: "post",
        data
    })
}

// 获取库存信息
export function getActStock(data: any): Promise<ListResult> {
    return http.request({
        url: "/page/act/stock/" + actId,
        method: "post",
        data
    });
}

// 授权验证
export function getOauthCheck(): Promise<ListResult> {
    return http.request({
        url: "/page/common/oauthCheck/" + 'szicbc_clockin_act',
        method: "get",

    });
}

// 将openid存session
export function getOauth(params: any): Promise<ListResult> {
    return http.request({
        url: "/page/common/oauth/" + 'szicbc_clockin_act',
        method: "get",
        params
    });
}

// 授权验证【外部公众号】
export function getOauthCheckForOther(): Promise<ListResult> {
    return http.request({
        url: "/page/common/oauthCheckForOther/" + 'szicbc_clockin_act' + "/" + "o_szicbc",
        method: "get",
    });
}

// 将openid存session【外部公众号】
export function getOauthForOther(params: any): Promise<ListResult> {
    return http.request({
        url: "/page/common/oauthForOther/" + 'szicbc_clockin_act' + "/" + "o_szicbc",
        method: "get",
        params
    });
}

//免密直接登录
export function getLogin(data?: object): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/login/" + actId,
        method: "post",
        data
    });
}

//我的奖品
export function getOrderList(data?: object): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/order/list/" + actId,
        method: "post",
        data
    });
}

//邀请记录
export function getAssistList(data?: object): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/assist/list/" + actId,
        method: "post",
        data
    });
}

//获取分享者信息
export function getShareMessage(data?: object): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/assist/getShareMessage/" + actId,
        method: "post",
        data
    });
}

//助力
export function getAssistOp(data?: object): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/assist/op/" + actId + '?share_message=' + data.share_message,
        method: "post",
    });
}

//打卡
export function getClockIn(data?: object): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/clockIn/" + actId + '?share_message=' + data.share_message,
        method: "post",
    });
}

//订单详情
export function apiOrderInfo(orderNo?: string): Promise<ListResult> {
    return http.request({
        url: `/page/boc/order/info/${actId}/${orderNo}`,
        method: "post",
    });
}

// 订单列表
export function apiOrderList(data: object): Promise<ListResult> {
    return http.request({
        url: `/page/boc/order/list/${actId}`,
        method: "post",
        data: data
    });
}

//领取权益代金券
export function apiBocObtain(skuId?: string): Promise<ListResult> {
    return http.request({
        url: `/page/boc/obtain/${actId}/${skuId}`,
        method: "post",
    });
}

// 商品详情
export function apiSkuInfo(skuId?: object): Promise<ListResult> {
    return http.request({
        url: `/page/boc/sku/info/${actId}/${skuId}`,
        method: "post",
    });
}

// 微信支付回调
export function apiPayWechatPayNotify(data?: object): Promise<ListResult> {
    return http.request({
        url: `/page/boc/pay/wechatPayNotify${actId}`,
        method: "post",
        data: data
    });
}

// 获取微信JSAPI支付参数
export function apiGetPayParams(data?: object): Promise<ListResult> {
    return http.request({
        url: `/page/boc/pay/getPayParams/${actId}`,
        method: "post",
        data: data
    });
}

// 取消订单
export function apiCancelOrder(data?: object): Promise<ListResult> {
    return http.request({
        url: `/page/boc/cancelOrder/${actId}`,
        method: "post",
        data: data
    });
}

// 支付成功
export function apiPaySuccess(data?: object): Promise<ListResult> {
    return http.request({
        url: `/page/boc/pay/success/${actId}`,
        method: "post",
        data: data
    });
}
