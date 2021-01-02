<template>
    <div class="line-item">
        <div class="date">2.13.2021</div>
        <div class="time">10.13am</div>
        <div class="contact">Donna Holmes</div>
        <div class="lead-type">Sales</div>
    </div>
</template>

<script>
    export default {
        name: 'LeadLineItem',
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
    .line-item {
        display: grid;
        grid-template-columns: 80px 80px 180px 40px;
    }
</style>