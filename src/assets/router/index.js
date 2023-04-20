
import { createRouter, createWebHistory } from 'vue-router'

// 路由参数配置
const router = createRouter({
    // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
    history: createWebHistory(),
    routes :[
                { path: '/', component: ()=>import("@/components/HelloWorld.vue") },
                { path: '/about', component: ()=>import("@/components/HelloWorld.vue") },
            ], // `routes: routes` 的缩写,
})

//
// 导出默认值
export default router