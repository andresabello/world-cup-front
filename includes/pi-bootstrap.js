import OAuth from '../api/classes/pi-oauth.js'

export default
{
    //exposes to all components
    install(Vue, options){

        Vue.prototype.$oauth = new OAuth();

        Vue.mixin({
            mounted(){}
        })
    }
}
