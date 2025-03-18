<template>
  <div class="login-modal">
    <form class='form_verify'>
      <div class="form_con_header">
        信息验证
      </div>
      <div class="form-con">
        <van-field
            class="form-input"
            v-model="userLogin.userPhone"
            name="手机号"
            type='tel' clearable
            placeholder="请输入手机号"
            maxlength="11"
            :rules="[{ required: true, message: '请输入领取手机号' }]"
        />
      </div>
      <div class='form-con'>
        <van-field class='form-input' v-model='userLogin.captcha' type='text' clearable maxlength='6'
                   :rules="[{ required: true, message: '请输入图形验证码' }]"
                   placeholder='请输入图形验证码'>
          <template #button>
            <div class="verification-code-img" v-html="userLogin.verificationCodeImg" @click="handleRefreshCode"></div>
          </template>
        </van-field>
      </div>
      <div class='form-con'>
        <van-field class='form-input' v-model='userLogin.userCaptcha' type='tel' clearable maxlength='6'
                   :rules="[{ required: true, message: '请输入短信验证码' }]"
                   placeholder='请输入短信验证码'>
          <template #button>
            <p class='input-field_btn' :disabled='userLogin.flag' slot='button' @click='handleSendCode'>
              {{ userLogin.captchaTip }}
            </p>
          </template>
        </van-field>
      </div>
      <div class="text-con">
        <div class="checkbox-con">
          <van-checkbox class="checkbox-btn" v-model="userLogin.isRead" shape="square"></van-checkbox>
          <p class="checkbox-text">
            我已阅读并同意<span @click="handlePrivacyPolicy">《隐私政策》、</span><span
              @click="handleServiceAgreement">《服务协议》</span></p>
        </div>
      </div>
      <div class="confirm-button" type="primary" @click="handleConfirm">确认</div>
    </form>
    <button class="close-btn" @click="closeModal">关闭</button>
  </div>
  <!-- 隐私政策 -->
  <van-overlay :show="privacyPolicyShow" :lock-scroll="false" z-index="110">
    <div class="wrapper" @click.stop>
      <PrivacyPolicyModal @close="privacyPolicyShow = false"/>
    </div>
  </van-overlay>
  <!-- 服务政策 -->
  <van-overlay :show="serviceAgreementShow" :lock-scroll="false" z-index="110" 0>
    <div class="wrapper" @click.stop>
      <ServiceAgreementModal @close="serviceAgreementShow = false"/>
    </div>
  </van-overlay>
</template>
<script setup>
import {ref, computed, toRef} from 'vue';
import {getImageCode, getLogin, getSendSmsCode} from '@/api/user';
import {useLoginStoreHook} from "@/store/loginStore";
import {isCaptcha, isCaptchaImg, isPhone, isRead} from "@/utils/utils";
import {showFailToast, showToast} from "vant";
import ServiceAgreementModal from "@/components/ServiceAgreementModal/index.vue";

const props = defineProps({});

const userLogin = useLoginStoreHook()
const privacyPolicyShow = ref(false); // 隐私政策
const serviceAgreementShow = ref(false); // 服务协议

// 图像验证码
const verificationCode = ref('');

const emits = defineEmits(["close"]);

// 点击刷新验证码
const handleRefreshCode = () => {
  userLogin.handleRefreshCode()
};

// 点击发送验证码
const handleSendCode = async () => {
  //验证手机号码是否正确
  if (!isPhone(userLogin.userPhone)) {
    return
  }
  if (userLogin.flag === false) {
    // 调用 验证码api接口
    getSendSmsCode({mobile: userLogin.userPhone, code: userLogin.captcha}).then((res) => {
      if (res.code !== 0) {
        showFailToast(res.msg)
      } else {
        showToast(res.msg)
        userLogin.getCaptchaCountdown()
      }
    })
  }
}

// 点击确认登录
const handleConfirm = () => {
  if (!isPhone(userLogin.userPhone)) {
    return
  }
  if (!isCaptcha(userLogin.userCaptcha)) {
    return
  }
  if (!isCaptchaImg(userLogin.captcha)) {
    return
  }
  if (!isRead(userLogin.isRead)) {
    return;
  }
  getLogin({mobile: userLogin.userPhone, code: userLogin.userCaptcha}).then((res) => {
    if (res.code !== 0) {
      showFailToast(res.msg)
    } else {

    }
  }).catch((err) => {
    showFailToast(err.msg)
  })
}

// 查看隐私政策
const handlePrivacyPolicy = () => {
  // 打开隐私政策页面
  privacyPolicyShow.value = true
}
// 查看服务协议
const handleServiceAgreement = () => {
  // 打开服务协议页面
  serviceAgreementShow.value = true
}

const closeModal = () => {
  emits("close");
};
</script>
<style lang="less">
.login-modal {
  width: 680px;
  height: auto;
  margin: 0 auto;
  position: fixed; // 添加这一行，使弹窗浮动
  top: 50%; // 添加这一行，使弹窗垂直居中
  left: 50%; // 添加这一行，使弹窗水平居中
  transform: translate(-50%, -50%); // 添加这一行，使弹窗居中
  box-sizing: border-box;
  overflow: hidden;

  .form_verify {
    margin: 0 auto;
    padding: 108px 40px 40px;
    position: relative;
    width: 680px;
    min-height: 534px;
    border-radius: 20px;
    background-image: linear-gradient(#fff3cf, #ffbfa6);
    /*内阴影*/
    box-shadow: 0 0 8px 1px #f9a892 inset;
    //outline: #fff3cf solid thick;
    box-sizing: border-box;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: -6px;
      left: -6px;
      right: -6px;
      bottom: -6px;
      border-radius: 20px;
      border: thick solid #fff3cf;
      pointer-events: none;
    }

    .confirm-button {
      margin: 20px auto 0;
      width: 280px;
      height: 70px;
      line-height: 70px;
      font-weight: 600;
      font-size: 32px;
      text-align: center;
      border-radius: 60px;
      color: #ffffff;
      background: linear-gradient(to right, #fa8a16 0%, #ff7348 100%);
    }

    .form_con_header {
      text-align: center;
      font-size: 38px;
      color: #282828;
      font-weight: bold;
      line-height: 1.5em;
    }

    .form-con {
      margin: 30px 0;
      position: relative;
      box-sizing: border-box;

      .form-input {
        display: block;
        padding: 0 0 0 22px;
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: left;
        font-size: 32px;
        color: #333;
        font-weight: 500;
        border-radius: 20px;
        box-shadow: 2px 3px 4px #c6c3c3;
        border: none;
        background: #ffffff;
        box-sizing: border-box;

        .input-field_btn {
          color: #e93426;
          font-size: 32px;
          line-height: 1.5em;
          font-weight: 500;
        }
      }

      .verification-code-img {
        position: absolute;
        top: 6px;
        right: 8px;
        width: 172px;
        height: 90px;
        border-radius: 16px;
        overflow: hidden;
      }
    }

    .text-con {
      margin-top: 40px;

      p {
        text-align: justify;
        font-size: 24px;
        color: #666666;
        line-height: 1.5em;
        font-weight: 500;
      }

      .info {
        margin-top: 10px;
        text-align: left;
        display: flex;
        align-items: center;

        span {
          margin-right: 15px;
          width: 8px;
          height: 8px;
          background-color: #666666;
          border-radius: 50%;
        }
      }

      .checkbox-con {
        margin-top: 10px;

        .checkbox-btn {
          margin-top: 4px;
          float: left;
          --van-checkbox-size: 28px;
          --van-white: #f10404;
        }

        .van-checkbox__icon .van-icon {
          border: 4px solid #7e7e7e;
        }

        .van-checkbox__icon--checked .van-icon {
          color: #f10404;
          background-color: transparent;
          border-color: #f10404;
        }

        .checkbox-text {
          text-indent: 20px;
          font-size: 28px;
          font-weight: 500;
          line-height: 1.5em;
          color: #666666;

          span {
            color: #f10404;
            text-decoration: underline #f10404;
          }
        }
      }
    }
  }

  .close-btn {
    display: block;
    margin: 20px auto 0;
    width: 140px;
    height: 60px;
  }
}

.van-stepper--round .van-stepper__plus {
  background: #ff3c01;
}

.van-stepper--round .van-stepper__minus {
  color: #ff3c01;
  border: 1px solid #ff3c01;
}
</style>
