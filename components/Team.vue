<template>
    <div class="row team-wrapper">
        <div class="col-1">
            <span>1</span>
        </div>
        <div class="col-5">
            <div class="flag-wrapper">
                <img :src="team.flag" :alt="team.name" class="img-responsive">&nbsp;
                <span class="team-name">{{ team.name }}</span>
            </div>
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col-2">{{played}}</div>
                <div class="col-2">{{won}}</div>
                <div class="col-2">{{tied}}</div>
                <div class="col-2">{{lost}}</div>
                <div class="col-2">0</div>
                <div class="col-2">{{points}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'team',
        props: ['team'],
        data () {
            return {
                currentTeam: null
            }
        },
        mounted () {
            this.currentTeam = this.team
        },

        computed: {
            played () {
                if (typeof this.currentTeam !== 'undefined') {
                    let allMatches = this.team.home_matches.concat(this.team.away_matches)
                    return allMatches.filter(match => match.winner_id !== null).length
                }

                return 0
            },
            won () {
                if (typeof this.currentTeam !== 'undefined' && this.currentTeam !== null) {
                    let allMatches = this.team.home_matches.concat(this.team.away_matches)
                    return allMatches.filter(match => match.winner_id === this.currentTeam.id).length
                }

                return 0
            },

            tied () {
                if (typeof this.currentTeam !== 'undefined' && this.currentTeam !== null) {
                    let allMatches = this.team.home_matches.concat(this.team.away_matches)
                    return allMatches.filter(match => match.winner_id === null && match.finished).length
                }

                return 0
            },

            lost () {
                if (typeof this.currentTeam !== 'undefined' && this.currentTeam !== null) {
                    let allMatches = this.team.home_matches.concat(this.team.away_matches)
                    return allMatches.filter(match => (match.home_id === this.currentTeam.id || match.away_id === this.currentTeam.id) && match.winner_id !== null && match.winner_id !== this.currentTeam.id).length
                }

                return 0
            },

            points () {
                return (this.won * 3) + (this.tied * 1)
            }
        }
    }
</script>

<style scoped>

</style>
