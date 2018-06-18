import Group from '../../api/classes/pi-groups'
import { API_URL } from '../../oauth/config.auth'
import {
    SET_GROUPS,
    SET_CURRENT_GROUP
} from '../mutation-types'

// initial state
const state = {
    groupService: new Group(`${API_URL}`),
    groups: [],
    currentGroupId: 0
}

// getters
const getters = {
    getGroups: state => state.groups,
    getCurrentGroup: (state) => {
        if (state.currentGroupId === 0) {
            return null
        }
        return state.groups.filter(group => group.id === state.currentGroupId)[0]
    },
    getFilteredGroups: (state) => {
        let groups = Object.assign([], state.groups)

        if (state.currentGroupId === 0) {
            return groups
        }

        //remove the current
        groups.splice(groups.findIndex(group => group.id === state.currentGroupId), 1)
        //return groups in filter
        return groups
    },
}

// actions
const actions = {
    getAllGroups ({commit, state}) {
        return new Promise((resolve, reject) => {
            state.groupService.getGroups()
                .then((groups) => {
                    commit(SET_GROUPS, groups)
                    resolve(groups)
                }).catch((error) => {
                reject(error)
            })
        })
    },
    setCurrentGroup ({commit}, groupId) {
        commit(SET_CURRENT_GROUP, groupId)
    },
}
// mutations
const mutations = {
    [SET_GROUPS] (state, groups) {
        state.groups = groups
    },
    [SET_CURRENT_GROUP] (state, id) {
        state.currentGroupId = id
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
