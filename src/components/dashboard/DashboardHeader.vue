<template>
    <div class="header">
        <div class="title"><router-link to="{name: 'Dashboard'}">Dashboard</router-link></div>
        <div class="date-filter">
            <div class="filter">
                <input name="date-filter" type="radio" id="last-login" @change="setDateFilter('last-login')" />
                <label for="last-login" name="date-filter"> Since last login</label>
            </div>
            <div class="filter">
                <input name="date-filter" type="radio" id="last-30" @change="setDateFilter('last-30')" />
                <label for="last-30" name="date-filter"> Last 30 Days</label>
            </div>
            <div class="filter">
                <input name="date-filter" type="radio" id="last-60" @change="setDateFilter('last-60')" />
                <label for="last-60" name="date-filter"> Last 60 days</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DashboardHeader',
        components: {},
        props: {},
        data() {
            return {}
        },
        methods: {
            setDateFilter(filter) {
                console.log('filter', filter);
                
            }
        },
        computed: {}
    }
</script>

<style scoped>
    .header {
        display: grid;
        grid-template-columns: 2fr 300px;
        box-shadow: 0 0 6px 0 silver;
    }

    .date-filter {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding-top: 10px;
        font-size: 0.75rem;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
        padding-left: 20px;
    }
</style>