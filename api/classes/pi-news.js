import axios from 'axios'

export default class News {

    constructor (baseUrl) {
        this.baseUrl = baseUrl
    }

    getNews (query, page) {
        return new Promise( (resolve, reject) => {
            axios.get(`${this.baseUrl}news?team=${query}&page=${page}`)
                .then(({data}) => {
                    resolve(data.news)
                })
                .catch((errors) => {
                    console.log(errors.response)
                    reject(errors)
                })
        })
    }
}
