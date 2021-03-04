<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
<!-- date filter -->
    <div class="date-filter">
        <div class="filter">
            <input name="date-filter" type="radio" id="last-login" :checked="'sinceLogin' === $store.state.dateFilter ? 'checked' : false" @change="setDateFilter('sinceLogin')" />
            <label for="last-login" name="date-filter">&nbsp;Since last login</label>
        </div>
        <div class="filter">
            <input name="date-filter" type="radio" id="last-30" :checked="'last30' === $store.state.dateFilter ? 'checked' : false" @change="setDateFilter('last30')" />
            <label for="last-30" name="date-filter">&nbsp;Last 30 Days</label>
        </div>
        <div class="filter">
            <input name="date-filter" type="radio" id="last-60" :checked="'last60' === $store.state.dateFilter ? 'checked' : false" @change="setDateFilter('last60')" />
            <label for="last-60" name="date-filter">&nbsp;Last 60 days</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DateFilter',

        components: {},

        props: [],

        data() {
            return {}
        },

        methods: {
            setDateFilter(value) {
                this.$store.dispatch('set_date_filter', value)
            }
        },

        computed: {}
    }
</script>

<style scoped>
    .date-filter {
        display: flex;
        padding-top: 10px;
        font-size: 0.65rem;
    }

    .filter {
        flex-grow: 1;
    }

    label {
        position: relative;
        top: -3px;
    }
</style>