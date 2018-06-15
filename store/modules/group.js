import {API_URL} from '../../oauth/config.auth'
import Group from '../../api/classes/pi-groups'

// initial state
const state = {
    groupService: new Group(`${API_URL}`),

    groups: []
}

// getters
const getters = {
    getGroups: state => state.groups,
}

// actions
const actions = {
    getAllGroups ({commit, state}) {
        return new Promise((resolve, reject) => {
            state.groupService.getGroups()
                .then((groups) => {
                    commit('setGroups', groups)
                    resolve(groups)
                }).catch((error) => {
                    reject(error)
                })
        })

    }
}
// mutations
const mutations = {
    setGroups (state, groups) {
        state.groups = groups
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
