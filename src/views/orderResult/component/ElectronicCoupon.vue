<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['claim'])
</script>

<template>
  <div class="electronic-coupons">
    <nut-image class="image" :src="props.image"/>
    <p class="info">前往新页面领取电子券</p>
    <nut-button class="claim-btn" type="default" @click="$emit('claim',props.link)">点击领取</nut-button>
  </div>
</template>

<style scoped lang="less">

</style>
