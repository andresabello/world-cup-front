import {env} from '../../includes/env'
import League from '../../api/classes/pi-leagues'

// initial state
const state = {
    leagueService: new League(`${env.url}/${env.api}`),
    leagues: []
}

// getters
const getters = {}

// actions
const actions = {}
// mutations
const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}
