<template>
    <div class="app-wrapper">
        <navigation></navigation>

        <div class="container-fluid">
            <div class="row flex-xl-nowrap">
                <div class="col-12">
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
                        <!--<li>-->
                            <!--<router-link :to="{ name: 'playoffs' }">-->
                                <!--<i class="fa fa-fw fa-area-chart"></i>-->
                                <!--<span class="nav-link-text">Finales</span>-->
                            <!--</router-link>-->
                        <!--</li>-->

                    </ul>
                </div>

            </div>

            <div class="row">
                <div class="col-12 flex-xl-nowrap">
                    <router-view></router-view>
                </div>
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
    body {
        font-family: 'Lato', sans-serif;
    }
    .app-wrapper {
        margin-bottom: 140px;
    }
    .pi-menu {
        list-style: none;
        padding: 0 30px;
        margin: 40px auto;
        li {
            text-align: center;
            float: left;
            margin-left: 30px;
            font-size: 1rem;
            cursor: pointer;

            span {
                color: #27BCC2;
                padding-bottom: 5px;
            }

            &:first-child{
                margin-left: 10px;
            }

            &.active {
                border-bottom: 1px solid #11365A;
            }
        }
    }
</style>
