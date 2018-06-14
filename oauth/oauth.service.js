import axios from 'axios'
import {default as API} from './routes.js'

export default {
    user : null,
    destroySession(){
        this.user = null
    },
    currentUser(){
        if(this.user) {
            return this.user
        }

        let user = axios.get(API.CURRENT_USER_URL)

        this.user = user
        return new Promise(resolve => resolve(user))
    },
    attemptLogin(credentials){

        let response = axios.post(API.TOKEN_URL, {
            form_params: credentials
        })
        return new Promise(resolve => resolve(response))
    },
    addAuthorizationHeader(header){
        axios.defaults.headers.common['Authorization'] = header
    }
}
