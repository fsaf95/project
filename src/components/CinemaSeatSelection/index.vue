<script setup lang="ts">
import {ref} from 'vue'
import {showToast} from "vant";

// 定义座位布局
const seats = ref([
  ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'],
  ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'],
  ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'],
  ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'],
  ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'available']
])

// 处理选座逻辑
const selectSeat = (rowIndex: number, colIndex: number) => {
  const seat = seats.value[rowIndex][colIndex]; // 获取当前座位状态
  if (seat === 'available') {
    seats.value[rowIndex][colIndex] = 'selected'; // 将当前座位状态改为已选
  } else if (seat === 'selected') {
    seats.value[rowIndex][colIndex] = 'available'; // 将当前座位状态改为可选
  }
}

// 处理确认选座逻辑
const confirmSelection = () => {
  const selectedSeats = [];
  seats.value.forEach((row, rowIndex) => {
    row.forEach((seat, colIndex) => {
      if (seat === 'selected') {
        selectedSeats.push({row: rowIndex + 1, col: colIndex + 1}); // 将已选座位的行列号添加到数组中
      }
    });
  });

  if (selectedSeats.length > 0) {
    showToast(`您已选择座位:${selectedSeats.join(',')}`)
    //   这里可以添加提交选座信息到后端的逻辑
  } else {
    showToast('请选择至少一个座位');
  }
}
</script>

<template>
  <div class="cinema-seat-selection">
    <h2>电影院选票选座位</h2>
    <div class="screen">屏幕</div>
    <div class="seats-container">
      <div v-for="(row,rowIndex) in seats" :key="rowIndex" class="seat-row">
        <div v-for="(seat,colIndex) in row" :key="colIndex" :class="{
          seat: true,
          'seat-available': seat === 'available',
          'seat-selected':seat === 'selected',
         'seat-unavailable': seat === 'unavailable'
        }"
             @click="selectSeat(rowIndex,colIndex)">
          {{ colIndex + 1 }}
        </div>
      </div>
    </div>
    <van-button @click="confirmSelection" type="primary">确认选座</van-button>
  </div>
</template>

<style scoped lang="less">
.cinema-seat-selection {
  padding: 20px;
  text-align: center;

  .screen {
    background-color: #333;
    color: white;
    padding: 10px;
    margin-bottom: 20px;
  }

  .seats-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .seat-row {
    display: flex;
    margin-bottom: 10px;
  }

  .seat {
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
  }

  .seat--available {
    background-color: #ccc;
  }

  .seat--selected {
    background-color: #007bff;
  }

  .seat--unavailable {
    background-color: #999;
    cursor: not-allowed;
  }
}
</style>
