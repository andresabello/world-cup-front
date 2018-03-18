import * as Cookies from "js-cookie"
import AuthService from './../../oauth/oauth.service.js'
import ConfigAuth from './../../oauth/config.auth.js'

class OAuth
{
    constructor(){

        this.storages =  {
            Cookies,
            localStorage
        }

        this.Session = this.storages[ConfigAuth.default_storage]

        if (ConfigAuth.default_storage === 'Cookies') {
            let session = this.Session
            let has = { has: function (key) {
                typeof session.get(key) !== 'undefined'
            }}
            Object.assign(this.Session, has);
        }
        console.log(this.Session)
    }

    logout(){
        AuthService.destroySession()
        this.Session.remove('access_token')
        this.Session.remove('refresh_token')
    }

    guest(){
        return !this.Session.has('access_token')
    }

    isAuthenticated(){
        return !!this.Session.has('access_token')
    }

    login(username, password){
        let data = {
            username,
            password,
        }

        //We merge grant type and client secret stored in configuration
        Object.assign(data, ConfigAuth.oauth)
        return new Promise( (resolve, reject) => {
            AuthService.attemptLogin(data).then( response => {
                this.storeSession(response.data)
                this.addAuthHeaders()
                resolve(response)
            }).catch( error => {
                console.log("OAUTH Authentication error: ",error)
                reject(error)
            })
        })
    }

    getUser(url){
        if(this.Session.has('access_token')){
            return new Promise( (resolve, reject) => {
                AuthService
                    .currentUser(url)
                    .then( response => {
                        resolve(response);
                    }).catch(error => {
                    reject(error)
                })
            })
        }
        return new Promise( resolve => resolve(null) )
    }

    getAuthHeader() {
        if(this.Session.getItem('access_token')){
            let access_token = this.Session.getItem('access_token')
            return ConfigAuth.oauth_type+" "+ access_token // Example : Bearer xk8dfwv8783dxddjk232xjshoqpx
        }
        return null
    }

    getItem(key){
        if(ConfigAuth.default_storage === 'LocalStorage'){
            return this.Session.get.item(key)
        }
        return this.Session.get(key)
    }

    addAuthHeaders() {
        let header = this.getAuthHeader();
        AuthService.addAuthorizationHeader(header)
    }

    storeSession(data){

        let time = data.expires_in
        let refreshTime = data.refresh_expires_in

        if(ConfigAuth.default_storage === 'LocalStorage'){
            this.Session.set('access_token', data.access_token)
            this.Session.set('refresh_token', data.access_token)
        }else{

            this.Session.set('access_token', data.access_token, {
                expires : time,
            })

            this.Session.set('refresh_token', data.access_token, {
                expires : refreshTime,
            })
        }

    }

}

export default OAuth