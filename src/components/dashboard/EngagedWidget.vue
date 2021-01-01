<template>
    <div class="card">
        <div class="title">Engaged</div>
        <div class="engaged">{{ formattedEngage }}</div>
    </div>
</template>

<script>
    export default {
        name: 'EngagedWidget',
        components: {},
        props: [ 'engaged' ],
        data() {
            return {}
        },
        methods: {},
        computed: {
            formattedEngage() {
                return this.engaged.toLocaleString('en-US')
            }
        }
    }
</script>

<style scoped>
    .card {
        background-color: white;
        text-align: left;
        border: 1px solid silver;
        border-radius: 12px;
        height: 150px;
        width: 180px;
        margin-left: 20px;
        margin-top: 20px;
        box-shadow: 0 0 6px 0 silver;
    }

    .title {
        padding: 8px;
        font-weight: bold;
        font-size: 1.5rem;
        color: gray;
    }

    .engaged {
        text-align: left;
        padding-left: 10px;
        font-size: 3rem;
        font-weight: bold;
    }
</style>