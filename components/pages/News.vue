<template>
    <div class="news-wrapper">
        <div class="item-wrapper" v-for="item in news.data">
            <a :href="item.source"><h2 class="item-title">{{item.title}}</h2></a>
            <div class="row">
                <div class="col-md-4">
                    <img :src="item.image" :alt="item.title" class="img-fluid news-image">
                </div>
                <div class="col-md-8">
                    <blockquote :cite="item.source">
                        <p v-if="item.description !== ''">{{item.description}}</p>
                        <footer>— <a :href="item.source">{{ item.source_name}}</a></footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <pi-pagination :pagination="getPaginationFields(news)" @paginate="changePage"></pi-pagination>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import PiPagination from '../utilities/PiPagination.vue'

    export default {
        name: 'news',
        mounted () {
            this.getNews({
                query: this.currentTeam[0].name,
                page: 0
            })
        },
        computed: mapGetters({
            news: 'getNews',
            currentTeam: 'getCurrentTeam'
        }),
        methods: {
            changePage (page) {
                this.getNews({
                    query: this.currentTeam[0].name,
                    page: page
                })
            },
            getPaginationFields (news) {
                return {
                    to: news.to,
                    from: news.from,
                    current_page: news.current_page,
                    last_page: news.last_page
                }
            },
            ...mapActions({
                getNews: 'getAllNews',
            })
        },
        components: {
            PiPagination
        }
    }
</script>

<style lang="scss">
    .news-wrapper {
        margin: 40px auto;
        .item-wrapper {
            margin: 40px auto;

            .item-title {
                margin-bottom: 20px;
            }

            .news-image {
                margin-bottom: 20px;
            }

            blockquote {
                p {
                    margin-bottom: 0;
                }
                footer {
                    a {
                        color: #D62332;
                    }
                }
            }
        }
    }
</style>
