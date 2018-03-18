import {env} from '../../includes/env.js'
import Vue from 'vue'

// initial state
const state = {
    resetPasswordAction: `${env.url}/${env.api}/reset/password`,
    settingsAction: `${env.url}/${env.api}/settings`,
    settingsForm: {
        name: {
            'message': 'Name',
            'type': 'text',
            'value': ''
        },
        email: {
            'message': 'Email',
            'type': 'email',
            'value': ''
        },
        phone_number: {
            'message': 'Phone Number',
            'type': 'text',
            'value': ''
        },
        submit: {
            'message': 'Update',
            'type': 'submit'
        }
    },
    resetPasswordForm:{
        password: {
            'message': 'Password',
            'type': 'password'
        },
        password_confirmation: {
            'message': 'Confirm Password',
            'type': 'password'
        },
        submit: {
            'message': 'Reset Password',
            'type': 'submit'
        }
    },
}

// getters
const getters = {
    resetPasswordForm: state => state.resetPasswordForm,
    settingsForm: state => state.settingsForm,
    settingsAction: state => state.settingsAction,
    resetPasswordAction: state => state.resetPasswordAction,
}

// actions
const actions = {
    setSettings ({commit}, {name, email, phone_number}) {
        commit('setName', name)
        commit('setEmail', email)
        commit('setPhone', phone_number)
    }
}
// mutations
const mutations = {


    setName (state, name) {
        let data = {
            'message': 'Name',
            'type': 'text',
            'value': name
        }
        Vue.set(state.settingsForm, 'name', data)
    },
    setEmail (state, email) {
        let data = {
            'message': 'Email',
            'type': 'email',
            'value': email
        }
        Vue.set(state.settingsForm, 'email', data)
    },
    setPhone (state, phone) {
        let data = {
            'message': 'Phone Number',
            'type': 'text',
            'value': phone
        }
        Vue.set(state.settingsForm, 'phone_number', data)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}