<template>
    <div class="leads">
            <!-- test of timeFrame getters -->
    <!-- Leads Since...{{ $store.getters.getLeadsForTimeFrame }} -->
        <LeadsHeader />
        <div class="content">
            <!-- Lead Detail inside Modal -->
            <div class="contact-info">
                <Modal v-if="active" @modal-closing="removeActiveLead">
                    <Contact :lead="activeLead" :chat="activeChat" />
                </Modal>
            </div>

            <div class="leads">
                <div class="leads-inner-container">
                    <!-- LeadLineHeader component -->
                    <LeadLineHeader />
                    <!-- individual LeadLineItems -->
                    <LeadLineItem 
                        v-for="lead in $store.getters.getLeadsForTimeFrame" 
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
    </div>
</template>

<script>
    import LeadsHeader from '../components/leads/LeadsHeader'
    import LeadLineHeader from '../components/leads/LeadLineHeader'
    import LeadLineItem from '../components/leads/LeadLineItem'
    import Modal from '../components/site/Modal'
    import Contact from '../components/leads/Contact'
    export default {
        name: 'Leads',
        components: {
            LeadsHeader,
            LeadLineHeader,
            LeadLineItem,
            Modal,
            Contact
        },
        props: [],
        data() {
            return {
                active: '',
                activeLead: null,
                activeChat: null,
                timeFrame: 'lastLogin',
            }
        },
        methods: {
            removeActiveLead() {
                this.active = null;
                this.activeLead = null;
                this.activeChat = null;
            },

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
        background-color: rgb(237,240,245);
        width: 100%;
    }

    .leads-inner-container {
        margin-left: .6rem;
        margin-right: .6rem;
    }

    .content {
        /* display: grid;
        grid-template-columns: 360px 420px; */
        margin-top: 12px;
        height: 100%;
    }

    .contact-info {
    }

</style>