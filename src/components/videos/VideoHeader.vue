<template>
    <div class="header">
        <div class="title">Videos</div>
    </div>
</template>

<script>
    export default {
        name: 'VideoHeader',
        components: {},
        props: {},
        data() {
            return {}
        },

        computed: {}
    }
</script>

<style scoped>

    .header {
        box-shadow: 0 0 6px 0 silver;
        background-color: rgb(237,240,245);
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
        padding-left: 20px;
    }
</style>