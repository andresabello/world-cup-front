<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            <h1 class="text-center">Login</h1>
                        </div>
                        <div class="alert alert-danger text-center" v-if="$route.query.redirect">
                            <strong>You need to login first.</strong>
                        </div>

                        <form @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
                            <div class="form-group">
                                <label class="label">Email</label>
                                <!--<p>{{ form }}</p>-->
                                <input class="form-control" :class="{'is-invalid': errors.has('email')}" type="email" name="email"
                                       v-model="email">
                                <div class="invalid-feedback">
                                    <p v-text="errors.get('email')" v-if="errors.has('email')"></p>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="label">Password</label>
                                <!--<p>{{ form }}</p>-->
                                <input class="form-control" :class="{'is-invalid': errors.has('password')}" type="password" name="password"
                                       v-model="password">
                                <div class="invalid-feedback">
                                    <p v-text="errors.get('password')" v-if="errors.has('password')"></p>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="google-auth-wrapper">
                                    <i class="fa fa-google" aria-hidden="true" @click="googleLogin"></i>
                                </div>
                            </div>

                            <div class="form-group">
                                <button class="btn btn-block btn-primary" :disabled="errors.any()">Login</button>
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
    import Errors from '../../api/classes/pi-errors.js'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                errors: new Errors(),
                email: '',
                password: '',
                success:{
                    active: false,
                    message: ''
                }
            }
        },
        computed: mapGetters({
            fields: 'loginForm',
            action: 'loginAction',
            googleAction: 'googleAction'
        }),
        methods: {
            success(response) {
                let vm = this
                vm.setToken(response.access_token)
                vm.setLoggedIn(true)
                vm.setUser(response.user)
                vm.$cookie.delete('refresh_token')
                vm.$cookie.set('refresh_token', response.refresh_token, 1)

                setTimeout(() =>  {
                    vm.$router.push({
                        name: 'home'
                    })
                }, 2500)
            },
            googleLogin() {
                window.open(this.googleAction,'_blank');
            },
            ...mapActions({
                setToken: 'setToken',
                setLoggedIn: 'setLoggedIn',
                setUser: 'setUser'
            })
        }
    }
</script>