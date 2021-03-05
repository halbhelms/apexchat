<template>
    login: {{ login }}
    <div v-if='inDev' class='inDev'>{{ $options.name}}</div>
    <section-header>Login</section-header>
    <p class="error" v-if="error">We couldn't log you in. Please try again or contact your Moger Media representative.</p>
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
    import axios from 'axios'
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
            async loginUser() {
                console.log('in loginUser')                
                try {
                    // attempt a login
                    let login = await axios.get('https://codelifepro.herokuapp.com/users/me', {
                        headers: {
                            Authorization: `Basic ${btoa(this.login.email +':' + this.login.password)}` 
                        }
                    })
                    
                    // set successfully logged-in user as currentUser in sessionStorage
                    console.log('login', login.data);
                    // set logged-in user as session currentUser
                    sessionStorage.setItem('currentUser', JSON.stringify(login.data))
                    // set the last login of the currentUser
                    this.$store.dispatch('set_last_login', login.data.last_login_date)
                    // off we go to the dashboard
                    location.replace('/')
                } catch (err) {
                    this.error = true;
                    console.log('Login error', err);
                }
            },
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