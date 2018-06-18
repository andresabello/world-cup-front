import axios from 'axios'

export default class Team {

    constructor (baseUrl) {
        this.baseUrl = baseUrl
    }

    getTeams() {
        return new Promise( (resolve, reject) => {
            axios.get(`${this.baseUrl}teams`)
                .then(({data}) => {
                    resolve(data.teams)
                })
                .catch((errors) => {
                    console.log(errors.response)
                    reject(errors)
                })
        })
    }
}
