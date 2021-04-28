<template>
    <section class="login-form-wrapper">
        <div v-if='inDev' class='inDev'>{{ $options.name}}</div>
        <section-header>Login</section-header>
        <p class="error" v-if="$store.state.loginError">We couldn't log you in. Please try again or contact your Moger Media representative.</p>
        <form class="login-form" @submit.prevent="loginUser">
            <!-- email -->
            <div class="form-control">
                <input v-model.trim="login.email" id="email" />
                <label for="email">Email</label>
            </div>
            <!-- password -->
            <div class="form-control">
                <input type="password" v-model.trim="login.password" id="password" />
                <label for="password">Password</label>
            </div>
            
            <button type="submit" class="submit-button">Login</button>
        </form>
    </section>
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
                if (JSON.parse(sessionStorage.getItem('currentUser'))?.email) {
                    this.$store.dispatch('set_current_user', JSON.parse(sessionStorage.getItem('currentUser')))
                    this.$router.push('/')
                } else {
                    this.$store.dispatch('authenticate_login', this.login)
                }
            }
        },

        computed: {}
    }
</script>

<style scoped>
    .login-form-wrapper {
        position: relative;
        width: 100vw;
        margin: 0 auto;
        z-index: 200;
    }

    .login-form {
        /* position: relative; */
        width: 500px;
        margin: 0 auto;
        z-index: 199;
        /* left: 350px; */
    }

    .form-control {
        margin-top: 24px;
    }

    input {
        border: 1px solid silver;
        font-size: 1.4rem;
        position: relative;
        width: 320px;
    }

    label {
        display: block;
        background: rgb(21,118,227);
        color: white;
        width: 320px;
        margin: 0 auto;
    }

    button {
        width: 200px;
        height: 40px;
        background: rgb(21,118,227);
        color: white;
        border-radius: 20px;
        margin-top: 24px;
    }
</style>