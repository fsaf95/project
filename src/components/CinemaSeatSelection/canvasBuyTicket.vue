<script setup lang="ts">
//使用ref定义一个引用，用于存储canvas元素
import {onMounted, ref} from "vue";

const canvasRef = ref<HTMLCanvasElement | null>(null);
// 定义座位的行数和列数
const rows = 10;
const cols = 10;

// 定义每个座位的大小
const seatSize = 40;

// 定义座位之间的间距
const seatGap = 10;

// 初始化座位状态，所有座位都为false，表示未选中
const seatStatus = ref(new Array(rows).fill(false).map(() => new Array(cols).fill(false)));

// 当组件挂载时，调用drawSeats函数绘制座位
onMounted(() => {
  // drawSeats();
})

const drawSeats = () => {
//   初始化画布
  const canvas = canvasRef.value;
  const ctx = canvas?.getContext('2d');
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 绘制座位
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // 计算座位的位置
      const x = col * (seatSize + seatGap);
      const y = row * (seatSize + seatGap);

      //   根据座位状态设置填充颜色
      ctx.fillStyle = seatStatus.value[row][col] ? 'red' : 'green';
      // 绘制座位矩形
      ctx.fillRect(x, y, seatSize, seatSize);
    }
  }
}

// 处理点击事件
const handleClick = event => {
  const canvas = canvasRef.value!;

  // 获取canvas的边界矩形
  const rect = canvas.getBoundingClientRect();
  // 计算canvas的缩放比例
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  // 计算点击位置相对于canvas左上角的坐标
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;

  // 根据点击位置计算对应的座位列和行
  const col = Math.floor(x / (seatGap + seatSize));
  const row = Math.floor(y / (seatGap + seatSize));

  // 切换座位状态
  seatStatus.value[row][col] = !seatStatus.value[row][col];
  // 重新绘制座位
  drawSeats();
};
// 定义座位选项的接口
interface SeatOptions {
  row: number;
  clo: number;
}

// 使用ref来存储选中的座位状态
const checkedStatus = ref<SeatOptions[]>({});

// 检出函数，用于重置选中的座位
const checkOut = () => {
  checkedStatus.value = []; // 清空选中座位列表

  // 遍历所有座位
  for (let row = 0; row < rows; row++) {
    for (let clo = 0; clo < cols; clo++) {
      // 如果座位被选中，则添加到选中列表中
      if (seatStatus.value[row][clo]) {
        checkedStatus.value.push({
          row: row + 1, // 行号+1，因为行号通常从1开始
          clo: clo + 1  // 列号+1，因为列号通常从1开始
        });
      }
    }
  }
}

</script>

<template>
  <div class="mt-10">
    <!-- 使用ref="canvasRef"来引用canvas元素 -->
    <canvas ref="canvasRef" class="canvas-box" width="500" height="600" @click="handleClick"></canvas>
    <!--  点击按钮时调用checkOut函数-->
    <button @click="checkOut">结算</button>
    <!--  显示选中的票信息-->
    <div>选中的票{{ checkedStatus }}</div>
  </div>
</template>

<style scoped lang="less">

</style>
