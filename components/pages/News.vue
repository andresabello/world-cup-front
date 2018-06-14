<template>
    <div class="news-wrapper">
        <div class="item-wrapper" v-for="item in news">
            <a :href="item.source"><h2>{{item.title}}</h2></a>
            <div class="row">
                <div class="col-sm-4">
                    <img :src="item.image" :alt="item.title" class="img-fluid">
                </div>
                <div class="col-sm-8">
                    <p>
                        {{item.description}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'news',
        mounted () {
            this.getNews('Colombia')
        },
        computed: mapGetters({
            news: 'getNews'
        }),
        methods:{
            ...mapActions({
                getNews: 'getAllNews',
            })
        },
    }
</script>

<style lang="scss">
    .news-wrapper {
        margin: 40px auto;
        .item-wrapper {
            margin: 40px auto;
        }
    }
</style>
