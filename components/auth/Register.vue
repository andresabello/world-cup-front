<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            <h1 class="text-center">Register</h1>
                        </div>
                        <pi-form :fields="fields" :action="action" @success="success"></pi-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import PiForm from '../utilities/PiForm.vue'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: mapGetters({
            fields: 'registerForm',
            action: 'registerAction'
        }),
        methods: {
            success(response) {
                console.log(response)
                let vm = this
                vm.setToken(response.access_token)
                vm.setLoggedIn(true)
                vm.setUser(response.user)
                vm.$cookie.set('refresh_token', response.refresh_token, 1);
                setTimeout(() =>  {
                    vm.$router.push({
                        name: 'home'
                    })
                }, 2500)
            },
            ...mapActions({
                setToken: 'setToken',
                setLoggedIn: 'setLoggedIn',
                setUser: 'setUser'
            })
        },
        components: {
            "pi-form": PiForm
        }
    }
</script>