<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            <h1 class="text-center">Settings</h1>
                        </div>

                        <form @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">

                            <div class="form-group">
                                <label class="label">Name</label>
                                <!--<p>{{ form }}</p>-->
                                <input class="form-control" :class="{'is-invalid': errors.has('name')}" type="text"
                                       name="name"
                                       v-model="user.name" :disabled="type !== 'app'">
                                <div class="invalid-feedback">
                                    <p v-text="errors.get('name')" v-if="errors.has('name')"></p>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="label">Email</label>
                                <!--<p>{{ form }}</p>-->
                                <input class="form-control" :class="{'is-invalid': errors.has('email')}" type="email"
                                       name="email"
                                       v-model="user.email" :disabled="type !== 'app'">
                                <div class="invalid-feedback">
                                    <p v-text="errors.get('email')" v-if="errors.has('email')"></p>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="label">Phone</label>
                                <!--<p>{{ form }}</p>-->
                                <input class="form-control" :class="{'is-invalid': errors.has('phone_number')}"
                                       type="text" name="phone"
                                       v-model="user.phone">
                                <div class="invalid-feedback">
                                    <p v-text="errors.get('phone_number')" v-if="errors.has('phone_number')"></p>
                                </div>
                            </div>

                            <div class="form-group">
                                <button class="btn btn-block btn-primary" :disabled="errors.any()">Update</button>
                            </div>

                            <div class="alert alert-success text-center" v-show="success.active">
                                <strong>{{ success.message }}</strong>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex'
    import Errors from '../../api/classes/pi-errors.js'

    export default {
        name: 'settings',
        data () {
            return {
                errors: new Errors(),
                success: {
                    active: false,
                    message: ''
                }
            }
        },
        computed: mapGetters({
            action: 'settingsAction',
            checkAction: 'checkAction',
            token: 'token',
            user: 'user',
        }),

        beforeRouteEnter (to, from, next) {
            next(vm => {

                let data = {}

                if (typeof vm.user !== 'undefined' && vm.user.email.length === 0) {
                    data.getUser = true
                }

                if (vm.$cookie.get('refresh_token')) {
                    data.refresh_token = vm.$cookie.get('refresh_token')
                }

                if (to.query.user_token) {
                    data.user_token = to.query.user_token
                }

                axios.post(vm.checkAction, data)
                    .then((response) => {

                        vm.setLoggedIn(true)

                        if (response.data.user && response.data.user.name.length > 0) {
                            vm.setUser(response.data.user)
                            vm.setSettings(response.data.user)
                        }

                        if (typeof response.data.access_token !== 'undefined') {
                            vm.setToken(response.data.access_token)
                        }

                        if (typeof response.data.refresh_token !== 'undefined') {
                            vm.$cookie.delete('refresh_token')
                            vm.$cookie.set('refresh_token', response.data.refresh_token, 1)
                        }

                        next()
                    })
                    .catch(({response}) => {
                        next('login')
                    })
            })
        },
        methods: {
            onSubmit () {
                let vm = this
                let data = {
                    name: vm.user.name,
                    email: vm.user.email,
                    phone_number: vm.user.phone
                }

                axios.post(this.action, data)
                    .then(({data}) => {
                        vm.success(data)
                    })
                    .catch(({response}) => {
                        console.log(response)
                        vm.errors.record(response.data.errors)
                    })
            },
            success (data) {
                let vm = this

                vm.success.message = data.message
                vm.success.active = true

                setTimeout(() => {
                    vm.success.active = false
                    vm.success.message = ''
                }, 3000)
            },
            ...mapActions({
                setToken: 'setToken',
                setLoggedIn: 'setLoggedIn',
                setUser: 'setUser',
                setSettings: 'setSettings',
                notify: 'notify'
            })
        }
    }
</script>

<style scoped>

</style>