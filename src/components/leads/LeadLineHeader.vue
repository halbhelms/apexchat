<template>
<div class="lead-line-header">
    <div class="date-label">Date</div>
    <div class="time-label">Time</div>
    <div class="contact-label">Contact</div>
    <div class="lead-type-label">Lead</div>
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
        grid-template-columns: 80px 80px 180px 40px;
        background-color: rgb(0,138,230);
        color: white;
        width: 420px;
    }
</style>