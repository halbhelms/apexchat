<template>
    <div v-if='inDev' class='inDev'>{{ options.name}}</div>
    <section-header>Login</section-header>
    <form class="login-form" @submit.prevent="loginUser">
        <base-input _label="User name" v-model="login.userName" _id="user-name"></base-input>
        <base-input _label="Password" _type="password" v-model="login.password" _id="password"></base-input>
        <base-button :_styles="styles.submitButton" _type="submit">Login</base-button>
    </form>
</template>

<script>
    // import axios from 'axios'
    import BaseInput from '../components/UI/BaseInput'
    import BaseButton from '../components/UI/BaseButton'
    export default {
        name: 'LoginForm',

        components: {BaseInput, BaseButton},

        props: [],

        data() {
            return {
                login: {
                    userName: null,
                    password: null
                },

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
                
                // axios.post('https://codelifepro.herokuapp.com/', {
                //     headers: {
                //         'apex-company': 'MogerMedia',
                //         'apex-username': 'Admin',
                //         'apex-password': 20171220,
                //         Authorization: 'Basic aGFsLmhlbG1zQGdtYWlsLmNvbTpwYXNzd29yZA=='
                //     }
                // })
                //     .then( response => console.log(response))  
                //     .catch(err => console.log(err))    
                sessionStorage.setItem('loggedIn', true)
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