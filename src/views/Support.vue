<template>
    <main>
        <SupportHeader />
        <SupportForm />
    </main>
</template>

<script>
    import SupportHeader from '../components/support/SupportHeader'
    import SupportForm from '../components/support/SupportForm'

    export default {
        name: 'Support',
        components: {
            SupportHeader,
            SupportForm
        },
        props: {},
        data() {
            return {}
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped>
    main {
        background-color: rgb(237,240,245);
    }

</style>