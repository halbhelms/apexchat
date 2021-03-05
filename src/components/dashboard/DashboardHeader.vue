<template>
    <div class="dashboard-header-container">
        <div class="header">
            <!-- title -->
            <div class="title">Dashboard</div>
            <div class="time-frame">
                <TimeFrame />
            </div>
            <!-- time filter -->
            <!-- <div class="date-filter">
                <div class="filter">
                    <input name="date-filter" type="radio" id="last-login" @change="setDateFilter('lastLogin')" />
                    <label for="last-login" name="date-filter"> Since last login</label>
                </div>
                <div class="filter">
                    <input name="date-filter" type="radio" id="last-30" @change="setDateFilter('last30')" />
                    <label for="last-30" name="date-filter"> Last 30 Days</label>
                </div>
                <div class="filter">
                    <input name="date-filter" type="radio" id="last-60" @change="setDateFilter('last60')" />
                    <label for="last-60" name="date-filter"> Last 60 days</label>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    import TimeFrame from '../site/TimeFrame'

    export default {
        name: 'DashboardHeader',
        components: {TimeFrame},
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
    .dashboard-header-container {
        box-shadow: 0 0 6px 0 silver;
    }

    .header {
        width: 100%;
        display: grid;
        grid-template-columns: 372px 308px;
        text-align: left;
        border: 1px solid silver;
    }

    .date-filter {
        /* display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding-top: 10px;
        padding-right: 12px;
        font-size: 0.75rem;
        text-align: left; */
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding-top: 10px;
        font-size: 0.75rem;
    }

    .time-frame {
        position: relative;
        top: -4px;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
        padding-left: 20px;
    }
</style>