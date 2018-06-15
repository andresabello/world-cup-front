import {API_URL} from '../../oauth/config.auth'
import Team from '../../api/classes/pi-teams'

// initial state
const state = {
    teamService: new Team(`${API_URL}`),
    teams: []
}

// getters
const getters = {
    getTeamList: state => state.teams,
    getTeams: state => state.teams,
}

// actions
const actions = {
    getAllTeams ({commit, state}) {
        return new Promise((resolve, reject) => {
            state.teamService.getTeams()
                .then((teams) => {
                    commit('setTeams', teams)
                    resolve(teams)
                }).catch((error) => {
                reject(error)
            })
        })

    }
}
// mutations
const mutations = {
    setTeams (state, teams) {
        state.teams = teams
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
