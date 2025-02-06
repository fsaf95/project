import { createApp } from "vue";
import { store } from "./store";
// normalize.css
import "normalize.css/normalize.css";
// 全局样式
import "./styles/index.less";
// tailwindcss
import "./styles/tailwind.css";
// svg icon
import "virtual:svg-icons-register";
import VueLuckyCanvas from '@lucky-canvas/vue'

import App from "./App.vue";
import router from "./router";


// 引入 Vconsole
// import Vconsole from 'vconsole'

// 所有环境均使用
// new Vconsole()

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueLuckyCanvas)

app.mount("#app");
