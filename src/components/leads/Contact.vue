<template>
    <div class="contact" v-if="lead">
        <div class="card">
            <!-- contact name -->
            <div class="contact-element">
                <div class="name-label"></div>
                <div class="name-data"></div>
            </div>
            <!-- contact address -->
            <div class="contact-element">
                <div class="address-label"></div>
                <div class="address-data"></div>
            </div>
            <!-- contact phone -->
            <div class="contact-element">
                <div class="phone-label"></div>
                <div class="phone-data"></div>
            </div>
            <!-- contact email -->
            <div class="contact-element">
                <div class="email-label"></div>
                <div class="email-data"></div>
            </div>
        </div>
    </div>
    <div v-else>Contact</div>
</template>

<script>
    export default {
        name: 'Contact',
        components: {},
        props: {
            lead: {
                required: false
            }
        },
        data() {
            return {}
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped>

</style>