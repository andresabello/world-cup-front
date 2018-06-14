import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Page from './modules/page'
import News from './modules/news'
import Notification from './modules/notification'
import Player from './modules/player'
import Team from './modules/team'
import Tournament from './modules/tournament'
import Group from './modules/group'
// import League from './modules/league'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Auth,
        Notification,
        Page,
        News,
        Player,
        Team,
        Tournament,
        Group
    }
})
