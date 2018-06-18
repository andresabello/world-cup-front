<template>
    <header class="navigation-wrapper">
        <nav class="navbar navbar-dark bg-dark">
            <div class="menu-wrapper">
                <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                        aria-label="Navegaci&oacute;n">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand text-center" href="/">Futbol Seleccion Colombia</a>
            </div>

            <div class="select-wrapper">
                <label>
                    <select class="form-control team-select" v-model="teamId" @change="setTeam">
                        <option :value="team.id" v-for="team in teams">{{team.name}}</option>
                    </select>
                </label>
            </div>
        </nav>
    </header>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'navigation',
        data () {
            return {
                teamId: 0
            }
        },
        mounted () {
            this.getTeams()
        },
        computed: mapGetters({
            teams: 'getTeamList',
            team: 'getCurrentTeam'
        }),
        methods: {
            setTeam () {
                this.setCurrentTeam(this.teamId)
                this.getNews({
                    query: this.team[0].name,
                    page: 0
                })
                let groupId = typeof this.team[0].group_id !== 'undefined' ? this.team[0].group_id : 0
                this.setGroup(groupId)
            },
            ...mapActions({
                getTeams: 'getAllTeams',
                setCurrentTeam: 'setTeam',
                getNews: 'getAllNews',
                setGroup: 'setCurrentGroup'
            })
        },
    }
</script>

<style lang="scss">
    .navigation-wrapper {
        width: 100%;

        .navbar {
            &.navbar-dark {
                &.bg-dark {
                    background-color: #11365A !important;
                    padding: 0;
                    margin-top: 0;
                }
            }
        }
        .select-wrapper {
            display: block;
            clear: both;
            width: 100%;
            padding-bottom: 15px;
            label {
                width: 100%;
                .team-select {
                    width: 75%;
                    margin: 0 auto;
                }
            }
        }

        .menu-wrapper {
            background: darken(#11365A, 12);
            display: block;
            clear: both;
            width: 100%;
            padding: 20px 20px 0 20px;
            margin-bottom: 20px;

            button {
                display: inline-block;
                float: left;
                margin-right: 20px;
                margin-bottom: 20px;
            }
        }

    }
</style>
