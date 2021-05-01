<template>
    <div class="leads">
        <LeadsHeader />
        <div class="content">
            <!-- Lead Detail inside Modal -->
            <div class="contact-info">
                <Modal v-if="activeChat && activeLead" @modal-closing="removeActiveLead">
                    <Contact :lead="activeLead" :chat="activeChat" />
                </Modal>
            </div>

            <div class="leads">
                <div class="leads-inner-container">
                    <div>
                    <!-- LeadLineHeader component -->
                    <LeadLineHeader />
                        <div class="loading" v-if="$store.state.loading">
                            <img src="./spinner.gif" width="80" alt="">
                        </div>
                    <!-- individual LeadLineItems -->
                        <div v-if="!selectedLeads.length && !$store.state.loading">No leads were found for this time frame</div>
                        <div v-else>
                        <LeadLineItem 
                            v-for="lead in selectedLeads" 
                            :key="lead.id" 
                            :id="lead.id" 
                            :datetime="lead.generated_at" 
                            :address="lead.address"
                            :city="lead.city"
                            :state="lead.state"
                            :zipcode="lead.zipCode"
                            :contact="lead.raw_data.name"
                            :leadtype="lead.lead_type"
                            :active="active"
                            @drilldown="showLead"/>
                        </div>
                    </div>
                </div>
                <!-- Pagination -->
                <!-- temporarily removed 03.09 -->
                <div class="pagination">
                    <div @click="previousLeads" class="previous arrow" v-if="$store.state.leadsOffset !== 0"><img src="../components/leads/button_left.png" alt=""></div>
                    <div @click="nextLeads" class="next arrow" v-if="moreLeads"><img src="../components/leads/button_right.png" alt=""></div>
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
                active: false,
            }
        },
        methods: {
            showLead(id) {
                this.active = true
                this.$store.dispatch('set_active_lead', id)
            },
            removeActiveLead() {
                // console.log('in removeActiveLead');
                this.$store.dispatch('remove_active_lead')
            }
        },

        computed: {
            selectedLeads() {
                // console.log('this.$store.state.timeFrame', this.$store.state.timeFrame);
                
                if (this.$store.state.timeFrame == 'lastLogin' && this.$store.state.leadsLastLogin) {
                    // console.log('this.$store.state.leadsLastLogin.length', this.$store.state.leadsLastLogin.length);
                    
                    return this.$store.state.leadsLastLogin
                }
                if (this.$store.state.timeFrame == 'last30') {
                    // console.log('this.$store.state.leadsLast30', this.$store.state.leadsLast30);
                    
                    return this.$store.state.leadsLast30
                }
                if (this.$store.state.leadsLast60 && this.$store.state.timeFrame == 'last60') {
                    return this.$store.state.leadsLast60
                }
                
                return []
            },
            activeChat() {
                return this.$store.state.activeChat
            },
            activeLead() {
                return this.$store.state.activeLead
            },
        },

        created() {
            this.$store.dispatch('load_leads', this.$store.state.currentUser.company_id)
        },
    }
</script>

<style scoped>
    .arrow {
        position: relative;
        width: 48px;
        margin-top: 6px;
        margin-bottom: -3px;
    }

    .leads {
        height: calc(100vh - 48px);
        background-color: rgb(237,240,245);
        width: 100%;
    }

    .leads-inner-container {
        margin-left: .6rem;
        margin-right: .6rem;
    }

    .loading {
        position: relative;
        left: 340px;
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
        /* background-color: lightblue; */
        /* border: 1px solid grey; */
        margin-left: 9px;
        margin-right: 9px;
        border-radius: 0 0 8px 8px;
    }

    .previous {
        margin-right: 20px;
        cursor: pointer;
        display:inline-block;
    }

</style>