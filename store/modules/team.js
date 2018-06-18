import {API_URL} from '../../oauth/config.auth'
import Team from '../../api/classes/pi-teams'
import {SET_CURRENT_TEAM, SET_TEAMS} from '../mutation-types'

// initial state
const state = {
    teamService: new Team(`${API_URL}`),
    teams: [],
    currentTeam: [{id: 0, name: 'Todos'}]
}

// getters
const getters = {
    getTeamList: state => [{id:0, name: 'Todos'}].concat(state.teams),
    getTeams: state => state.teams,
    getCurrentTeam: state => state.currentTeam,
}

// actions
const actions = {
    getAllTeams ({commit, state}) {
        return new Promise((resolve, reject) => {
            state.teamService.getTeams()
                .then((teams) => {
                    commit(SET_TEAMS, teams)
                    resolve(teams)
                }).catch((error) => {
                reject(error)
            })
        })
    },
    setTeam ({commit}, id) {
        commit(SET_CURRENT_TEAM, id)
    }
}
// mutations
const mutations = {
    [SET_TEAMS] (state, teams) {
        state.teams = teams
    },
    [SET_CURRENT_TEAM]  (state, id) {
        let completeList = [{id:0, name: 'Todos'}].concat(state.teams)
        state.currentTeam = completeList.filter(team => team.id === id)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
