<template>
    <header class="navigation-wrapper">
        <nav class="navbar navbar-dark bg-dark">
            <div class="row flex-xl-nowrap">
                <div class="col-md-4">
                    <a class="navbar-brand" href="/">Futbol Seleccion Colombia</a>
                </div>
                <div class="col-md-8">
                    <label>
                        <select class="form-control">
                            <option value="" v-for="team in teams">{{team}}</option>
                        </select>
                    </label>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'navigation',
        mounted () {
            this.getTeams()
        },
        computed: mapGetters({
            teams: 'getTeamList'
        }),
        methods: {
            ...mapActions({
                getTeams: 'getAllTeams',
            })
        },
    }
</script>

<style lang="scss">
    .navigation-wrapper {
        width: 100%;
        .bg-dark {
            background-color: #11365A !important;
        }
    }
</style>
