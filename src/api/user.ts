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

// 获取库存信息
export function getActStock(data): Promise<ListResult> {
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
export function getOauth(params): Promise<ListResult> {
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
export function getOauthForOther(params): Promise<ListResult> {
    return http.request({
        url: "/page/common/oauthForOther/" + 'szicbc_clockin_act' + "/" + "o_szicbc",
        method: "get",
        params
    });
}

//免密直接登录
export function getLogin(params?: object): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/login/" + actId,
        method: "post",
        params
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

//获取打卡进度
export function getClockInProgress(data?: object): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/clockIn/progress/" + actId,
        method: "post",
        data
    });
}

//领券
export function getCouponObtain(data?: object): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/coupon/obtain/" + actId + '/' + data.skuId,
        method: "post",
    });
}

//领取进度
export function getObtainProgress(data?: object): Promise<ListResult> {
    return http.request({
        url: "/page/szicbc/customer/coupon/obtainProgress/" + actId,
        method: "post",
    });
}
