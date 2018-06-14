<template>
    <div>
        <navigation></navigation>
        <div class="row">
            <div class="container">
                <div class="col-sm-8 offset-sm-4">
                    <ul class="pi-menu">
                        <li>
                            <router-link :to="{ name: 'news' }">
                                <i class="fa fa-fw fa-table"></i>
                                <span class="nav-link-text">Noticias</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'standings' }">
                                <i class="fa fa-fw fa-area-chart"></i>
                                <span class="nav-link-text">Posiciones</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'playoffs' }">
                                <i class="fa fa-fw fa-area-chart"></i>
                                <span class="nav-link-text">Finales</span>
                            </router-link>
                        </li>

                    </ul>
                </div>

                <router-view></router-view>
            </div>

        </div>
    </div>
</template>


<script>

    import Nav from './pages/partials/Navigation.vue'

    export default {
        created() {

        },
        components: {
            navigation: Nav
        }
    }
</script>

<style lang="scss">
    .pi-menu {
        list-style: none;
        padding: 0;
        margin: 40px auto;
        li {
            float: left;
            margin-left: 20px;
        }
    }
</style>
