<template>
    <div class="leads">
        <LeadsHeader />
        <div class="content">
            <div class="contact-info">Contact</div>
            <div class="leads">
                <LeadLineHeader />
                <LeadLineItem 
                    v-for="lead in $store.state.leads" 
                    :key="lead.id" 
                    :id="lead.id" 
                    :datetime="lead.date" 
                    :location="lead.location" 
                    :contact="lead.contact"
                    :leadtype="lead.leadtype"/>
            </div>
        </div>
    </div>
</template>

<script>
    import LeadsHeader from '../components/leads/LeadsHeader'
    import LeadLineHeader from '../components/leads/LeadLineHeader'
    import LeadLineItem from '../components/leads/LeadLineItem'
    export default {
        name: 'Leads',
        components: {
            LeadsHeader,
            LeadLineHeader,
            LeadLineItem
        },
        props: [],
        data() {
            return {}
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped>
    .leads {
        /* height: 100vh; */
        background-color: rgb(237,240,245) 
    }
    .content {
        display: grid;
        grid-template-columns: 360px 420px;
        margin-top: 12px;
        height: 100vh;
    }

    .contact-info {
    }

</style>