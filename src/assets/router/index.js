import {createRouter, createWebHistory} from 'vue-router'

// 路由参数配置
const router = createRouter({
    // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
    history: createWebHistory(),
    routes :[
                { path: '/', component: () =>import("@/App.vue") },
                { path: '/father', component:() =>import("@/components/props/father.vue") },
                 { path: '/store', component: () =>import("@/components/store/store.vue") },
                 { path: '/s2', component: () =>import("@/components/store/s2.vue") },
    ],
})

//
// 导出默认值
export default router