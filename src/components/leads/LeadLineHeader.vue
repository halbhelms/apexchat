<template>
<div class="lead-line-header">
    <div class="date-label header-col">Date</div>
    <div class="contact-label header-col">Contact</div>
    <div class="lead-type-label header-col">Lead</div>
    <div class="location-label header-col">Location</div>
</div>
</template>

<script>
    export default {
        name: 'LeadLineHeader',
        components: {},
        props: [],
        data() {
            return {}
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped>
    .lead-line-header {
        display: grid;
        grid-template-columns: 102px 240px 145px auto;
        background-color: rgb(0,138,230);
        color: white;
        text-align: left;
        /* width: 420px; */
        border-radius: 4px 4px 0 0;
    }

    .header-col {
        text-align: left;
    }

    .date-label {
        text-align: left;
        margin-right: 5px;
        margin-left: 12px;
    }
</style>