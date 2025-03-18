import {showToast} from "vant";
import wx from "weixin-js-sdk";

// 判断是否在微信浏览器中
export const isWeixin = () => {
  var isMiniprogram = false;
  wx.miniProgram.getEnv(function (res) {
    if (res.miniprogram) {
      isMiniprogram = res.miniprogram;
    }
  });
  return isMiniprogram;
}

// 手机号码验证
export const isPhone = (phone: string) => {
  const regExp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  if (!phone) {
    showToast('请输入手机号码！')
    return false;
  } else if (!regExp.test(phone)) {
    showToast('请输入正确的手机号码！')
    return false;
  } else {
    return true;
  }
};

// 短信验证码验证
export const isCaptcha = (captcha: string) => {
  const regExp = /^[0-9]{4}$/;
  if (!captcha) {
    showToast('请输入验证码！')
    return false;
  } else if (!regExp.test(captcha)) {
    showToast('请输入正确的验证码！')
    return false;
  } else {
    return true;
  }
}

// 图形验证码验证
export const isCaptchaImg = (captcha: string) => {
  const regExp = /^[0-9A-Za-z]{4}$/;
  if (!captcha) {
    showToast('请输入图形验证码！')
    return false
  } else if (!regExp.test(captcha)) {
    showToast('请输入正确的图形验证码！')
    return false
  } else {
    return true;
  }
}

// 是否阅读用户协议
export const isRead = (isRead: boolean) => {
  if (!isRead) {
    showToast('请阅读用户协议！')
    return false;
  } else {
    return true;
  }
};

// 清除浏览器历史栈
export const clearHistory = () => {
  window.history.pushState(null, '', window.location.href);
};
