<template>
    <div class="time-frame">
        <button @click="displayChat">display chat</button>
        Chats: <div v-if="display">{{ chats.ABCDE }}</div>
    </div>
</template>

<script>

    export default {
        name: 'Temp',

        components: {},

        props: [],

        data() {
            return {
                chats: {},
                display: false,
            }
        },

        methods: {
            displayChat() {
                this.display = true;
            }
        },

        computed: {},

        mounted() {
            console.log('in mounted')
            let randomString = (length) => {
                let result = ''
                let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                let charactersLength = characters.length
                for (let i=0; i<length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength))
                }
                return result;
            }

            let newChat = (chatId = randomString(5)) => {
                // let chatId = randomString(5)
                let chat = []
                for (let i=0; i<22; i++) {
                    let msg = {id: randomString(5), msg: randomString(45)}
                    chat.push(msg)
                }
                this.chats[chatId] = chat
            }

            for (let i=0; i<32000; i++) {
                newChat()
            }

            
            newChat('ABCDE')
            // console.log(this.chats.ABCDE)
            
        }
    
    }
</script>

<style scoped>

</style>