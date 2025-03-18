<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import ServiceAgreementModal from "@/components/ServiceAgreementModal/index.vue";
import QRCodeModule from "@/views/home/component/QRCodeModule.vue";
import ClaimPromptModule from "@/views/home/component/claimPromptModule.vue";
import CreateShareModule from "@/views/home/component/createShareModule.vue";
import TicketListModule from "@/views/home/component/ticketListModule.vue";
import SucceedModule from "@/views/home/component/succeedModule.vue";
import {showFailToast} from "vant";
import {useUser} from "@/store/user";
import {useLoginStoreHook} from "@/store/loginStore";
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  name: "index",
  components: {
    SucceedModule,
    TicketListModule,
    CreateShareModule,
    ClaimPromptModule,
    QRCodeModule,
    ServiceAgreementModal
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const useUserInfo = useUser()
    const userLogin = useLoginStoreHook()
    const skuId = ref("3134") // 选择领取的skuId
    const succeedShow = ref(false)  // 领取成功弹窗
    const createShareShow = ref(false) // 分享弹窗
    const claminPromptShow = ref(false) // 打卡成功弹窗
    const showLoginModal = ref(false); // 显示登录弹窗
    const privacyPolicyShow = ref(false); // 显示隐私政策弹窗
    const serviceAgreementShow = ref(false); // 显示服务政策弹窗


// 登录弹窗
    const handleLoginConfirm = () => {
      showLoginModal.value = true // 显示登录弹窗
    }


// 关闭打卡弹窗显示领券弹窗
    const handleClaminPrompt = () => {
      claminPromptShow.value = false;
      useUserInfo.ticketListShow = true;
    }

//确认领取优惠券
    const handleConfirmChange = (sku_id: any) => {
      skuId.value = sku_id
      if (sku_id) {
        getCouponObtain({skuId: sku_id}).then(res => {
          if (res.code !== 0) {
            useUserInfo.handleErrorCode(res.code, res.msg)
          } else {
            useUserInfo.ticketListShow = false // 隐藏选择优惠券弹窗
            succeedShow.value = true // 领取成功弹窗
            useUserInfo.handleActStock("3133,3134,3135")
          }
        }).catch(error => {
          useUserInfo.handleErrorCode(error.code, error.msg)
        })
      } else {
        showFailToast("请选择优惠券！")
      }
    }

    onMounted(() => {
      userLogin.handleRefreshCode() // 刷新验证码
      // useUserInfo.handleOauthCheckForOther()
    })
    return {
      router,
      route,
      handleLoginConfirm,
      handleClaminPrompt,
      handleConfirmChange,
      showLoginModal,
      useUserInfo,
      claminPromptShow,
      succeedShow,
      skuId,
      privacyPolicyShow,
      serviceAgreementShow,
      createShareShow
    }
  }
})
</script>

<template>
  <div class="home">
    <div class="banner"></div>
    <div class="home_content">
      <!--    侧边导航栏  -->
      <Sidebar/>
      <!--   立减金展示模块   -->
      <PrizeDisplay @handleEmitLoginConfirm="handleLoginConfirm"/>
      <!--   商品活动内容介绍模块   -->
      <ActivityContent/>
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
    <!--  登录弹窗  -->
    <van-overlay :show="showLoginModal" :lock-scroll="false" z-index="110" @click="showLoginModal = false">
      <div class="wrapper" @click.stop>
        <LoginModal @close="showLoginModal = false"/>
      </div>
    </van-overlay>

    <!--  隐私政策弹窗  -->
    <van-overlay :show="privacyPolicyShow" :lock-scroll="false" z-index="110" @click="privacyPolicyShow = false">
      <div class="wrapper" @click.stop>
        <PrivacyPolicyModal @close="privacyPolicyShow = false"/>
      </div>
    </van-overlay>
    <!--  服务政策  -->
    <van-overlay :show="serviceAgreementShow" :lock-scroll="false" z-index="110" @click="serviceAgreementShow = false">
      <div class="wrapper" @click.stop>
        <ServiceAgreementModal @close="serviceAgreementShow = false"/>
      </div>
    </van-overlay>
  </div>
</template>

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
  min-height: 600px;
  background: #ffc6ba;
  overflow: hidden;

  .banner {
    width: 750px;
    height: 942px;
    background: url("@/assets/image/hone_bg.png") no-repeat;
    background-size: contain;
  }

  .home_content {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: auto;
    box-sizing: border-box;
  }
}

</style>
