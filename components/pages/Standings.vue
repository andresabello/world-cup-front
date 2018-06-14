<template>
    <main role="main" class="standings">
        <div class="container">
            <group v-for="group in groups" :key="group.id" :group="group"></group>
        </div>
    </main>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex'
    import Group from './../Group.vue'


    export default {
        name: 'standings',
        mounted () {
            this.getGroups()
        },
        computed: mapGetters({
            groups: 'getGroups'
        }),
        methods:{
            ...mapActions({
               getGroups: 'getAllGroups',
           })
        },
        components: {
            Group,
        }
    }
</script>

<style scoped>
    .standings {
        margin-top: 80px;
    }
</style>

