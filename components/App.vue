<template>
    <div class="container">
       <navigation>
           <div class="panel-body">
               <router-view></router-view>
           </div>
       </navigation>
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
