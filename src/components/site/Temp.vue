<template>
    <p>I am a temp component, used to test wrapping</p>
    {{ title }}
</template>

<script>
    export default {
        name: 'Temp',

        components: {},

        props: ['title'],

        data() {

            return {}
        },

        methods: {},

        computed: {},
    }
</script>

<style scoped>

</style>