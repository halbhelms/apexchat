<template>
    <div class="contact" v-if="lead !== null">
        <div class="card">
            <!-- contact date -->
            <div class="contact-element">
                <div class="date-label label">Contact</div>
                <div class="date-data data">{{ contactDate }} <span class="time">{{ contactTime }}</span></div>
            </div>
            <!-- contact name -->
            <div class="contact-element">
                <div class="name-label label">Contact</div>
                <div class="name-data data">{{ lead.contact }}</div>
            </div>
            <!-- contact address -->
            <div class="contact-element">
                <div class="address-label label">Address</div>
                <div class="address-data data">{{ lead.address }}</div>
            </div>
            <!-- contact phone -->
            <div class="contact-element">
                <div class="phone-label label">Phone</div>
                <div class="phone-data data">{{ lead.phone }}</div>
            </div>
            <!-- contact email -->
            <div class="contact-element">
                <div class="email-label label">Email</div>
                <div class="email-data data">{{ lead.email }}</div>
            </div>
            <!-- dispute -->
            <button class="dispute">Dispute</button>
        </div>

        <div class="card-2">
            {{ lead.chat }}
        </div>
    </div>
</template>

<script>
    import format from 'date-fns/format'
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
        computed: {
            contactDate() {
                return format(this.$props.lead.date, "MM.dd.yy")
            },
            contactTime() {
                return format(this.$props.lead.date, 'h.mm')
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 320px;
        height: 170px;
        border: 1px solid silver;
        margin-left: 20px;
        border-radius: 12px;
        background-color: white;
        box-shadow: 0 0 6px silver;
    }

    .card-2{
        width: 320px;
        /* height: 150px; */
        border: 1px solid silver;
        margin-left: 20px;
        margin-top: 20px;
        border-radius: 12px;
        background-color: white;
        box-shadow: 0 0 6px silver;
    }

    .contact-element {
        display: grid;
        grid-template-columns: 80px auto;
    }

    .label {
        text-align: right;
        font-weight:bolder;
        color: black;
    }

    .data {
        text-align: left;
        margin-left: 6px;
    }

    .dispute {
        margin-top: 10px;
        width: 7rem;
        border: 1px solid navy;
        border-radius: 8px;
        background-color: red;
        font-weight: 600;
        color: rgb(196,220,239)
    }

    .time {
        margin-left: 12px;
    }
</style>