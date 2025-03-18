<template>
  <div class="cinema-seat-selection">
    <h2>电影院选票选座位</h2>
    <div class="screen">屏幕</div>
    <div class="seats-container">
      <div
        v-for="(row, rowIndex) in seats"
        :key="rowIndex"
        class="seat-row"
      >
        <div
          v-for="(seat, colIndex) in row"
          :key="colIndex"
          :class="{
            seat: true,
            'seat--available': seat.status === 'available',
            'seat--selected': seat.status === 'selected',
            'seat--unavailable': seat.status === 'unavailable'
          }"
          @click="selectSeat(rowIndex, colIndex)"
        >
          {{ seat.label }}
        </div>
      </div>
    </div>
    <div class="selected-seats-info">
      <p v-if="selectedSeats.length > 0">
        已选座位: {{ selectedSeats.map(seat => seat.label).join(', ') }}
      </p>
      <p v-else>还未选择座位</p>
    </div>
    <van-button @click="confirmSelection" type="primary" :disabled="selectedSeats.length === 0">
      确认选座
    </van-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';

// 最大选座数量
const MAX_SELECTED_SEATS = 4;

// 初始化座位布局
const seats = ref([
  [
    { label: 'A1', status: 'available' },
    { label: 'A2', status: 'available' },
    { label: 'A3', status: 'available' },
    { label: 'A4', status: 'available' },
    { label: 'A5', status: 'available' },
    { label: 'A6', status: 'available' },
    { label: 'A7', status: 'available' },
    { label: 'A8', status: 'available' }
  ],
  [
    { label: 'B1', status: 'available' },
    { label: 'B2', status: 'available' },
    { label: 'B3', status: 'available' },
    { label: 'B4', status: 'available' },
    { label: 'B5', status: 'available' },
    { label: 'B6', status: 'available' },
    { label: 'B7', status: 'available' },
    { label: 'B8', status: 'available' }
  ],
  [
    { label: 'C1', status: 'available' },
    { label: 'C2', status: 'available' },
    { label: 'C3', status: 'available' },
    { label: 'C4', status: 'available' },
    { label: 'C5', status: 'available' },
    { label: 'C6', status: 'available' },
    { label: 'C7', status: 'available' },
    { label: 'C8', status: 'available' }
  ],
  [
    { label: 'D1', status: 'available' },
    { label: 'D2', status: 'available' },
    { label: 'D3', status: 'available' },
    { label: 'D4', status: 'available' },
    { label: 'D5', status: 'available' },
    { label: 'D6', status: 'available' },
    { label: 'D7', status: 'available' },
    { label: 'D8', status: 'available' }
  ],
  [
    { label: 'E1', status: 'available' },
    { label: 'E2', status: 'available' },
    { label: 'E3', status: 'available' },
    { label: 'E4', status: 'available' },
    { label: 'E5', status: 'available' },
    { label: 'E6', status: 'available' },
    { label: 'E7', status: 'available' },
    { label: 'E8', status: 'available' }
  ]
]);

// 存储已选座位
const selectedSeats = ref([]);

// 处理选座逻辑
const selectSeat = (rowIndex: number, colIndex: number) => {
  const seat = seats.value[rowIndex][colIndex];
  if (seat.status === 'available') {
    if (selectedSeats.value.length >= MAX_SELECTED_SEATS) {
      showToast(`最多只能选择 ${MAX_SELECTED_SEATS} 个座位`);
      return;
    }
    seat.status = 'selected';
    selectedSeats.value.push(seat);
  } else if (seat.status === 'selected') {
    seat.status = 'available';
    const index = selectedSeats.value.indexOf(seat);
    if (index > -1) {
      selectedSeats.value.splice(index, 1);
    }
  }
};

// 确认选座
const confirmSelection = () => {
  if (selectedSeats.value.length > 0) {
    showToast(`您已选择座位: ${selectedSeats.value.map(seat => seat.label).join(', ')}`);
    // 这里可以添加提交选座信息到后端的逻辑
    // 清空已选座位
    selectedSeats.value.forEach(seat => {
      seat.status = 'available';
    });
    selectedSeats.value = [];
  }
};
</script>

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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }

  .seat--available {
    background-color: #ccc;
  }

  .seat--selected {
    background-color: #007bff;
    color: white;
  }

  .seat--unavailable {
    background-color: #999;
    cursor: not-allowed;
  }

  .selected-seats-info {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
