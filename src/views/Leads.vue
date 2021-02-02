<template>
    <div class="leads">
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
                        v-for="lead in $store.state.leadsActiveSlice" 
                        :key="lead.id" 
                        :id="lead.id" 
                        :datetime="lead.date" 
                        :location="lead.location" 
                        :contact="lead.contact"
                        :leadtype="lead.leadtype"
                        :active="active"
                        @drilldown="showLead"/>
                </div>
                <!-- Pagination -->
                <div class="pagination">
                    <div @click="previousLeads" class="prev" v-if="$store.state.leadsOffset !== 0">Prev</div>
                    <div @click="nextLeads" class="next" v-if="moreLeads">Next</div>
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
            nextLeads() {
                this.$store.dispatch('next_leads_active_slice')
            },
            
            previousLeads() {
                this.$store.dispatch('previous_leads_active_slice')
            },

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
        computed: {
            moreLeads() {
                return this.$store.getters.getNumberOfLeadsPerTimeFrame > this.$store.state.leadsOffset + this.$store.state.leadsPerPage
            },
        },

        created: function() {
            this.$store.dispatch('initialize_leads_active_slice')
        },
    }
</script>

<style scoped>
    .leads {
        height: calc(100vh - 48px);
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

    .next {
        margin-left: 20px;
        cursor: pointer;
        display:inline-block;
    }

    .pagination {
        /* position: relative; */
        background-color: lightblue;
        margin-left: 9px;
        margin-right: 9px;
        border-radius: 0 0 8px 8px;
    }

    .prev {
        margin-right: 20px;
        cursor: pointer;
        display:inline-block;
    }

</style>