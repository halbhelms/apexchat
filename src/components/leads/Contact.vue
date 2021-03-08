<template>
    <div class="contact" v-if="lead !== null">
        <div class="card">
            <div class="grid-group">
                <!-- contact date -->
                <div class="contact-element date">
                    <div class="date-label label">Date</div>
                    <div class="date-data data">{{ contactDate }} <span class="time">{{ contactTime }}</span></div>
                </div>
                <!-- dispute -->
                <div class="contact-element dispute">
                    <div class="label"><input type="checkbox" id="dispute" @change="toggleInDispute" /></div>
                    <div class="data"><label for="dispute">Dispute</label></div>
                </div>
  
                <!-- contact name -->
                <div class="contact-element">
                    <div class="name-label label">Contact</div>
                    <div class="name-data data">{{ lead.raw_data.name }}</div>
                </div>
                <!-- contact address -->
                <div class="contact-element">
                    <div class="address-label label">Address</div>
                    <div class="address-data data">{{ lead.address }}</div>
                </div>

                <!-- contact phone -->
                <div class="contact-element">
                    <div class="phone-label label">Phone</div>
                    <div class="phone-data data">{{ lead.phone }}</div>
                </div>
                <!-- contact email -->
                <div class="contact-element">
                    <div class="email-label label">Email</div>
                    <div class="email-data data">{{ lead.email }}</div>
                </div>
            </div>
            
            <!-- dispute form -->
            <div v-if="inDispute" class="dispute-form">
                <!-- form contents -->
                <form @submit.prevent="registerDispute">
                    <div class="dispute-form-control">
                        <div><label class="label" for="message">Message</label></div>
                        <textarea v-model="disputeMessage" name="message" id="message" placeholder="What is the nature of the dispute?"></textarea>
                    </div>
                    <!-- dispute form button -->
                    <button class="dispute-button">Dispute!</button>
                </form>
            </div>
            
        </div>
        <!-- chat -->
        <!-- <div :class="[expanded ? 'card-2-expanded' : 'card-2']" ref="card2"> -->
            <div class="chat" ref="card2">
            <!-- Chat header -->
            <div class="chat-label">Chat 
                <!-- <span class="expand">
                    <input type="checkbox" @change="toggleExpand" id="expand">
                    <label for="expand">Expand</label></span> -->
                    <span class="visitor-only">
                        <input @change="toggleVisitorOnly" type="checkbox" id="visitor-only" />
                    <label for="visitor-only"> Visitor chat only</label>
                </span>
            </div>
            <!-- individual chats messages -->
            <div class="chat-line" v-for="(chatline, index) in chatTexts" :key="index">
                <span :class="[chatline.display_name == 'Visitor' ? 'visitor' : 'agent']">
                    {{ chatline.display_name }}: {{ chatline.text }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import format from 'date-fns/format'
    export default {
        name: 'Contact',
        
        components: {},
        
        props: {
            lead: {
                required: true
            },

            chat: {
                required: true
            }
        },

        data() {
            return {
                expanded: false,
                visitorOnly: false,
                inDispute: false,
                disputeMessage: null
            }
        },

        methods: {
            registerDispute() {
                this.$store.dispatch('register_dispute', {title: `Dispute for Lead ${this.$props.lead.id}`, message: this.disputeMessage})
                this.inDispute = false
                this.disputeMessage = null
            },

            toggleExpand() {
                this.expanded = !this.expanded
            },

            toggleVisitorOnly() {
                this.visitorOnly = !this.visitorOnly
            },

            toggleInDispute() {
                this.inDispute = !this.inDispute
            }
        },

        computed: {
            contactDate() {
                return format(new Date(this.$props.lead.generated_at), "MM.dd.yy")
            },

            contactTime() {
                return format(new Date(this.$props.lead.generated_at), 'h.mm bbbb')
            },

            chatTexts() {
                console.log(this.chat.chat_messages)
                if (this.visitorOnly) {
                    return this.chat.chat_messages.filter( message => message.display_name == 'Visitor' )
                } 
                return this.chat.chat_messages
            }
        }
    }
</script>

<style scoped>
    .agent {
        font-size: 0.8rem;
        color:black;
        font-weight: 300;
    }

    .card {
        position: fixed; 
        width: 620px;
        z-index: 10;
        border: 1px solid silver;
        margin-left: 20px;
        margin-bottom: 1rem;
        border-radius: 12px;
        background-color: white;
        box-shadow: 0 0 6px silver;
    }

    /* .card-2{
        width: 320px;
        border: 1px solid silver;
        margin-left: 20px;
        margin-top: 20px;
        border-radius: 12px;
        background-color: white;
        box-shadow: 0 0 6px silver;
        text-align: left;
        padding-left: 6px;
        padding-right: 4px;
        height: 100%;
        overflow: auto;
    }

    .card-2-expanded{
        position: absolute;
        z-index: 2;
        width: 740px;
        border: 1px solid silver;
        margin-left: 20px;
        margin-top: 20px;
        border-radius: 12px;
        background-color: white;
        box-shadow: 0 0 6px silver;
        text-align: left;
        padding-left: 6px;
        padding-right: 4px;
    } */

    .chat {
        position: relative;
        top: 5rem;;
    }

    .chat-label {
        font-weight:800;
    }

    .chat-line {
        line-height: 1.1rem;
    }

    .contact {
        overflow-y: auto;
        height: 400px;
    }

    .contact-element {
        display: grid;
        grid-template-columns: 80px auto;
    }

    .data {
        text-align: left;
        margin-left: 6px;
    }

    .dispute {
        /* margin-top: 10px;
        width: 7rem;
        border: 1px solid navy;
        border-radius: 8px;
        background-color: red;
        font-weight: 600;
        color: rgb(196,220,239) */
        color: red;
        font-weight: bolder;
        /* display:inline-block; */
        /* float: right; */
    }    

    .dispute-button {
        width: 30%;
        margin: 0 auto;
        margin-top: 6px;
        border: 1px solid silver;
        border-radius: 12px;
        background-color: red;
        color: white;
    }

    .dispute-form {
        /* width: 310px; */
        height: 300px;
        background-color: white;
    }

    .dispute-form-control {
        /* display: grid;
        grid-template-columns: 80px 800px; */
        margin-left: 1rem;
        margin-top: 1rem;
    }

    div.modal-background {
        overflow:scroll
    }

    .expand {
        margin-left: 40px;
        cursor: pointer;
    }

    .grid-group {
        display: grid;
        grid-template-columns: auto auto;
    }

    .label {
        text-align: right;
        font-weight:bolder;
        color: black;
    }

    textarea {
        border: 1px solid silver;
        padding-left: 5px;
        width: 36rem;
        height: 220px;
        margin-top: 12px;
        margin-left: 6px;
        border-radius: 6px;
        box-shadow: 0 0 6px 0 silver;

    }

    .time {
        margin-left: 12px;
    }

    .visitor{
        font-weight: 800;
        color: navy;
        font-size: 0.8rem;
    }

    .visitor-only {
        margin-left: 20px;
        cursor: pointer;
    }
</style>