<template>
    <div v-if='inDev' class='inDev'>{{ $options.name}}</div>
    <section-header>Login</section-header>
    <p class="error" v-if="$store.state.loginError">We couldn't log you in. Please try again or contact your Moger Media representative.</p>
    <form class="login-form" @submit.prevent="loginUser">
        <base-input 
            _label="email" 
            v-model.trim="login.email" 
            _id="email">
        </base-input>
        <base-input 
            _label="Password" 
            _type="password" 
            v-model.trim="login.password" 
            _id="password">
        </base-input>
        <base-button 
            :_styles="styles.submitButton" 
            _type="submit">
            Login
        </base-button>
    </form>
</template>

<script>
    export default {
        name: 'LoginForm',

        components: {},

        props: [],

        data() {
            return {
                login: {
                    email: null,
                    password: null
                },

                error: false,

                styles: {
                    submitButton: {
                        base: {
                            marginTop: '24px',
                            position: 'relative',
                            left: '-40px',
                        },
                        button: {
                            borderRadius: '20px',
                            width: '82px',
                        }
                    }                    
                }
            }
        },

        methods: {
            loginUser() {
                if (JSON.parse(sessionStorage.getItem('currentUser')).email) {
                    this.$store.dispatch('set_current_user', JSON.parse(sessionStorage.getItem('currentUser')))
                    this.$router.push('/')
                } else {
                    console.log('Did not find session storage')            
                    this.$store.dispatch('authenticate_login', this.login)
                }
            }
        },

        computed: {}
    }
</script>

<style scoped>
    .login-form {
        width: 400px;
        margin: 0 auto;
    }
</style>