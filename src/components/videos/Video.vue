<template>
    <div>
        <div class="video" v-html="_embedCode"></div>
        <textarea ref="input" :value="embedCode"></textarea>
        <button @click="showEmbedCode" class="embed-code">
            Get embed code
        </button>

        
    </div>
</template>

<script>
    import { useToast } from 'vue-toastification'

    export default {

        name: '',

        components: {},

        props: ['_embedCode', '_rand'],

        data() {
            return {
                embedCode: null,
                videoId: null
            }
        },

        methods: {
            getToast() {
                return useToast()
            },

            showEmbedCode() {
                let el = this.$refs.input
                el.innerHTML = this.embedCode
                el.select()
                document.execCommand('copy')
                const toast = useToast()
                toast.info("The embed code has been copied to your clipboard")
            }
        },
        
        computed: {},

        mounted() {
            this.embedCode = this.$props._embedCode 
        }
    }
</script>

<style scoped>
    button.embed-code {
        margin-top: 6px;
        /* margin-left: 20px; */
        /* border: 1px solid navy; */
        border: 0;
        border-radius: 12px;
        line-height: 1.5rem;
        width: 8rem;
        background-color: #008AE6;
        color:aliceblue;
        font-size: 0.8rem;
    }

    button.embed-code:hover {
        background-color: #2d83af;
        transition: all 0.5s ease;
        transform: scale(1.05) perspective(1px)
    }

    button.embed-code:active, button.embed-code:focus {
        border-radius: 12px;
    }

    .Vue-Toastification__toast--default.my-custom-toast-class {
        font-size: .7rem;
    }   

    textarea {
        position:absolute;
        left: -9999px;
    }
</style>
        