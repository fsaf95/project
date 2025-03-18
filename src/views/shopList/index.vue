<script lang="ts">
import {defineComponent, ref} from 'vue'
import {Search2, Left, Photograph, Message} from '@nutui/icons-vue'

export default defineComponent({
  name: "index",
  components: {Message, Photograph, Search2, Left},
  setup() {
    const url = 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
    const cityVal = ref(0)
    const shopVal = ref(0)
    const cityOptions = ref([
      {text: '筛选城市', value: 0},
      {text: '新款商品', value: 1},
      {text: '活动商品', value: 2}
    ])
    const shopOptions = ref([
      {text: '筛选商户', value: 0},
      {text: '好评排序', value: 1},
      {text: '销量排序', value: 2}
    ])
    const filtrateValue = ref('') // 筛选按钮的值
    const searchbarVal = ref('1231') // 搜索框的值
    const columns = ref([
      {
        title: '城市名称',
        key: 'cityName',
        align: 'center',
        stylehead: {
          width: '100px',
          background: '#bdbcbc',
          border: 'none',
          fontSize: '12px'
        },
        stylecolumn: {
          fontSize: '12px'
        }
      },
      {
        title: '活动商家',
        key: 'eventMerchant',
        align: 'center',
        stylehead: {
          width: '100px',
          background: '#bdbcbc',
          border: 'none',
          fontSize: '12px'
        },
        stylecolumn: {
          fontSize: '12px'
        }
      },
      {
        title: '商户地址',
        key: 'merchantAddress',
        align: 'center',
        stylehead: {
          background: '#bdbcbc',
          border: 'none',
          fontSize: '12px'
        },
        stylecolumn: {
          fontSize: '12px'
        }
      }
    ]) // 表头
    const data = ref([
      {
        cityName: '广东省广州市',
        eventMerchant: '广东百货',
        merchantAddress: '广东省广州市海珠区海珠路2号'
      },
      {
        cityName: '广东省广州市',
        eventMerchant: '广东百货',
        merchantAddress: '广东省广州市海珠区海珠路2222222222223333333322号'
      },
      {
        cityName: '广东省广州市',
        eventMerchant: '广东百货',
        merchantAddress: '广东省广州市海珠区海珠路2号'
      }
    ]) // 表格数据
    const page = ref(1) // 页码
    const collapseVal = ref(['name2']) // 折叠面板
    const change = (value: number) => {
      console.log(value)
    }
    const handleFiltratePopupClick = () => {
      console.log(111)
    }
    const handleCollapseChange = (modelValue: string[], name: string, status: boolean) => {
      console.log(modelValue, name, status)
    }
    const onSearch = () => {

    }
    return {
      url,
      cityVal,
      shopVal,
      cityOptions,
      shopOptions,
      columns,
      searchbarVal,
      data,
      page,
      filtrateValue,
      collapseVal,
      change,
      handleFiltratePopupClick,
      handleCollapseChange,
      onSearch
    }
  }
})
</script>

<template>
  <!--  门店列表页面-->
  <div class="shopList">
    <div class="banner">
      <nut-image :src="url"/>
    </div>
    <van-search
        class="filtrate-btn"
        v-model="filtrateValue"
        show-action
        label="关键字"
        placeholder="请输入店铺关键字/店铺名"
        @search="onSearch"
    >
      <template #action>
        <div @click="handleFiltratePopupClick">搜索</div>
      </template>
    </van-search>
    <div class="menu-filtrate">
      <nut-menu>
        <nut-menu-item v-model="cityVal" :options="cityOptions"/>
        <nut-menu-item v-model="shopVal" :options="shopOptions"/>
      </nut-menu>
    </div>
    <div class="card">
      <div class="title">参与活动门店列表</div>
      <div class="table">
        <nut-table :columns="columns" :data="data"></nut-table>
        <div class="table-pagination">
          <p>总数：{{}}</p>
          <nut-pagination v-model="page" :total-items="80" :items-per-page="5" @change="change"/>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="less">
.shopList {
  width: 100%;
  height: auto;
  background: #ffffff;
  box-sizing: border-box;

  .card {
    margin: 20px auto;
    padding: 20px;
    width: 700px;
    min-height: 300px;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    box-shadow: 3px 4px 8px 2px rgba(51, 51, 51, 0.29);
    box-sizing: border-box;

    .title {
      width: 100%;
      height: auto;
      font-size: 28px;
      font-weight: 600;
      text-align: left;
      color: #333333;
    }

    .table {
      margin-top: 10px;
      width: 100%;
      height: auto;

      .table-pagination {
        margin: 20px auto 0;
        box-sizing: border-box;

        .nut-pagination {
          justify-content: center;
          font-size: 24px;

        }
      }
    }
  }

  .filtrate-btn {
    position: relative;
    margin: 30px 25px 0;
    padding: 14px 10px;
    box-sizing: border-box;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    font-size: 26px;
    font-weight: 500;
    background: #ffffff;
    text-align: left;
    color: #333333;

    :deep(.van-search__content) {
      background: transparent;
    }

    :deep(.van-search__label) {
      font-size: 24px;
    }

    :deep(.van-cell) {
      font-size: 24px;
    }

    :deep(.van-icon) {
      font-size: 24px;
    }

    :deep(.van-search__action) {
      font-size: 24px;
    }
  }

  .menu-filtrate {
    position: relative;
    margin: 20px auto;
    width: 700px;
    height: auto;
    overflow: hidden;
    box-sizing: border-box;
    background: #ebedf0;
    box-shadow: 3px 4px 8px 2px rgba(51, 51, 51, 0.29);
    border-radius: 10px;
    /* Vue3 使用 :deep() */

    :deep(.nut-menu) {
      //  /* 修改内部文字 */
      .nut-menu__item {
        font-size: 24px;
      }

      .nut-menu-item__content .nut-menu-item__option {
        font-size: 24px;
      }

      //  .nut-popup--top {
      //    width: 700px;
      //    left: 50%;
      //    transform: translate(-50%, 0);
      //  }
    }

  }
}
</style>
