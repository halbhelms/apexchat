<template>
    <div class="time-frame">
        <TimeFrame />
    </div>
</template>

<script>
    import TimeFrame from '../components/site/TimeFrame'

    export default {
        name: 'Temp',

        components: {TimeFrame},

        props: [],

        data() {
            return {}
        },

        methods: {},

        computed: {},
    }
</script>

<style scoped>
    .time-frame {
        font-size: 1rem;
    }
</style>