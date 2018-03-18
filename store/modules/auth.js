import {env} from '../../includes/env'

// initial state
const state = {
    loggedIn: false,
    user: {
        name:'',
        email: '',
        phone: ''
    },
    token: localStorage.getItem('token'),
    checkAction: `${env.url}/${env.api}/auth/check`,
    registerAction: `${env.url}/${env.api}/register`,
    loginAction: `${env.url}/${env.api}/login`,
    registerForm: {
        name: {
            'message': 'Name',
            'type': 'text'
        },
        email: {
            'message': 'Email',
            'type': 'email'
        },
        phone_number: {
            'message': 'Phone Number',
            'type': 'text'
        },
        password: {
            'message': 'Password',
            'type': 'password'
        },
        password_confirmation: {
            'message': 'Confirm Password',
            'type': 'password'
        },
        submit: {
            'message': 'Register',
            'type': 'submit'
        }
    },
    loginForm: {
        email: {
            'message': 'Email',
            'type': 'email'
        },
        password: {
            'message': 'Password',
            'type': 'password'
        },
        submit: {
            'message': 'Login',
            'type': 'submit'
        }
    }
}

// getters
const getters = {
    loggedIn: state => state.loggedIn,
    registerForm: state => state.registerForm,
    loginForm: state => state.loginForm,
    registerAction: state => state.registerAction,
    checkAction: state => state.checkAction,
    loginAction: state => state.loginAction,
    token: state => state.token,
    user: state => state.user,
}

// actions
const actions = {
    setLoggedIn ({ commit }, loggedIn) {
        commit('setLoggedIn', loggedIn)
    },
    setToken ({ commit }, token) {
        commit('setToken', token)
    },
    setUser ({ commit }, {name, email, phone_number}) {
        commit('setUserName', name)
        commit('setUserEmail', email)
        commit('setUserPhone', phone_number)

    }
}

// mutations
const mutations = {
    setLoggedIn (state, loggedIn) {
        state.loggedIn = loggedIn
    },
    setToken (state, token) {
        localStorage.setItem('token', token)
    },
    setUserName (state, name) {
        state.user.name = name
    },
    setUserEmail (state, email) {
        state.user.email = email
    },
    setUserPhone (state, phone) {
        state.user.phone = phone
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}