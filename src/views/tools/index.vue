<script setup lang="ts" name="Tools">
import {getListApi, getListApiError} from "@/api/mock";
import {reactive, ref, onMounted, watchEffect, onUnmounted, nextTick} from "vue";
import {showFailToast, showSuccessToast} from "vant";
import "vant/es/toast/style";
import Fa6SolidAddressBook from "@iconify-icons/fa6-solid/address-book";
import Fa6SolidAppleWhole from "@iconify-icons/fa6-solid/apple-whole";
import Fa6SolidBaby from "@iconify-icons/fa6-solid/baby";
import Fa6SolidBasketball from "@iconify-icons/fa6-solid/basketball";
import Fa6SolidBurger from "@iconify-icons/fa6-solid/burger";
import Fa6SolidChessKnight from "@iconify-icons/fa6-solid/chess-knight";
import LuckyWheels from "@/views/tools/component/LuckyWheels.vue";

const showList: string[] = reactive([]);

const handleSuccessReq = async () => {
  const {list} = await getListApi();
  showSuccessToast("请求成功");
  showList.push(...list);
};
const handleErrorReq = () => {
  getListApiError().then(
      () => {
      },
      err => {
        showFailToast("请求有误");
      }
  );
};

const iconOnlineList = [
  "material-symbols:admin-panel-settings-outline",
  "jam:android",
  "lucide:badge-check",
  "pixelarticons:heart",
  "fxemoji:alienmonster",
  "meteocons:thunderstorms-day-overcast-fill"
];
const iconOfflineList = [
  Fa6SolidAddressBook,
  Fa6SolidAppleWhole,
  Fa6SolidBaby,
  Fa6SolidBasketball,
  Fa6SolidBurger,
  Fa6SolidChessKnight
];
// 获取所有本地 svg 图标文件名称
const modules = import.meta.glob("../../icons/svg/*.svg", {eager: true});
const svgIconLocalList = Object.keys(modules).map(key =>
    key.replace("../../icons/svg/", "").replace(".svg", "")
);

interface Bubble {
  id: number;
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
  style: Record<string, string>;
}

const bubbles = ref<Bubble[]>([]);
const bubbleCount = 5;
const containerSize = ref({ width: 0, height: 0 });

const initBubbles = () => {
  const container = document.getElementById('bubble-container');
  if (container) {
    containerSize.value.width = container.clientWidth;
    containerSize.value.height = container.clientHeight;
  }

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = {
      id: i,
      x: Math.random() * containerSize.value.width,
      y: Math.random() * containerSize.value.height,
      radius: 20 + Math.random() * 10,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      color: `hsl(${Math.random() * 360}, 50%, 50%)`,
      style: {},
    };
    updateBubbleStyle(bubble);
    bubbles.value.push(bubble);
  }
};

const updateBubbleStyle = (bubble: Bubble) => {
  bubble.style = {
    position: 'absolute',
    width: `${bubble.radius * 2}px`,
    height: `${bubble.radius * 2}px`,
    backgroundColor: bubble.color,
    borderRadius: '50%',
    top: `${bubble.y}px`,
    left: `${bubble.x}px`,
  };
};


const animateBubbles = () => {
  requestAnimationFrame(animateBubbles);

  for (const bubble of bubbles.value) {
    // Move the bubble
    bubble.x += bubble.dx;
    bubble.y += bubble.dy;

    // Check for collision with container boundaries
    if (bubble.x + bubble.radius > containerSize.value.width || bubble.x - bubble.radius < 0) {
      bubble.dx = -bubble.dx;
      bubble.x = Math.max(bubble.radius, Math.min(bubble.x, containerSize.value.width - bubble.radius));
    }
    if (bubble.y + bubble.radius > containerSize.value.height || bubble.y - bubble.radius < 0) {
      bubble.dy = -bubble.dy;
      bubble.y = Math.max(bubble.radius, Math.min(bubble.y, containerSize.value.height - bubble.radius));
    }

    // Check for collision with other bubbles
    for (const otherBubble of bubbles.value) {
      if (bubble.id !== otherBubble.id) {
        const dx = bubble.x - otherBubble.x;
        const dy = bubble.y - otherBubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = bubble.radius + otherBubble.radius;

        if (distance < minDistance) {
          // Calculate angle, sine and cosine
          const angle = Math.atan2(dy, dx);
          const sin = Math.sin(angle);
          const cos = Math.cos(angle);

          // Rotate bubble positions
          const pos0 = { x: 0, y: 0 };
          const pos1 = rotate(dx, dy, sin, cos, true);

          // Rotate bubble velocities
          const vel0 = rotate(bubble.dx, bubble.dy, sin, cos, true);
          const vel1 = rotate(otherBubble.dx, otherBubble.dy, sin, cos, true);

          // Solve collision
          const newVel0 = { x: vel0.x * -1, y: vel0.y };
          const newVel1 = { x: vel1.x * -1, y: vel1.y };

          // Rotate back
          const finalVel0 = rotate(newVel0.x, newVel0.y, sin, cos, false);
          const finalVel1 = rotate(newVel1.x, newVel1.y, sin, cos, false);

          // Assign new velocities
          bubble.dx = finalVel0.x;
          bubble.dy = finalVel0.y;
          otherBubble.dx = finalVel1.x;
          otherBubble.dy = finalVel1.y;

          // Move bubbles apart
          bubble.x += bubble.dx;
          bubble.y += bubble.dy;
          otherBubble.x += otherBubble.dx;
          otherBubble.y += otherBubble.dy;
        }
      }
    }
    updateBubbleStyle(bubble);
  }
};

const handleResize = () => {
  const container = document.getElementById('bubble-container');
  if (container) {
    containerSize.value.width = container.clientWidth;
    containerSize.value.height = container.clientHeight;
  }
};

const rotate = (x: number, y: number, sin: number, cos: number, reverse: boolean) => {
  return {
    x: reverse ? (x * cos + y * sin) : (x * cos - y * sin),
    y: reverse ? (y * cos - x * sin) : (y * cos + x * sin),
  };
};

onMounted(() => {
  initBubbles();
  animateBubbles();
  const container = document.getElementById('bubble-container');
  if (container) {
    container.addEventListener('resize', handleResize);
  }
});

onUnmounted(() => {
  const container = document.getElementById('bubble-container');
  if (container) {
    container.removeEventListener('resize', handleResize);
  }
});
</script>

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <!-- Mock -->
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">Mock</h3>
    </div>
    <van-space>
      <van-button type="success" @click="handleSuccessReq">成功请求</van-button>
      <van-button type="danger" @click="handleErrorReq">失败请求</van-button>
    </van-space>
    <div
        class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        {{ showList }}
      </p>
    </div>
    <!-- Icon -->
    <div
        class="pl-[12px] border-l-[3px] border-[color:#41b883] mt-[24px] mb-[12px]"
    >
      <h3 class="font-bold text-[18px] my-[4px]">Iconify Icon</h3>
    </div>
    <!-- online iconify icon -->
    <div>
      <i-icon
          v-for="item in iconOnlineList"
          :key="item"
          :icon="item"
          class="inline-block text-[24px] mr-3"
      />
    </div>
    <!-- offline iconify icon -->
    <div class="mt-2">
      <i-icon
          v-for="(item, idx) in iconOfflineList"
          :key="idx"
          :icon="item"
          class="inline-block text-[24px] mr-3"
      />
    </div>
    <div
        class="pl-[12px] border-l-[3px] border-[color:#41b883] mt-[24px] mb-[12px]"
    >
      <h3 class="font-bold text-[18px] my-[4px]">Svg Icon</h3>
    </div>
    <!-- local svg file icon -->
    <div>
      <svg-icon
          v-for="item in svgIconLocalList"
          :key="item"
          :name="item"
          class="inline-block text-[24px] mr-3"
      />
    </div>
    <LuckyWheels/>

    <div class="tools-content pt-[20px] px-[12px]">
      <div id="bubble-container">
        <div
            v-for="bubble in bubbles"
            :key="bubble.id"
            :style="bubble.style"
            class="bubble"
        ></div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
#bubble-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.bubble {
  position: absolute;
  width: var(--radius);
  height: var(--radius);
  background-color: var(--color);
  border-radius: 50%;
  top: var(--y);
  left: var(--x);
}
</style>
