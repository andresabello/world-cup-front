import News from '../../api/classes/pi-news'
import {API_URL} from '../../oauth/config.auth'

// initial state
const state = {
    newsService: new News(`${API_URL}`),
    news: [],
}

// getters
const getters = {
    getNews: state => state.news,
}

// actions
const actions = {
    getAllNews ({commit, state}, {query, page}) {
        return new Promise((resolve, reject) => {
            state.newsService.getNews(query, page)
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
