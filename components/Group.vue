<template>
    <div class="standings">
        <h2>{{ group.name }}</h2>
        <table>
            <colgroup>
                <col width="6%">
                <col width="200px">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
            </colgroup>
            <thead>
            <tr>
                <th><abbr title="Posición">Pos</abbr></th>
                <th>Equipo</th>
                <th><abbr title="Jugado">PJ</abbr></th>
                <th><abbr title="Victorias">PG</abbr></th>
                <th><abbr title="Empates">PE</abbr></th>
                <th><abbr title="Derrotas">PP</abbr></th>
                <th><abbr title="Diferencia de goles">DG</abbr>
                </th>
                <th><abbr title="Puntos">PT</abbr></th>
            </tr>
            </thead>
            <tbody>
            <tr class="team-614 bottom-section" v-for="(team, key) in group.teams">
                <td>{{ key + 1 }}</td>
                <td>
                    <div class="flag-wrapper">
                        <img :src="team.flag" :alt="team.name" class="img-responsive">&nbsp;{{ team.name }}
                    </div>
                </td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'group',
        props: ['group']
    }
</script>

<style lang="scss">
    .standings {
        margin: 40px auto;

        .flag-wrapper {
            img{
                width: 30px;
            }
        }
    }
</style>
