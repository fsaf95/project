<script setup lang="ts">
import {showFailToast} from "vant";
import {useRouter} from "vue-router";
import {useLoginStoreHook} from "@/store/loginStore";
import list from "@/assets/image/main_right_yqjl.png"
import {ref} from "vue";

const router = useRouter()
const userLogin = useLoginStoreHook()
const sidebarList = ref([
  {id: 4, name: '我的订单', img: list, path: '/orderList'},
  {id: 5, name: '门店列表', img: list, path: '/shopList'},
  {id: 6, name: '活动规则-权益-邀请记录', img: list, path: '/synthesis'},
  {id: 7, name: '订单列表', img: list, path: '/orderList'},
  {id: 8, name: '订单列表', img: list, path: '/equityList'},
  {id: 9, name: '商品详情', img: list, path: '/productDetail'},
])

const pushToSynthesisPage = (index: number) => {
  if (index === 0) {
    router.push({path: "/synthesis", query: {index: index}})
  } else {
    if (userLogin.access_token) {
      router.push({path: "/synthesis", query: {index: index}})
    } else {
      showFailToast("请先登录！")
    }
  }
}

// 跳转
const handleGoto = (path: string) => {
  router.push({path: path})
}
</script>

<template>
  <!--侧边导航栏组件-->
  <div class="float-nav">
    <div class="rule-btn" v-for="item in sidebarList" @click="pushToSynthesisPage(item.id)">
      <div class="rule-btn-con my-[20px] p-[10px]" @click="handleGoto(item.path)">{{ item.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.float-nav {
  position: fixed;
  top: 100px;
  right: 0;
  width: 55px;
  height: 800px;
  z-index: 100;
  overflow-y: scroll;

  .rule-btn {
    margin: 10px auto;
    width: 55px;
    height: auto;
    box-sizing: border-box;
  }

  .rule-btn-con {
    position: relative;
    width: 55px;
    min-height: 130px;
    text-align: center;
    border-radius: 16px 0 0 16px;
    background: #ff9948;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  }

  .btn-record {
    margin-top: 20px;
    width: 55px;
    height: 130px;
  }
}
</style>
