<script lang="ts">
// 订单列表
import {defineComponent, ref, toRef} from 'vue'
import {useRouter} from "vue-router";
import Bank from "@/assets/image/img.png";
import {useOrderStoreHook} from "@/store/orderStore";

export default defineComponent({
  name: "index",
  setup() {
    const router = useRouter();
    const useOrderStore = useOrderStoreHook()
    const orderListTitle = ref("我的订单")
    const orderListData = ref([
      {
        sku_id: 1,
        sku_name: "ICBC",
        sku_title: "ICBC",
        order_no: "20230613123456789",
        obtain_time: "2023-06-13 12:34:56"
      },
      {
        sku_id: 2,
        sku_name: "ICBC",
        sku_title: "ICBC",
        order_no: "20230613123456789",
        obtain_time: "2023-06-13 12:34:56"
      },
      {
        sku_id: 3,
        sku_name: "ICBC",
        sku_title: "ICBC",
        order_no: "20230613123456789",
        obtain_time: "2023-06-13 12:34:56"
      },
    ])
    // 跳转到订单结果页
    const handleGoResult = (value: string) => {
      // alert("订单列表里的订单号："+value)
      router.push({path: '/actResult', query: {order_no: value}})
    }
    // 跳转到订单详情页
    const handleGoDetail = (value: number) => {
      // console.log(value, 8666)
      router.push({path: '/actDetail', query: {skuId: value}})
    }

    return {
      router,
      orderListTitle,
      orderListData,
      Bank,
      useOrderStore,
      handleGoResult,
      handleGoDetail
    }
  }
})


</script>

<template>
  <!-- 页头 -->
  <van-nav-bar :title="orderListTitle" class="nav-bar_header" fixed left-arrow @click-left="() => {router.go(-1)}"/>
  <van-list class="order-list">
    <van-cell v-for="(item,index) in orderListData" :key="index">
      <div class="card-box">
        <div class="card-img">
          <img :src="Bank"/>
        </div>
        <div class="order-con">
          <div class="order-header">
            <div class="header-l">
              <p class="t">{{ item.sku_name }}</p>
              <p>{{ item.sku_title }}</p>
            </div>
            <div class="header-r">
              <p class="state">{{ useOrderStore.getState[1].payName }}</p>
              <!--              <p>09:59:00</p>-->
            </div>
          </div>
          <div class="border mt15 mb15"></div>
          <div class="order-content">
            <div class="order-content-l">
              <p>订单号： {{ item.order_no }}</p>
              <p>兑换时间： {{ item.obtain_time }}</p>
            </div>
            <div class="order-content-r">
              <van-button class="btn_l" size="small" type="danger" @click="handleGoResult(item.order_no)">查看订单
              </van-button>
              <van-button class="btn_r" size="small" type="default" @click="handleGoDetail(item.sku_id)">商品详情
              </van-button>
            </div>
          </div>
        </div>
      </div>
    </van-cell>
  </van-list>

  <div class="foot">
    <div>仅展示近12个月的订单</div>
    <div>客服热线：400-8808-248</div>
  </div>
</template>

<style scoped lang="less">
.order-list {
  width: 100%;
  height: 100%;
  padding: 120px 20px 0;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;

  .van-cell {
    margin-bottom: 1rem;
    border-radius: 20px;
    padding: 30px 20px;
  }

  .border {
    width: 100%;
    border: 2px dashed #e5e5e5;
  }

  .card-box {
    display: flex;
    align-items: center;

    .card-img {
      flex: 0 0 165px;
      width: 165px;
      height: 233px;
    }

    .order-con {
      flex: auto;
      padding-left: 20px;
    }

    .order-header {
      display: flex;
      justify-content: space-between;

      p {
        text-align: left;
        font-size: 26px;
        color: #999999;
        line-height: 1.6em;
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis; /* 显示省略号 */
      }

      .header-l {
        flex: 0 0 360px;

        p {
          font-size: 24px;
          color: #333333;
        }

        .t {
          color: #333333;
          font-size: 28px;
          font-weight: bold;
        }
      }

      .header-r {
        flex: auto;

        p {
          text-align: right;
        }

        .state {
          color: #d42402;
          font-weight: bold;
        }

        .state.fail {
          color: #999999;
        }
      }
    }

    .order-content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        text-align: left;
        font-weight: 500;
        color: #999999;
        line-height: 1.8em;
        font-size: 24px;
        /*让长段文本不换行*/
        white-space: nowrap;
        /*设置文本超出元素宽度部分隐藏*/
        overflow-x: hidden;
        /*设置文本超出部分用省略号显示*/
        text-overflow: ellipsis;
      }

      .order-content-l {
        flex: 0 0 360px;
        width: 360px;
      }

      .order-content-r {
        flex: auto;

        .btn_l {
          padding: 0;
          font-size: 24px;
          color: #ffffff;
          font-weight: 500;
          width: 124px;
          height: 50px;
        }

        .btn_r {
          padding: 0;
          margin-top: 20px;
          font-size: 24px;
          color: #f04231;
          font-weight: 500;
          width: 124px;
          height: 50px;
          border: 1px solid #d42402;
        }
      }
    }
  }
}

.foot {
  color: #666666;
  font-size: 28px;
  letter-spacing: .1rem;
  line-height: 1.6em;
  padding: 0 0 30px;
}
</style>
