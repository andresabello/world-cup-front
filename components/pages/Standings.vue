<template>
    <main role="main" class="standings">
        <group :group="currentGroup" :key="currentGroup.id"
               v-if="currentGroup !== null && currentGroup.id !== 0"></group>

        <div class="display-wrapper">
            <p v-show="currentGroup !== null && displayAllGroups === false">
                <span @click="displayAllGroups = true">Ver Todos</span>
            </p>
            <p v-show="currentGroup !== null && displayAllGroups === true">
                <span @click="displayAllGroups = false">Esconder</span>
            </p>
        </div>


        <group v-for="group in groups" :key="group.id" :group="group"
               v-if="displayAllGroups || currentGroup === null"></group>

        <!--<span v-else @click="displayAllGroups = false">Esconder</span>-->
    </main>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex'
    import Group from './../Group.vue'

    export default {
        name: 'standings',
        data () {
            return {
                displayAllGroups: false
            }
        },
        mounted () {
            this.getGroups()
        },
        computed: mapGetters({
            groups: 'getFilteredGroups',
            currentGroup: 'getCurrentGroup'
        }),
        methods: {
            ...mapActions({
                getGroups: 'getAllGroups',
            })
        },
        components: {
            Group,
        }
    }
</script>

<style lang="scss">
    .standings {
        margin-top: 40px;
        .display-wrapper {
            margin: 0 auto 20px auto;
            p {
                cursor: pointer;
                text-align: center;
                font-weight: bold;
                -webkit-transition: all .3s ease-in-out;
                -moz-transition: all .3s ease-in-out;
                -ms-transition: all .3s ease-in-out;
                -o-transition: all .3s ease-in-out;
                transition: all .3s ease-in-out;

                &:hover {
                    opacity: .9;
                }
            }
        }
    }
</style>

