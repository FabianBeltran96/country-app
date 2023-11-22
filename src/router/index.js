import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/ViewHome.vue")
    },
    {
        path: "/viewone",
        name: "view1",
        component: () => import("@/views/ViewOne.vue")
    }, {
        path: "/viewtwo",
        name: "view2",
        component: () => import("@/views/ViewTwo.vue")
    }
]
})

export default router
