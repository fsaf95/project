<script setup lang="ts" name="Demo">
import {reactive, ref} from "vue";

const contentList = reactive([
  "✔ ⚡ Vue3 + Vite5",
  "✔ 🍕 TypeScript",
  "✔ ✨ Vant4 组件库",
  "✔ 🌀 Tailwindcss 原子类框架",
  "✔ 👏 集成多种图标方案",
  "✔ 🍍 Pinia 状态管理",
  "✔ 🌓 支持深色模式",
  "✔ Vue-router 4",
  "✔ vmin 视口适配",
  "✔ Axios 封装",
  "✔ 打包资源 gzip 压缩",
  "✔ 开发环境支持 Mock 数据",
  "✔ ESLint",
  "✔ 首屏加载动画",
  "✔ 开发环境调试面板"
]);

const globalId = ref(null)
const circles = ref([])
const lastExec = ref(null)
const hue = ref(250)
const lastCollisions = ref([])
const hiddenProperty = ref(null)
const visibilityChangeEvent = ref(null)
const moving = ref(true)

const rotate = (x, y, sin, cos, reverse) => {
  return reverse ? {
    x: cos * x + sin * y,
    y: cos * y - sin * x
  } : {
    x: cos * x - sin * y,
    y: cos * y + sin * x
  }
}

const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

const style = (c) =>{
  return `top:${c.y}px;left:${c.x}px;box-shadow:0 0 2rem hsl(${c.hue}, 75%, 50%) inset`
}
const update = (tm) =>{
  if (!moving.value) {
    return
  }
  if(lastExec.value && circles.value.length) {
    var diff = (tm - lastExec.value)
    // var huediff = (hue.value + diff/30) % 360
    var box = $el.value.getBoundingClientRect()
    var radius = $el.value.querySelector('#bubbleradius').getBoundingClientRect().width

    var couples = []
    circles.value.filter(cc => !cc.popped).forEach(c1 => {
      circles.value.filter(cc => !cc.popped).forEach(c2 => {
        if (c1 !== c2) {
          couples.push([c1, c2])
        }
      })
    })

    var collisions = couples.filter(couple => {
      var dist = Math.sqrt(Math.pow(couple[0].y - couple[1].y, 2) +
          Math.pow(couple[0].x - couple[1].x, 2))
      return dist < radius * 2
    })

    var newcollisions = collisions.filter(couple => {
      var key = couple[0].key + couple[1].key
      return lastCollisions.value.indexOf(key) < 0
    })

    newcollisions.forEach(couple => {
      var a = couple[0]
      var b = couple[1]

      if (a.collisionFree && b.collisionFree) {
        if (false) {
          a.new_vx = (a.vx * (a.mass - b.mass) + (2 * b.mass * b.vx)) / (a.mass + b.mass)
          a.new_vy = (a.vy * (a.mass - b.mass) + (2 * b.mass * b.vy)) / (a.mass + b.mass)
        } else {
          var dx = b.x - a.x
          var dy = b.y - a.y
          var collisionAngle = Math.atan2(dy, dx)
          var sin = Math.sin(collisionAngle)
          var cos = Math.cos(collisionAngle)
          var pos_a = {x: 0, y: 0}
          var pos_b = rotate(dx, dy, sin, cos, true)
          var vel_a = rotate(a.vx, a.vy, sin, cos, true)
          var vel_b = rotate(b.vx, b.vy, sin, cos, true)
          var vxTotal = vel_a.x - vel_b.x
          vel_a.x = ((a.mass - b.mass) * vel_a.x + 2 * b.mass * vel_b.x) / (a.mass + b.mass)
          vel_b.x = vxTotal + vel_a.x
          pos_a.x += vel_a.x
          pos_b.x += vel_b.x

          var pos_a_final = rotate(pos_a.x, pos_a.y, sin, cos, false)
          var vel_a_final = rotate(vel_a.x, vel_a.y, sin, cos, false)
          a.new_x = a.x + pos_a_final.x
          a.new_y = a.y + pos_a_final.y;
          a.new_vx = vel_a_final.x;
          a.new_vy = vel_a_final.y;

          // each collision shows up in array twice: a->b and b->a
          // var pos_b_final = rotate(pos_b.x, pos_b.y, sin, cos, false)
          // var vel_b_final = rotate(vel_b.x, vel_b.y, sin, cos, false)
          // b.x = a.x + pos_b_final.x
          // b.y = a.y + pos_b_final.y
          // b.new_vx = vel_b_final.x;
          // b.new_vy = vel_b_final.y;
        }
      }
    })

    newcollisions.forEach(couple => {
      var a = couple[0]
      var b = couple[1]
      if (a.new_vy) {
        a.vx = a.new_vx
        a.vy = a.new_vy
        a.x = a.new_x
        a.y = a.new_y
        a.hue += 20
      }
    })

    lastCollisions.value = collisions.map(couple => {
      return couple[0].key + couple[1].key
    })

    var collided = [...new Set(flatten(newcollisions))]
    var collidedKeys = collided.map(c => c.key)


    circles.value.forEach(c => {
      c.collisionFree = c.collisionFree || (collidedKeys.indexOf(c.key) < 0)
      if (c.y < 0) {
        c.vy = Math.abs(c.vy)
      } else if (c.y > box.height) {
        c.vy = -Math.abs(c.vy)
      }
      if (c.x < 0) {
        c.vx = Math.abs(c.vx)
      } else if (c.x > box.width) {
        c.vx = -Math.abs(c.vx)
      }

      c.y += c.vy * diff
      c.x += c.vx * diff
    })
  }
  lastExec.value = tm
  globalID = requestAnimationFrame(update.value)
}
</script>

<template>
  <div class="demo-content px-[12px]">
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883]">
      <a
          class="flex items-center"
          href="https://github.com/yulimchen/vue3-h5-template"
          target="_blank"
      >
        <svg-icon class="text-[20px] mr-[8px]" name="github"/>
        <h3 class="font-bold text-[18px] my-[4px]">Vue3-h5-template</h3>
        <svg-icon class="text-[12px] ml-[5px]" name="link"/>
      </a>
    </div>
    <div
        class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5
        移动端项目基础模板
      </p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item"/>
    </div>

    <div class="content" @click="onClick">
      <div id="bubbleradius"></div>
      <div class="paopao-con" v-for="(c, index) in circles" :style="style(c)" :key="c.key"
           :class="{popped: c.popped}"></div>
    </div>
  </div>
</template>
<style scoped lang="less">
.content {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1d1e22;
  color: white;

  .paopao-con {
    transform: translate(-50%, -50%);
    border-radius: 9rem;
    height: 9rem;
    width: 9rem;
    display: block;
    position: absolute;
    opacity: 1;
    transition: box-shadow .5s ease-in-out, transform .07s ease-out, opacity .04s ease-in;
    /*&:before,
    &:after{
      content: '';
      position: absolute;
      top: 20%;
      left: 20%;
      background-color: rgba(cyan, 0.3);
      width: 55%;
      height: 55%;
      border-radius: 50%;
    }

    &:after {
      top: 23%;
      left: 23%;
      background-color: $black;
    }*/
  }

  &.popped {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 18%;
    left: 18%;
    background-color: rgba(191, 255, 255, 0.6);
    width: 0.6428571429rem;
    height: 1.5rem;
    border-radius: 50%;
    transform: rotate(45deg) scale(0.8);
  }
}

</style>
