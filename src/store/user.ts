// store/user.js代码如下
import {defineStore} from "pinia";
import {store} from "@/store";
import {calculateValidTime, handleLocalStorage} from "@/utils/token";
import {showFailToast, showToast} from "vant";
import {
    getOauthCheck,
} from "@/api/user";
import main_first from "@/assets/image/main_first.png";
import main_first_active from "@/assets/image/main_first_active.png";
import main_second from "@/assets/image/main_second.png";
import main_second_active from "@/assets/image/main_second_active.png";

export const User = defineStore({
        id: 'user',
        state: () => ({
            QRShow: false, // 关注公众号
            ticketListShow: false, // 选择优惠券弹窗
            shareImg: "", // 分享图片
            createShareImg: "", // 生成的分享二维码
            progressCount: 0, // 打卡进度样式对应值
            clockInState: 0, // 打卡按钮状态
            progressData: [
                {id: "1", name: "第一次打卡", state: false, img1: main_first, img2: main_first_active},
                {id: "2", name: "第二次打卡", state: false, img1: main_second, img2: main_second_active},
            ],
            access_token: "", // token
            token_type: "", // token状态
            expires_in: "", // token有效时间
            refresh_token: "", //
            timer: null,
            // 领取奖品列表
            ticketList: [
                {
                    id: 1,
                    title: "滴滴打车立减金",
                    subhead: "微信APP-我的-卡包-券和礼品",
                    subhead_h: "注：仅支持深圳地区的滴滴快車服务",
                    amount: "8",
                    condition: "满10元可用",
                    state: false,
                    prizeAmount: 0,
                    sku_id: '3133'
                },
                {
                    id: 2,
                    title: "美团外卖饮品券",
                    subhead: "美团APP-我的-红包/卡券-支付券",
                    subhead_h: "注：确保您银行预留的手机号 <br> 与美团 APP绑定的手机号一致",
                    amount: "5",
                    condition: "满10元可用",
                    state: false,
                    prizeAmount: 0,
                    sku_id: '3134'
                },
                {
                    id: 3,
                    title: "美团外卖加餐券",
                    subhead: "美团APP-我的-红包/卡券-支付券",
                    subhead_h: "注：确保您银行预留的手机号 <br> 与美团 APP绑定的手机号一致",
                    amount: "8",
                    condition: "满10元可用",
                    state: false,
                    prizeAmount: 0,
                    sku_id: '3135'
                }
            ]
        }),
        /**
         * 用来封装计算属性 有缓存功能  类似于computed
         */
        getters: {}
        ,
        /**
         * 编辑业务逻辑  类似于methods
         */
        actions: {
            //存储token
            handleTokenChange(data: any) {
                // alert("获取到token的对象值:" + JSON.stringify(data))
                this.access_token = data.access_token;
                this.expires_in = data.expires_in;
                this.token_type = data.token_type;
                this.refresh_token = data.refresh_token;
                handleLocalStorage(data);
                calculateValidTime(data.expires_in)
            },
            // 授权验证
            handleOauthCheck() {
                try {
                    const res = getOauthCheck();
                    if (res.code === 0) {
                        if (res.data.url) {
                            location.href = res.data.url
                        }
                    } else {
                        this.handleErrorCode(null, res.msg)
                    }
                } catch (errpr) {
                    showFailToast("授权验证失败！")
                }
            },
            handleErrorCode(value: any, msg: string) {
                if (value === 400511) {
                    //     还没有关注公众号
                    this.QRShow = true;
                } else if (value === 400515) {
                    //     还有待领取券需要领取
                    this.ticketListShow = true
                } else if (value === 410102) {
                    //     非深圳工行信用卡客户，直接将接口返回的msg弹框提示
                    showFailToast(msg)
                } else if (value === 400516) {
                    // “周末好好休息，不要加班哦！”，直接将接口返回的msg弹框提示
                    showToast({
                        message: "今天是周末！ \n" + msg,
                    });
                } else if (value === 500115) {
                    // “今日能量券已领完，下次再来补充能量哟!”，直接将接口返回的msg弹框提示
                    showToast(msg)
                } else if (value === 500116) {
                    //  “请明天（非周末）再来打卡”，直接将接口返回的msg弹框提示
                    showToast({
                        message: "今天已打卡！ \n " + msg,
                    });
                } else if (value === 500117) {
                    //     请邀请好友完成助力再打第xx次卡”，直接将接口返回的msg弹框提示
                    showToast({
                        message: "无法打卡! \n " + msg,
                    })
                    ;
                } else {
                    showFailToast(msg)
                }
            }
            ,
        }
    })
;

export function useUser() {
    return User(store);
}
