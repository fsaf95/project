<template>
  <div class="home_content">
    <div class="loading_con" v-if="loadingState">
      <van-loading size="40px" color="#ffffff" vertical>
        <div class="text-[28px] mt-[10px]">分享图片加载中...</div>
      </van-loading>
    </div>
    <div class="home" v-else>
      <div class="float-nav">
        <div class="btn-rule" @click="pushToSynthesisPage(0)"></div>
        <div class="btn-prize" @click="pushToSynthesisPage(1)"></div>
        <div class="btn-record" @click="pushToSynthesisPage(2)"></div>
      </div>
      <!--  气泡  -->
      <div class="bubble-ont"></div>
      <div class="bubble-two"></div>
      <div class="bubble-three"></div>
      <div class="bubble-car"></div>
      <div class="bubble-catering"></div>
      <div class="bubble-coke"></div>
      <div class="bubble-jiaChang"></div>
      <div class="bubble-face"></div>
      <div class="bubble-burger"></div>

      <div class="clockInBtn" @click="handleClockInChange">
        <img :src="useUserInfo.clockInState === 1 ? btnYLQ : btnYJDK" alt="" srcset="">
      </div>
      <div class="progress-box">
        <div class="progress-top">
          <div class="progress-top-btn" :class="item.state ? 'active' : ''"
               v-for="(item,index) in useUserInfo.progressData"
               :key="index"><img :src="imageSrc(item)" alt="" srcset="">
          </div>
        </div>
        <div class="dot" :class="progressCountClass[useUserInfo.progressCount].dot"></div>
        <div class="progress-bar">
          <div class="bar" :class="progressCountClass[useUserInfo.progressCount].bar"></div>
        </div>
      </div>
      <div class="footer-con">
        <div class="generatePicture" @click="handleUrl"></div>
      </div>

      <div class="poster_img" v-if="poster_state" id="poster-box">
        <div class="qr-code-box">
          <img :src="useUserInfo.createShareImg" alt="" srcset="">
        </div>
      </div>

      <!--领取列表-->
      <ticket-list-module :show="useUserInfo.ticketListShow" @handleCancel="useUserInfo.ticketListShow = false"
                          @handleConfirm="handleConfirmChange"/>
      <!-- 打卡成功提示弹窗-->
      <claim-prompt-module :show="claminPromptShow" @handleCancel="handleClaminPrompt"/>
      <!-- 领取成功提示弹窗 -->
      <succeed-module :show="succeedShow" :sku_id="skuId" @handleCancel="succeedShow = false"
                      @handleCheckOrder="router.push({path: '/synthesis', query: {index: 1}})"/>
      <!-- 关注公众号 -->
      <QRCodeModule :show="useUserInfo.QRShow" @handleCancel="useUserInfo.QRShow = false"/>
      <create-share-module :show="createShareShow" @handleCancel="createShareShow = false"/>
    </div>
  </div>
</template>

<script setup lang="ts" name="Home">
import {ref, onMounted, nextTick, watch} from "vue"
import {useRoute, useRouter} from "vue-router";
import {
  getClockIn,
  getCouponObtain,
  getShareMessage,
} from "@/api/user";
import {showFailToast, showToast} from "vant";
import TicketListModule from "@/views/home/component/ticketListModule.vue";
import ClaimPromptModule from "@/views/home/component/claimPromptModule.vue"
import SucceedModule from "@/views/home/component/succeedModule.vue";
import QRCodeModule from "@/views/home/component/QRCodeModule.vue";
import {useUser} from "@/store/user";
import CreateShareModule from "@/views/home/component/createShareModule.vue";
import btnYJDK from "@/assets/image/main_button_yjdk.png";
import btnYLQ from "@/assets/image/main_button_ylq_1.png";
import html2canvas from "html2canvas";

const router = useRouter()
const route = useRoute()
const useUserInfo = useUser()
const loadingState = ref(false);
const poster_state = ref(false)
const claminPromptShow = ref(false) // 打卡成功弹窗
const succeedShow = ref(false)  // 领取成功弹窗
const createShareShow = ref(false) // 生成分享二维码
const skuId = ref("3134") // 选择领取的skuId
const loginParams = ref({}); // e生活小程序打开活动页时携带的用户加密信息
const share_message = ref({}); // 分享者信息密串

const progressCountClass = ref({
  0: {bar: "bar0", dot: "dot"},
  1: {bar: "bar1", dot: "dot1"},
  2: {bar: "bar3", dot: "dot3"},
})

// 计算属性，用于确定显示哪个图片资源
const imageSrc = (item) => item.state ? item.img2 : item.img1;

onMounted(async () => {
  loginParams.value = route.query.loginParams // 获取用户加密信息
  share_message.value = route.query.elifeParam // 获取分享者信息密串
  if (share_message.value) {
    localStorage.setItem("SHARE", share_message.value)
  } else {
    share_message.value = localStorage.getItem("SHARE",)
  }
  if (!loginParams.value) {
    loginParams.value = localStorage.getItem("LOGINPARAMS",)
  } else {
    localStorage.setItem("LOGINPARAMS", loginParams.value)
  }
  // 调用授权验证接口
  await useUserInfo.handleOauthCheckForOther()
  // 调用授权接口
  await useUserInfo.handleOauthCheck()
  if (loginParams.value) {
    // 调用免密登录接口进行直接登录
    await useUserInfo.handleSzicbcLogin(loginParams.value)
  } else {
    showToast("获取登录参数失败，请重试！")
  }
  if (share_message.value) {
    // 调起助力接口
    await useUserInfo.handleAssistOp({share_message: share_message.value})
  }
  // 已登录
  if (useUserInfo.access_token) {
    // 调用打卡进度接口
    await useUserInfo.handleClockInProgress()
    await useUserInfo.handleObtainProgress()
  }
  await useUserInfo.handleActStock("3133,3134,3135")
})

const pushToSynthesisPage = (index) => {
  if (index === 0) {
    router.push({path: "/synthesis", query: {index: index}})
  } else {
    if (useUserInfo.access_token) {
      router.push({path: "/synthesis", query: {index: index}})
    } else {
      showFailToast("请先登录！")
    }
  }
}

// 打卡
const handleClockInChange = () => {
  useUserInfo.handleActStock("3133,3134,3135")
  getClockIn({share_message: share_message.value}).then(res => {
    if (res.code !== 0) {
      useUserInfo.handleErrorCode(res.code, res.msg)
    } else {
      // 打卡完成是否可以立即领券， true=可以，false=不可以
      claminPromptShow.value = res.data.can_obtain
      useUserInfo.handleClockInProgress()
    }
  }).catch(error => {
    useUserInfo.handleErrorCode(error.code, error.msg)
  })
}

// 关闭打卡弹窗显示领券弹窗
const handleClaminPrompt = () => {
  claminPromptShow.value = false;
  useUserInfo.ticketListShow = true;
}

//确认领取优惠券
const handleConfirmChange = (sku_id) => {
  skuId.value = sku_id
  if (sku_id) {
    getCouponObtain({skuId: sku_id}).then(res => {
      if (res.code !== 0) {
        useUserInfo.handleErrorCode(res.code, res.msg)
      } else {
        useUserInfo.ticketListShow = false // 隐藏选择优惠券弹窗
        succeedShow.value = true // 领取成功弹窗
        useUserInfo.handleObtainProgress()
        useUserInfo.handleActStock("3133,3134,3135")
      }
    }).catch(error => {
      useUserInfo.handleErrorCode(error.code, error.msg)
    })
  } else {
    showFailToast("请选择优惠券！")
  }
}

// 生成分享二维码图片
const handleUrl = () => {
  loadingState.value = true
  getShareMessage().then(res => {
    if (res.code !== 0) {
      loadingState.value = false;
      showFailToast(res.msg)
    } else {
      useUserInfo.createShareImg = "data:image/png;base64," + res.data.imgbase64Str
      loadingState.value = false;
      poster_state.value = true
      handlePoster()
    }
  }).catch(error => {
    showFailToast(error.msg)
  })
}
const handlePoster = () => {
  nextTick(async () => {
    await createPoster("poster-box")
    poster_state.value = false
  })
}
const createPoster = async (domId) => {
  let dom = document.getElementById(domId)
  let canvas = await html2canvas(dom, {
    useCORS: true, //支持图片跨域
    backgroundColor: null,
    width: dom.scrollWidth,
    height: dom.scrollHeight
  })
  useUserInfo.shareImg = canvas.toDataURL("image/png");
  createShareShow.value = true
}
</script>

<style scoped lang="less">
.loading_con {
  position: relative;
  width: 750px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(133, 133, 133);
  z-index: 1;
  overflow: hidden;
}

.home {
  margin: 0 auto;
  position: relative;
  width: 750px;
  min-height: 2476px;
  background: url("@/assets/image/main_background.jpg") no-repeat;
  background-size: contain;
  overflow: hidden;

  .poster_img {
    position: absolute;
    top: 0;
    left: 0;
    width: 750px;
    min-height: 1467px;
    border-radius: 20px;
    box-sizing: border-box;
    background: url("@/assets/image/create_share.png") no-repeat;
    background-size: contain;
    overflow: hidden;
    z-index: -1;

    .qr-code-box {
      margin: 794px 0 0 154px;
      width: 426px;
      height: 426px;
      border-radius: 10px;
    }
  }

  .float-nav {
    position: fixed;
    top: 100px;
    right: 0;
    width: 55px;
    height: auto;
    z-index: 100;

    .btn-rule {
      width: 55px;
      height: 130px;
      background: url("@/assets/image/main_right_hdgz.png") no-repeat;
      background-size: contain;
    }

    .btn-prize {
      margin-top: 20px;
      width: 55px;
      height: 130px;
      background: url("@/assets/image/main_right_wdjp.png") no-repeat;
      background-size: contain;
    }

    .btn-record {
      margin-top: 20px;
      width: 55px;
      height: 130px;
      background: url("@/assets/image/main_right_yqjl.png") no-repeat;
      background-size: contain;
    }
  }

  .bubble-ont {
    position: absolute;
    top: 102px;
    left: 152px;
    width: 182px;
    height: 192px;
    background: url("@/assets/image/title_jian.png") no-repeat;
    background-size: contain;
    animation: rotate 6s linear infinite; /* 应用动画，无限循环 */
    z-index: 1;
  }

  .bubble-two {
    position: absolute;
    top: 102px;
    right: 183px;
    width: 166px;
    height: 166px;
    background: url("@/assets/image/title_ka.png") no-repeat;
    background-size: contain;
    animation: rotate 5s linear infinite; /* 应用动画，无限循环 */
    z-index: 1;
  }

  .bubble-three {
    position: absolute;
    top: 216px;
    right: 59px;
    width: 264px;
    height: 237px;
    background: url("@/assets/image/title_ma.png") no-repeat;
    background-size: contain;
    animation: rotate1 8s linear infinite; /* 应用动画，无限循环 */
    z-index: 1;
  }

  .bubble-car {
    position: absolute;
    top: 464px;
    left: 4px;
    width: 171px;
    height: 176px;
    background: url("@/assets/image/left_car_qipao.png") no-repeat;
    background-size: contain;
    z-index: 1;
    transform: translate(-50%, -50%); /* 将div中心定位到视口中心 */
    animation: moveUpDown 2s ease-in-out infinite; /* 动画名称、持续时间、速度曲线和无限循环 */
  }

  .bubble-catering {
    position: absolute;
    top: 784px;
    left: 49px;
    width: 131px;
    height: 133px;
    background: url("@/assets/image/left_tea_qipao.png") no-repeat;
    background-size: contain;
    z-index: 1;
    transform: translate(-50%, -50%); /* 将div中心定位到视口中心 */
    animation: moveUpDown1 3s ease-in-out infinite; /* 动画名称、持续时间、速度曲线和无限循环 */
  }

  .bubble-coke {
    position: absolute;
    top: 630px;
    left: 25px;
    width: 131px;
    height: 133px;
    background: url("@/assets/image/left_cola_qipao.png") no-repeat;
    background-size: contain;
    z-index: 1;
    transform: translate(-50%, -50%); /* 将div中心定位到视口中心 */
    animation: moveLeftRight 5s ease-in-out infinite; /* 动画名称、持续时间、速度曲线和无限循环 */
  }

  .bubble-jiaChang {
    position: absolute;
    top: 470px;
    right: 58px;
    width: 133px;
    height: 137px;
    background: url("@/assets/image/right_dinner_qipao.png") no-repeat;
    background-size: contain;
    z-index: 1;
    transform: translate(-50%, -50%); /* 将div中心定位到视口中心 */
    animation: moveLeftRight1 3s ease-in-out infinite; /* 动画名称、持续时间、速度曲线和无限循环 */
  }

  .bubble-face {
    position: absolute;
    top: 645px;
    right: 4px;
    width: 143px;
    height: 143px;
    background: url("@/assets/image/right_noodles_qipao.png") no-repeat;
    background-size: contain;
    z-index: 1;
    transform: translate(-50%, -50%); /* 将div中心定位到视口中心 */
    animation: moveUpDown2 4s ease-in-out infinite; /* 动画名称、持续时间、速度曲线和无限循环 */
  }

  .bubble-burger {
    position: absolute;
    top: 832px;
    right: 70px;
    width: 123px;
    height: 123px;
    background: url("@/assets/image/right_hamburger_qipao.png") no-repeat;
    background-size: contain;
    z-index: 1;
    transform: translate(-50%, -50%); /* 将div中心定位到视口中心 */
    animation: moveLeftRight2 4s ease-in-out infinite; /* 动画名称、持续时间、速度曲线和无限循环 */
  }

  .clockInBtn {
    margin: 1070px auto 36px;
    width: 294px;
    height: 116px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .progress-box {
    position: relative;
    margin: 0 auto;
    padding-bottom: 15px;
    width: 664px;
    height: auto;
    overflow: hidden;

    .dot {
      position: absolute;
      top: 38px;
      left: 0;
      width: 50px;
      height: 43px;
      background: url("@/assets/image/main_six_jdt.png") no-repeat;
      background-size: contain;
      z-index: 111;
    }

    .dot1 {
      left: 84px;
    }

    .dot2 {
      left: 306px;
    }

    .dot3 {
      left: 528px;
    }

    .progress-top {
      margin: 0 34px 0 44px;
      width: 580px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .progress-top-btn {
        position: relative;
        width: 135px;
        height: 30px;
        background: transparent;
        box-sizing: border-box;
        z-index: 10;
      }
    }

    .progress-bar {
      position: relative;
      margin: 13px auto 0;
      padding: 0 4px;
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      overflow: hidden;

      .bar {
        width: 0;
        height: 28px;
        border-radius: 50px;
        background: linear-gradient(to left, #2d73f8, #4eb3ff);
      }

      .bar1 {
        width: 19%;
      }

      .bar2 {
        width: 52%;
      }

      .bar3 {
        width: 86%;
      }


    }
  }

  .footer-con {
    margin: 960px 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .invite {
      width: 308px;
      height: 66px;
      background: url("@/assets/image/main_yqhy.png") no-repeat;
      background-size: contain;
    }

    .generatePicture {
      width: 446px;
      height: 74px;
      background: url("@/assets/image/main_sctp.png") no-repeat;
      background-size: contain;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* 向上移动的距离，你可以根据需要调整 */
  }
}

@keyframes moveUpDown1 {
  0%, 100% {
    transform: translateY(4px);
  }
  50% {
    transform: translateY(-6px); /* 向上移动的距离，你可以根据需要调整 */
  }
}

@keyframes moveUpDown2 {
  0%, 100% {
    transform: translateY(6px);
  }
  50% {
    transform: translateY(-4px); /* 向上移动的距离，你可以根据需要调整 */
  }
}

@keyframes moveLeftRight {
  0%, 100% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px); /* 向右移动的距离，你可以根据需要调整 */
  }
}

@keyframes moveLeftRight1 {
  0%, 100% {
    transform: translateX(-4px);
  }
  50% {
    transform: translateX(8px); /* 向右移动的距离，你可以根据需要调整 */
  }
}

@keyframes moveLeftRight2 {
  0%, 100% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(14px); /* 向右移动的距离，你可以根据需要调整 */
  }
}
</style>

