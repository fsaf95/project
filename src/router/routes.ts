import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Demo from "@/views/demo/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "demo",
        name: "Demo",
        component: Demo,
        meta: {
          title: "主页"
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工具"
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "关于",
          noCache: true
        }
      }
    ]
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "主页"
    }
  },
  {
    path: "/synthesis",
    name: "Synthesis",
    component: () => import("@/views/synthesis/index.vue"),
    meta: {
      title: "主页"
    }
  },
  {
    path: "/equityList",
    name: "EquityList",
    component: () => import("@/views/equityList/index.vue"),
    meta: {
      title: "主页"
    }
  },
  {
    path: "/orderList",
    name: "OrderList",
    component: () => import("@/views/orderList/index.vue"),
    meta: {
      title: "订单列表"
    }
  },
  {
    path:"/shopList",
    name:"ShopList",
    component:()=>import("@/views/shopList/index.vue"),
    meta: {
      title: '门店列表'
    }
  },
  {
    path:"/productDetail",
    name:"ProductDetail",
    component:()=>import("@/views/productDetail/index.vue"),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: "/orderResult",
    name: "OrderResult",
    component: () => import("@/views/orderResult/index.vue"),
    meta: {
      title: "订单结果"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/404/index.vue"),
    meta: {
      title: "404"
    }
  }
];

export default routes;
