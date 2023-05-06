import {createRouter, createWebHistory} from 'vue-router'

// 路由参数配置
const router = createRouter({
    // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
    history: createWebHistory(),
    routes :[
                { path: '/', component: () =>import("@/App.vue") },
                { path: '/hw', component:() =>import("@/components/props/father.vue") },
                { path: '/about/:id*', component: () =>import("@/components/props/abc.vue") },
            ],
})

//
// 导出默认值
export default router