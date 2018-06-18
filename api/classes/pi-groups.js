import axios from 'axios'

export default class Group {

    constructor (baseUrl) {
        this.baseUrl = baseUrl
    }

    getGroups () {
        return new Promise((resolve, reject) => {
            axios.get(`${this.baseUrl}groups`)
                .then(({data}) => {

                    //add match information
                    data.groups.forEach((group) => {
                        group.teams.forEach((team, index) => {
                            let points = 0
                            let won = 0
                            let tied = 0
                            let lost = 0

                            if (typeof team !== 'undefined' && team !== null) {
                                let allMatches = team.home_matches.concat(team.away_matches)

                                points = allMatches.filter(match => match.winner_id === team.id).length

                                won = allMatches.filter(match => match.winner_id === team.id).length

                                tied = allMatches.filter(match => match.winner_id === 0).length
                                lost = allMatches.filter(match => (match.home_id === team.id || match.away_id === team.id) && match.winner_id !== null && match.winner_id !== team.id).length
                            }
                            group.teams[index].points = points
                            group.teams[index].won = won
                            group.teams[index].tied = tied
                            group.teams[index].lost = lost

                            group.teams.sort((a, b)  => {
                                return b.points - a.points
                            })
                        })
                    })

                    resolve(data.groups)
                })
                .catch((errors) => {
                    console.log(errors.response)
                    reject(errors)
                })
        })
    }

}
