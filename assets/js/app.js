import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'
import store from '../../store/index'
import App from '../../components/App.vue'
import OAuth from '../../api/classes/pi-oauth.js'
import Login from '../../components/auth/Login.vue'
import bootstrap from '../../includes/pi-bootstrap.js'
import Register from '../../components/auth/Register.vue'
import Settings from '../../components/pages/Settings.vue'
import Dashboard from '../../components/pages/Dashboard.vue'
import Standings from '../../components/pages/Standings.vue'
import News from '../../components/pages/News.vue'

window.axios = axios



Vue.use(VueRouter)
Vue.use(VueCookie)
Vue.use(Vuex)
bootstrap.install(Vue)

// Add a request interceptor
window.axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = "Bearer " + localStorage.getItem('token')
        return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
});

// Add a response interceptor
window.axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response
}, function (error) {
    // Do something with response error
    return Promise.reject(error)
});


//In this way we'll expose our class in all Vue components
// Vue.prototype.$oauth = new OAuth();

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/admin',
            name: 'home',
            component: Dashboard,
            secure: true
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings,
            secure: true
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/posiciones',
            name: 'standings',
            component: Standings
        },
        {
            path: '/noticias',
            name: 'news',
            component: News
        },
    ]
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
new Vue({
    el: '#app',
    store,
    router: router,
    render: app => app(App)
})
