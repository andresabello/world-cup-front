<template>
    <form @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
        <div class="alert alert-success text-center" v-show="success.active">
            <strong>{{ success.message }}</strong>
        </div>
        <div class="form-group" v-for="(field, index) in fields" v-if="fields">
            <label class="label" v-if="field.type !== 'submit'">{{ field.message }}</label>
            <!--<p>{{ form }}</p>-->
            <input class="form-control" :class="{'is-invalid': form.errors.has(index)}" type="text" :name="index"
                   v-model="form[index]" v-if="field.type === 'text'">
            <input class="form-control" :class="{'is-invalid': form.errors.has(index)}" type="password" :name="index"
                   v-model="form[index]" v-if="field.type === 'password'">
            <input class="form-control" type="password" :name="index" v-model="form[index]"
                   v-if="field.type === 'password_confirmation'">
            <input class="form-control" :class="{'is-invalid': form.errors.has(index)}" type="email" :name="index"
                   v-model="form[index]" v-if="field.type === 'email'">
            <textarea class="form-control" :class="{'is-invalid': form.errors.has(index)}" :name="index"
                      v-model="form[index]" v-if="field.type === 'textarea'"> </textarea>
            <input class="form-control" :class="{'is-invalid': form.errors.has(index)}" type="checkbox" :name="index"
                   v-model="form[index]" v-if="field.type === 'checkbox'">
            <input class="form-control" :class="{'is-invalid': form.errors.has(index)}" type="radio" :name="index"
                   v-model="form[index]" v-if="field.type === 'radio'">
            <div class="invalid-feedback">
                <p v-text="form.errors.get(index)" v-if="form.errors.has(index)"></p>
            </div>
        </div>
        <div class="form-group">
            <button class="btn btn-block btn-primary" :disabled="form.errors.any()">{{ fields.submit.message }}</button>
        </div>
    </form>
</template>

<script type="text/babel">

    import Form from '../../api/classes/pi-forms.js'

    export default {
        data () {
            return {
                form: {},
                success: {
                    active: false,
                    message: ''
                }
            }
        },

        props: {
            'fields': {
                default: {},
                type: Object
            },
            'action': {
                default: 'login',
                type: String
            },
            'submit': {
                default: true,
                type: Boolean
            }
        },

        beforeMount () {
            let data = this.setFields(this.fields)
            this.form = new Form(data)
        },

        methods: {
            onSubmit () {
                let vm = this

                if (vm.submit) {
                    console.log(vm.submit)
                    vm.form.post(vm.action)
                        .then(data => {
                            vm.setSuccessMessage(data.message)
                            vm.$emit('success', data)
                            setTimeout(() => {
                                vm.success.active = false
                                vm.form.reset()
                                let data = vm.setFields(vm.fields)
                                vm.form = new Form(data)
                            }, 3000)
                        })
                        .catch(errors => console.log(errors))
                } else {
                    vm.$emit('submit', this.form)
                }
            },
            setSuccessMessage (message) {
                this.success.active = true
                this.success.message = message
            },

            setFields (fields) {
                console.log(fields)
                let data = {}
                Object.keys(fields).forEach(key => {
                    if (key !== 'submit') {
                        data[key] = typeof fields[key].value !== 'undefined' ? fields[key].value : ''
                    }
                })
                return data
            }
        }
    }
</script>
