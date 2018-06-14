import { env } from '../../includes/env'
import News from '../../api/classes/pi-news'

// initial state
const state = {
    newsService: new News(`${env.url}/${env.api}`),
    news: []
}

// getters
const getters = {
    getNews: state => state.news,
}

// actions
const actions = {
    getAllNews ({commit, state}, query) {
        return new Promise((resolve, reject) => {
            state.newsService.getNews(query)
                .then((news) => {
                    commit('setNews', news)
                    resolve(news)
                }).catch((error) => {
                reject(error)
            })
        })

    }
}
// mutations
const mutations = {
    setNews (state, news) {
        state.news = news
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
