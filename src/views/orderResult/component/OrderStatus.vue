<script setup lang="ts">
const porps = defineProps({
  stateInfo: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="order-status-description">
    <div class="order-status-icon">
      <img :class="stateInfo.imageWidth" :src="stateInfo.img" alt="图片"/>
    </div>
    <div class="description-content">
      <p class="title">{{ stateInfo.state_desc }}</p>
      <p v-if="stateInfo.btnState === 3" class="notice">
        *注：如遇延迟未发放，请联系客服：400-XXX-XXXX
      </p>
      <p v-if="stateInfo.remark" class="abnormal" v-html="stateInfo.remark"></p>
    </div>
  </div>
</template>

<style scoped lang="less">
.order-status-description {
  padding: 80px 0 56px;
  width: 100%;
  height: auto;
  box-sizing: border-box;

  .order-status-icon {
    margin: 0 auto;
    width: 309px;
    height: 251px;

    .get_success {
      margin: 0 auto;
      width: 309px;
      height: 251px;
    }

    .getSuccessMoney {
      margin: 0 auto;
      width: 250px;
      height: 205px;
    }

    .get_lose {
      margin: 0 auto;
      width: 122px;
      height: 122px;
    }

    .get_waiting {
      margin: 0 auto;
      width: 199px;
      height: 176px;
    }

    .get_fail {
      margin: 0 auto;
      width: 306px;
      height: 251px;
    }
  }

  .description-content {
    width: 100%;
    position: relative;

    p {
      text-align: center;
      word-break: break-word;
      word-wrap: break-word;
      line-height: 1.6em;
      font-weight: 500;
      color: #666666;
    }

    .title {
      font-size: 38px;
      color: #000000;
      font-weight: bold;
    }

    .notice {
      font-size: 28px;
    }

    .abnormal {
      font-size: 28px;
    }
  }
}
</style>
