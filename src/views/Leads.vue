<template>
    <LeadsHeader />
    <div class="content">
        <div class="contact-info">Contact</div>
        <div class="leads">
            <LeadLineHeader />
            <LeadLineItem />
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
    .content {
        display: grid;
        grid-template-columns: 320px 640px;
        outline: 1px solid navy;
    }

    .contact-info {
        outline: 1px solid green;
    }

</style>