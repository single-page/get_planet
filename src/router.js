import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'main-page',
            component: () => import('@/components/MainPage'),
        },
        {
            path: '/planet-info/:pName',
            name: 'planet-info',
            component: () => import('@/components/PlanetInfo'),
        },
    ]
})
