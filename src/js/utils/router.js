import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Default from '../pages/default.vue'


const routes = [
    { path: '/', component: Default },
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
