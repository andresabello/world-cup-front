
import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Page from './modules/page'
import Notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Auth,
        Notification,
        Page
    }
})