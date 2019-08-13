import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import {router} from './utils/router'
import {store} from './utils/store'
import 'es6-promise/auto'
import Grid from 'vue-js-grid'

Vue.use(Grid)
Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
