<script setup lang="ts">
import {ref} from 'vue';

const emit = defineEmits(['handleEmitLoginConfirm'])

// 立减金券数组
const couponList = ref([
  {
    name: '立减金券1',
    price: 5,
    threshold: 5.01,
    validTime: '2025-02-20 至 2025-02-28'
  },
  {
    name: '立减金券2',
    price: 3,
    threshold: 3.01,
    validTime: '2025-02-22 至 2025-03-05'
  },
  {
    name: '立减金券3',
    price: 2,
    threshold: 2.01,
    validTime: '2025-02-25 至 2025-03-10'
  }
]);
const handleLoginConfirm = () => {
  emit('handleEmitLoginConfirm')
}
</script>

<template>
  <!--商品展示组件模块-->
  <div class="form_prize-preview">
    <div class="form_con_header">
      <img src="https://static.ldvip.cn/icbc/newCustom2024/img/3_title_2.png" alt="">
    </div>
    <div class="coupon-container">
      <!-- 按步长为 2 循环 -->
      <div
          class="coupon-row"
          v-for="(coupon, index) in couponList"
          :key="index"
      >
        <div class="crosswise-card">
          <p class="text-name">{{ coupon.name }}</p>
          <p class="text-request">满<span>{{ coupon.threshold }}</span>元使用</p>
          <p class="text-amount"><span>￥</span>{{ coupon.price }}</p>
          <p class="text-valid-time">{{ coupon.validTime }}</p>
        </div>
      </div>
    </div>
    <div
        class="form-btn mx-auto rounded-[30px] w-[300px] h-[60px] leading-[60px] text-center bg-red-400 text-[#ffffff] text-[28px]"
        @click="handleLoginConfirm">立即领取
    </div>
  </div>
</template>

<style scoped lang="less">
.form_prize-preview {
  position: relative;
  margin: 20px auto;
  padding: 20px;
  width: 680px;
  min-height: 400px;
  background: #ffffff;
  border-radius: 20px;
  // 阴影
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  .form_con_header {
    width: 200px;
    height: 60px;
    margin: 0 auto;
  }

  .form-btn {

  }
}

.coupon-container {
  display: flex;
  flex-wrap: wrap;
  /* 调试样式，添加边框方便查看容器范围 */
}

.coupon-row {
  flex: 1 1 50%;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;

  .crosswise-card {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box; /* 确保内边距和边框包含在宽度内 */
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.text-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.text-request {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.text-amount {
  font-size: 24px;
  font-weight: bold;
  color: #f00;
  margin-bottom: 5px;
}

.text-valid-time {
  font-size: 12px;
  color: #999;
}
</style>
