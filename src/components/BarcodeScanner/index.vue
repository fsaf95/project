<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";

// 存储视频元素
const videoElement = ref<HTMLVideoElement | null>(null);
// 存储识别结果
const barcodeResult = ref<string | null>(null);
// 存储扫描器实例
const scanner = ref<BarcodeDetector | null>(null);
// 存储摄像头流
const stream = ref<MediaStream | null>(null);

// 检查浏览器是否支持 BarcodeDetector API
const isBarcodeDetectorSupported = 'BarcodeDetector' in window;

// 开始扫描
const startScanning = async () => {
  // 检查浏览器是否支持 BarcodeDetector API
  if (isBarcodeDetectorSupported) {
    console.error('浏览器不支持 BarcodeDetector API');
    return;
  }
  try {
    //   请求访问摄像头
    stream.value = await navigator.mediaDevices.getUserMedia({video: true});
    // 将摄像头流设置为视频元素的源
    if (videoElement.value) {
      videoElement.value.srcObject = stream.value;
    }

    // 创建条码检查器
    // BarcodeDetector API 目前还不是所有浏览器都支持，使用前请确保你的浏览器支持该 API。
    // formats 参数指定了要识别的条码格式，你可以根据需要添加或修改
    scanner.value = new BarcodeDetector({formats: ['qr_code', 'ean_13']});

    // 执行扫描的内部函数
    const performScan = async () => {
      if (scanner.value && videoElement.value) {
        try {
          const barcodes = await scanner.value.detect(videoElement.value); // 检测视频元素中的条形码
          // 如果检测到条形码
          if (barcodes.length > 0) {
            // 将第一个检测到的条形码的值赋给 barcodeResult
            barcodeResult.value = barcodes[0].rawValue;
            // 停止扫描
            stopScanning();
          } else {
            requestAnimationFrame(scan); // 使用 requestAnimationFrame 进行下一帧的扫描
          }
        } catch (error) {
          console.log('条码识别出错:', error);
        }
      }
    };

    requestAnimationFrame(performScan);
  } catch (error) {
    console.log('无法访问摄像头:', error);
  }
}

// 停止扫描
const stopScanning = () => {
  if (stream.value) {
    const tracks = stream.value.getTracks(); // 获取视频流的轨道
    tracks.forEach(track => track.stop()); // 停止每个轨道
    if (videoElement.value) {
      videoElement.value.srcObject = null; // 清空视频元素的源
    }
    stream.value = null; // 清空视频流
  }
}

// 组件挂载时检查浏览器支持情况
onMounted(() => {
  if (!isBarcodeDetectorSupported) {
    console.error('浏览器不支持 BarcodeDetector API');
  }
})

onUnmounted(() => {
  stopScanning(); // 在组件卸载前停止扫描
})
</script>

<template>
  <!--  条码识别组件-->
  <div class="barcode-scanner">
    <video ref="videoElement" autoplay playsinline></video>f
    <button @click="startScanning" :disabled="!isBarcodeDetectorSupported">开始扫描</button>
    <button @click="stopScanning" :disabled="!stream.value">停止扫描</button>
    <p v-if="barcodeResult">扫描结果: {{ barcodeResult }}</p>
    <p v-if="!isBarcodeDetectorSupported">您的浏览器不支持条码扫描功能。</p>
  </div>
</template>

<style scoped lang="less">

</style>
