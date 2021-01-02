<template>
    <form @submit.prevent="submitForm">
        <!-- title -->
        <div class="form-element">
            <label for="title">
                Title
            </label>
            <input type="text" id="title" v-model="title">
        </div>
        <!-- message -->
        <div class="form-element">
            <label for="message">
                How can we help you?
            </label>
            <textarea id="message" cols="30" rows="10"></textarea>
        </div>
        <!-- button -->
        <button>Save</button>              
    </form>
</template>

<script>
    export default {
        name: 'SupportForm',
        components: {},
        props: {},
        data() {
            return {
                title: " ",
                message: " "
            }
        },
        methods: {
            submitForm() {

            }
        },
        computed: {}
    }
</script>

<style scoped>
    form {
        margin-left: 20px;
        text-align: left;
    }

    button {
        margin-top: 20px;
        width: 7rem;
        border: 1px solid navy;
        border-radius: 8px;
        background-color: rgb(0,138,230);
        font-weight: 600;
        color: rgb(196,220,239)
    }

    label {
        display: block;
        margin-top: 20px;
        font-size: 0.9rem;
        color: rgb(134,134,135);
    }

    input {
        width: 400px;
        border: 1px silver;
        border-radius: 8px;
        padding-left: 4px;
        font-family: 'Dosis', sans-serif;
    }

    input:active {
        border: 1px solid navy;
        box-shadow: 0 0 6px 0 silver;
    }

    textarea {
        width: 400px;
        height: 200px;
        border: 1px silver;
        border-radius: 8px;
        padding-left: 4px;
    }
</style>