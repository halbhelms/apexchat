<template>
    <div class="contact" v-if="lead !== null">
        <div class="card">
            <!-- contact date -->
            <div class="contact-element">
                <div class="date-label label">Contact</div>
                <div class="date-data data">{{ contactDate }} <span class="time">{{ contactTime }}</span></div>
            </div>
            <!-- contact name -->
            <div class="contact-element">
                <div class="name-label label">Contact</div>
                <div class="name-data data">{{ lead.contact }}</div>
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
            <!-- dispute -->
            <div class="contact-element dispute">
                <div class="label"><input type="checkbox" id="dispute" @change="toggleInDispute" /></div>
                <div class="data"><label for="dispute">Dispute</label></div>
            </div>
            <!-- dispute form -->
            <div v-if="inDispute" class="dispute-form">
                <!-- form contents -->
                <form @submit.prevent="registerDispute">
                    <div class="dispute-form-control_">
                        <div><label class="label" for="message">Message</label></div>
                        <textarea v-model="disputeMessage" name="message" id="message" placeholder="What is the nature of the dispute?"></textarea>
                    </div>
                    <!-- dispute form button -->
                    <button class="dispute-button">Dispute!</button>
                </form>
            </div>
            
        </div>
        <!-- chat -->
        <div :class="[expanded ? 'card-2-expanded' : 'card-2']" ref="card2">
            <!-- Chat header -->
            <div class="chat-label">Chat 
                <span class="expand">
                    <input type="checkbox" @change="toggleExpand" id="expand">
                    <label for="expand">Expand</label></span><span class="visitor-only">
                        <input @change="toggleVisitorOnly" type="checkbox" id="visitor-only" />
                    <label for="visitor-only">Visitor chat only</label>
                </span>
            </div>
            <!-- individual chats messages -->
            <div class="chat-line" v-for="(chatline, index) in chatTexts" :key="index">
                <span :class="[chatline.participantDisplayName == 'Visitor' ? 'visitor' : 'agent']">
                    {{ chatline.participantDisplayName }}: {{ chatline.text }}
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
                required: false
            },

            chat: {
                required: false
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
                this.$store.dispatch('register_dispute', {leadId: this.$props.lead.id, dispute: this.disputeMessage})
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
                return format(this.$props.lead.date, "MM.dd.yy")
            },

            contactTime() {
                console.log('this.$props.lead.date', this.$props.lead.date);
                
                return format(this.$props.lead.date, 'h.mm bbbb')
            },

            chatTexts() {
                if (this.visitorOnly) {
                    return this.chat.texts.filter( chat => chat.participantDisplayName == 'Visitor' )
                } 
                return this.chat.texts
            }
        }
    }
</script>

<style scoped>
    .agent {
        font-size: 0.8rem;
    }

    .card {
        width: 320px;
        min-height: 170px;
        border: 1px solid silver;
        margin-left: 20px;
        border-radius: 12px;
        background-color: white;
        box-shadow: 0 0 6px silver;
    }

    .card-2{
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
        width: 310px;
        height: 300px;
        background-color: white;
    }

    .dispute-form-control {
        display: grid;
        grid-template-columns: 80px 150px;
    }

    .expand {
        margin-left: 40px;
        cursor: pointer;
    }

    .label {
        text-align: right;
        font-weight:bolder;
        color: black;
    }

    textarea {
        border: 1px solid silver;
        padding-left: 5px;
        width: 300px;
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
        font-weight: bolder;
        color: green;
        font-size: 0.8rem;
    }

    .visitor-only {
        margin-left: 20px;
        cursor: pointer;
    }
</style>