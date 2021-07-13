<template>

    <!-- currentUser: {{ $store.state.currentUser }} -->
    <div class="header">
        <!-- faq logo -->
        <div class="faq-logo">
            <img id="faq-logo" src="./FAQlogo.png">
        </div>
        <!-- customer logo -->
        <div class="customer-logo">
            <img src="$store.state.currentUser.logo_url" v-if="$store.state.currentUser.logo_url" alt="">
            <div class="client-name" v-else>{{$store.state.currentUser.company_name}}</div>
            <!-- <img src="./sample-client-logo.png" id="customer-logo"> -->
        </div>
        <div class="account-area" @click="toggleAccountForm">
            <!-- <img src="./sample-gravatar.jpeg" alt="" id="sample-gravatar"> -->
            <!-- <img class="account-logo" src="./account-gear.png" alt="" width="32"> -->
            <span class="account-name">
                {{ currentUserFirstName }} {{ currentUserLastName }}
            </span>
        </div>
        <!-- Logout -->
        <button class="logout" @click="logout">Log out</button>
        <!-- account area -->
    </div>
    <!-- initially hidden account info form -->
    <div class="account-info-form" v-if="accountEditMode">
        <form @submit.prevent="changeAccountInfo" class="account-form">
            <!-- username -->
            <div class="form-control">
                <label for="username">Username</label>
                <input type="text" id="username" :placeholder="accountInfo.username" v-model="accountInfo.username">
            </div>
            <!-- password -->
            <div class="form-control">
                <label for="password">Password</label>
                <input type="text" id="password" :placeholder="accountInfo.username" v-model="accountInfo.password">
            </div>
            <!-- cancel and submit buttons -->
            <div class="account-buttons">
                <button @click="cancelAccountInfo" class="account-form-cancel">Cancel</button>
                <button @click="changeAccountInfo" class="account-form-submit">Change</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        
        components: {},
        
        props: {},
        
        data() {
            return {
                accountEditMode: false,
            }
        },
        
        methods: {
            cancelAccountInfo() {
                this.accountEditMode = false;
                this.accountInfo.username = this.$store.state.currentUser.username
                this.accountInfo.password = this.$store.state.currentUser.password
            },

            changeAccountInfo() {
                this.$store.dispatch("change_account_info", this.accountInfo)
                this.accountEditMode = false;
            },

            logout() {
                this.$store.dispatch("set_current_user", null)
            },

            toggleAccountForm() {
                // console.log('toggleAccountForm', 'toggleAccountForm');
                
                this.accountEditMode = !this.accountEditMode
            }
        },
        
        computed: {
            currentUserEmail() {
                return this.$store.state.currentUser.email
            },
            currentUserFirstName() {
                return this.$store.state.currentUser.first_name
            },
            currentUserLastName() {
                return this.$store.state.currentUser.last_name
            },
        }
    }
</script>

<style scoped>

    .logout {
        border: none;
        background: none;
        margin-bottom: 18px;
    }

    .account-area{
        width: 100%;
        margin-top: 20px;
        margin-left: 100px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        cursor: pointer;
    }

    button.account-form-cancel {
        margin-top: 12px;
        border: 1px solid navy;
        border-radius: 12px;
        line-height: 1.5rem;
        width: 6rem;
        background-color:darkgray;
        color:aliceblue;
    }
    button.account-form-submit {
        margin-top: 12px;
        margin-left: 20px;
        border: 1px solid navy;
        border-radius: 12px;
        line-height: 1.5rem;
        width: 6rem;
        background-color: #008AE6;
        color:aliceblue;
    }

    .account-info-form {
        position: absolute;
        left: 670px;
        top: 60px;
        border: 1px solid silver;
        box-shadow: 0 0 6px silver;
        background-color: white;
        border-radius: 12px;
        padding: 6px;
        width: 100%;
        height: 140px;
        z-index: 99;
    }

    .account-logo {
        text-align: right;
        /* margin-left: 42px; */
    }

    .account-name {
        position: relative;
        left: -100px;
        text-align: left;
        margin-top: 4px;
    }

    .client-name {
        margin-top: 24px;
    }

    .form-control {
        display: grid;
        grid-template-columns: 40% 60%;
        margin-bottom: 12px;
    }

    .form-control .input {
        margin-left: 6px;
        border: 1px solid silver;
    }

    .header {
        display: grid;
        grid-template-columns: auto auto auto 60px;
        width: 100%
    }

    #faq-logo{
        height: 100px;
        margin-top: -10px;
    }

    .customer-logo {
        margin: 0px auto
    }
    #customer-logo {
        height: 50px;
        margin-top: 4px;
    }

    #username, #password {
        border: 1px solid silver;
        border-radius: 6px;
        padding-left: 4px;
    }

    /* #sample-gravatar {
        height: 50px;
        border: 2px solid white;
        border-radius: 25px;
    } */

    /* .border-only {
        border: 3px solid gray;
        border-radius: 34px;
        width: 56px;
    } */


</style>