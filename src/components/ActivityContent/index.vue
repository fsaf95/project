<script setup lang="ts">

</script>

<template>
  <!--活动内容模块-->
  <div class="activity">
    <div class="activity-content">
      <p class="title">活动时间</p>
      <div class="form-info-time">2025年1月1日-1月1日</div>
      <p class="title">活动对象</p>
      <div class="form-info-time">模板</div>
      <p class="title">内容</p>
      <div class="bullet-color">
        <p>模板</p>
      </div>
      <p class="title">活动路径</p>
      <div class="bullet-color">
        <p>模板</p>
      </div>
      <p class="title">微信立减金使用规则</p>
      <div class="bullet-color">
        <p>模板</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.activity {
  margin: 56px auto;
  position: relative;
  width: 680px;
  height: auto;
  background: #ffffff;
  border-radius: 20px;
  box-sizing: border-box;

  .activity-content {
    padding: 56px 0 10px;
    position: relative;
    width: 100%;
    min-height: 400px;
    color: #333333;
    border-radius: 20px;
    background-image: linear-gradient(#fff3cf, #ffbfa6);
    overflow: hidden;
    box-sizing: border-box;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 20px;
      border: thick solid #fff3cf;
      pointer-events: none;
    }

    .title {
      margin: 0 auto;
      width: 400px;
      height: 60px;
      line-height: 60px;
      font-size: 36px;
      text-align: center;
      font-weight: 500;
      border-radius: 40px;
      color: #ffffff;
      background: linear-gradient(180deg, #ff6743, #f01308);
    }

    .form-info-time {
      margin: 20px auto 50px;
      width: 590px;
      height: 58px;
      text-align: center;
      line-height: 58px;
      font-size: 30px;
      border-radius: 100px;
      color: #8f1b0f;
      font-weight: 500;
      background: #fef7ef;
    }

    .bullet-color {
      margin: 35px;
      list-style-type: disc;
      color: #333333;
      text-align: justify;
      line-height: 1.8em;

      .dian {
        margin-right: 22px;
        margin-bottom: 4px;
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #901b0f;
      }
    }
  }
}
</style>
