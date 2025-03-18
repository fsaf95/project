import {defineStore} from "pinia";
import {store} from "@/store";

const loginStore = defineStore("loginStore", {
    state: () => {
        return {
            token: localStorage.getItem("token") || "", // 登录凭证
            userInfo: JSON.parse(localStorage.getItem("userInfo") || "{}"),
            access_token: "", // token
            token_type: "", // token状态
            expires_in: "", // token有效时间
            userPhone: '',//用户手机号
            userNickName: '',//用户昵称
            userAvatar: '',//用户头像
            userRole: '',//用户角色,
            captcha: '', //图形验证码
            verificationCodeImg: '',//图形验证码图片
            userPassword: '',//用户密码
            userPasswordAgain: '',//用户密码再次输入
            userEmail: '',//用户邮箱
            userCaptcha: '',//用户验证码
            userCaptchaAgain: '',//用户验证码再次输入
            flag: false,//是否登录
            waitTime: 61,// 倒计时时间
            captchaTip: "获取短信验证码",// 验证码提示
            isRead: false // 同意隐私政策和服务政策
        }
    },
    getters: {},
    actions: {
        //获取验证码倒计时
        getCaptchaCountdown() {
            this.flag = true
            this.waitTime--
            this.captchaTip = `${this.waitTime} 秒后重新发送`
            let timer = setInterval(() => {
                if (this.waitTime > 1) {
                    this.flag = true
                    this.waitTime--
                    this.captchaTip = `${this.waitTime}秒后重新获取`
                } else {
                    clearInterval(timer)
                    this.captchaTip = '重新获取'
                    this.flag = false
                    this.waitTime = 61
                }
            }, 1000)
        },
        // 点击刷新验证码
        handleRefreshCode () {
            /**
             * 渲染验证码图片
             */
            this.verificationCodeImg = `<img src="https://api.ldvip.cn/page/common/captcha/icbc_new_custom/2024?r=${Math.random()}" alt="">`
        }
    }
})

export function useLoginStoreHook() {
    return loginStore(store);
}
