<template>
    <div class="group-wrapper">
        <h4>{{ group.name }}</h4>
        <div class="row">
            <div class="col-1">
                <abbr title="Posición">Pos</abbr>
            </div>
            <div class="col-5">
                Equipo
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-2">
                        <abbr title="Jugado">PJ</abbr>
                    </div>
                    <div class="col-2">
                        <abbr title="Victorias">PG</abbr>
                    </div>
                    <div class="col-2">
                        <abbr title="Empates">PE</abbr>
                    </div>
                    <div class="col-2">
                        <abbr title="Derrotas">PP</abbr>
                    </div>
                    <div class="col-2">
                        <abbr title="Diferencia de goles">DG</abbr>
                    </div>
                    <div class="col-2">
                        <abbr title="Puntos">PT</abbr>
                    </div>
                </div>
            </div>
        </div>
        <team :team="team" v-for="(team) in group.teams" :key="team.id"></team>
    </div>
</template>

<script>
    import Team from './Team.vue'

    export default {
        name: 'group',
        props: ['group'],
        components: {
            Team
        }
    }
</script>

<style lang="scss">
    .group-wrapper {
        padding: 4px 0;
        margin-bottom: 40px;
        &:first-child {
            margin-bottom: 20px;
        }
        h4 {
            font-size: 1rem;
            font-weight: bold;
        }

        .team-name {
            font-size: .80rem;
        }

        .flag-wrapper {
            img {
                width: 30px;
            }
        }

    }
</style>
