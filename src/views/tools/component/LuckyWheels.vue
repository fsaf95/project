<template>
  <SlotMachine
      ref="mySlot"
      width="240px"
      height="180px"
      :blocks="blocks"
      :slots="slots"
      :prizes="prizes"
      :defaultStyle="defaultStyle"
      :defaultConfig="defaultConfig"
      @end="endCallback"
  />
</template>

<script>
export default {
  name: "LuckyWheels",
  data() {
    return {
      blocks: [
        {padding: '10px', background: '#869cfa'},
        {padding: '10px', background: '#e9e8fe'},
      ],
      slots: [
        {order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], direction: 1},
        {order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], direction: -1},
        {order: [2, 3, 4, 5, 6, 7, 8, 9, 0, 1], direction: 1},
      ],
      prizes: [
        {fonts: [{text: '0', top: '15%'}], background: '#2145cc'},
        {fonts: [{text: '1', top: '15%'}], background: '#bac5ee'},
        {fonts: [{text: '2', top: '15%'}], background: '#e4baee'},
        {fonts: [{text: '3', top: '15%'}], background: '#465581'},
        {fonts: [{text: '4', top: '15%'}], background: '#bac5ee'},
        {fonts: [{text: '5', top: '15%'}], background: '#baeecf'},
        {fonts: [{text: '6', top: '15%'}], background: '#baeec3'},
        {fonts: [{text: '7', top: '15%'}], background: '#eed6ba'},
        {fonts: [{text: '8', top: '15%'}], background: '#eec6ba'},
        {fonts: [{text: '9', top: '15%'}], background: '#bac5ee'},
      ],
      defaultStyle: {
        borderRadius: Infinity,
        background: '#bac5ee',
        fontSize: '32px',
        fontColor: '#333'
      },
      defaultConfig: {
        rowSpacing: '20px',
        colSpacing: '10px'
      },
    }
  },
  mounted() {
    this.startCallback()
  },
  methods: {
    startCallback() {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.mySlot.play()
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设 4 种结果
        const res = [
          [9, 9, 6],
          [0, 0, 7],
          [6, 6, 6],
          [8, 8, 8]
        ]
        // 随机取一组数据
        const index = res[Math.random() * 4 >> 0]
        // 调用 stop 方法停止游戏
        this.$refs.mySlot.stop(index)
      }, 3000)
    },
    // 抽奖结束会触发end回调
    endCallback(prize) {
      console.log(prize)
    },
  },
}
</script>

<style scoped>

</style>
