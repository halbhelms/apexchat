<template>
    <div class="header">
        <div class="title">Leads</div>
        <!-- time filter -->
        <div class="time-frame">
            <TimeFrame />
        </div>
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
</template>

<script>
    import TimeFrame from '../site/TimeFrame'

    export default {
        name: 'DashboardHeader',

        components: {TimeFrame},
        
        props: {},
        
        data() {
            return {
                dateFilter: ''
            }
        },
        
        methods: {
            setDateFilter(filter) {
                this.dateFilter = filter
            }
        },
        
        computed: {}
    }
</script>

<style scoped>
    .header {
        display: grid;
        grid-template-columns: 372px 308px;
        box-shadow: 0 0 6px 0 silver;
        /* width: 780px; */
    }

    .date-filter {
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