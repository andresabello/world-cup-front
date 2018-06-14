import axios from 'axios'


export default class League {

    constructor (baseUrl) {
        this.baseUrl = baseUrl
        this.getLeague()
    }

    getLeague () {
        axios.get(`${this.baseUrl}/league/?league=mundial`)
            .then((response) => {
                console.log(response)
            })
            .catch((errors) => {
                console.log(errors.response)
            })
    }

}
