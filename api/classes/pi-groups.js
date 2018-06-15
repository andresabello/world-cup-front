import axios from 'axios'

export default class Group {

    constructor (baseUrl) {
        this.baseUrl = baseUrl
    }

    getGroups () {
        return new Promise( (resolve, reject) => {
            axios.get(`${this.baseUrl}groups`)
                .then(({data}) => {
                    resolve(data.groups)
                })
                .catch((errors) => {
                    console.log(errors.response)
                    reject(errors)
                })
        })

    }

}
