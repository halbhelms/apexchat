<template>
    <div class="header">
        <div class="faq-logo">
            <img id="faq-logo" src="./FAQlogo.png">
        </div>
        <div class="customer-logo">
            <img src="./sample-client-logo.png" id="customer-logo">
        </div>
        <div class="account-area">
            <div class="border-only">
                <img src="./sample-gravatar.jpeg" alt="" id="sample-gravatar">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        components: {},
        props: {},
        data() {
            return {}
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped>
    .account-area{
        /* position: absolute; */
        /* top: 6px; */
        /* right: 12px; */
        /* align-items: right; */
        width: 60px;
        margin-top: 6px;
        margin-left: 100px;
    }

    .header {
        display: grid;
        grid-template-columns: 320px 320px 320px;
        width: 960px;
        max-width: 960px;
        outline: 1px solid red;
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

    #sample-gravatar {
        height: 50px;
        border: 2px solid white;
        border-radius: 25px;
    }

    .border-only {
        border: 3px solid gray;
        border-radius: 34px;
        width: 56px;
    }


</style>