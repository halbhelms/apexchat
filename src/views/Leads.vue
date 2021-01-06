<template>
    <div class="leads">
        <LeadsHeader />
        <div class="content">
            <!-- Contact component -->
            <div class="contact-info">
                <Contact :lead="activeLead" :chat="activeChat" />
            </div>
            <div class="leads">
                <!-- LeadLineHeader component -->
                <LeadLineHeader />
                <!-- individual LeadLineItems -->
                <LeadLineItem 
                    v-for="lead in $store.state.leads" 
                    :key="lead.id" 
                    :id="lead.id" 
                    :datetime="lead.date" 
                    :location="lead.location" 
                    :contact="lead.contact"
                    :leadtype="lead.leadtype"
                    :active="active"
                    @drilldown="showLead"/>
            </div>
        </div>
    </div>
</template>

<script>
    import LeadsHeader from '../components/leads/LeadsHeader'
    import LeadLineHeader from '../components/leads/LeadLineHeader'
    import LeadLineItem from '../components/leads/LeadLineItem'
    import Contact from '../components/leads/Contact'
    export default {
        name: 'Leads',
        components: {
            LeadsHeader,
            LeadLineHeader,
            LeadLineItem,
            Contact
        },
        props: [],
        data() {
            return {
                active: '',
                activeLead: null,
                activeChat: null,
            }
        },
        methods: {
            showLead(id) {
                this.active = id
                this.activeLead = this.$store.getters.getLeadById(id)
                this.activeChat = this.$store.getters.getChatById(this.activeLead.chatId)
            }
        },
        computed: {}
    }
</script>

<style scoped>
    .leads {
        height: 100%;
        background-color: rgb(237,240,245) 
    }
    .content {
        display: grid;
        grid-template-columns: 360px 420px;
        margin-top: 12px;
        height: 100%;
    }

    .contact-info {
    }

</style>