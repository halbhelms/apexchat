<template>
    <div v-if="inDev" class="inDev">{{ $options.name }}</div>
    <div class="split-columns">
        <div class="left">
            <slot name="left"></slot>
        </div>

        <div class="right">
            <slot name="right"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'SplitColumns',

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
    .split-columns {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 12px;
        margin-left: 18px;
    }
</style>