<template>
    <div class="time-frame">
       Distance:  {{ dateDiff() }}
    </div>
</template>

<script>
    import differenceInDays from 'date-fns/differenceInDays'

    export default {
        name: 'Temp',

        components: {},

        props: [],

        data() {
            return {
                today: new Date(),
                date1: new Date(2021, 1, 15)
            }
        },

        methods: {
            dateDiff() {
                return differenceInDays(this.date1, this.today)
            }
        },

        computed: {},
    }
</script>

<style scoped>

</style>