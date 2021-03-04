<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="header">
        <div class="title"><slot></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'SectionHeader',
        components: {},
        props: {},
        data() {
            return {}
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped>

    * {
        margin: 0;
    }

    .header {
        box-shadow: 0 0 6px 0 silver;
        background-color: rgb(237,240,245);
        width: 100%;
        display: block;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
        padding-left: 20px;
    }
</style>