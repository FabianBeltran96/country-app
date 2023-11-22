import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router = new Router({

    mode: 'history',
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/ViewHome.vue")
        },
        {
            path: "/viewone",
            name: "view1",
            component: () => import("./views/ViewOne.vue")
        }, {
            path: "/viewtwo",
            name: "view2",
            component: () => import("./views/ViewTwo.vue")
        }
    ]
})

export default router
