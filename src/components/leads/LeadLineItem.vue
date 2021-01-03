<template>
    <div class="line-item" :class="active == id ? 'highlight' : ''">
        <div @click="drillDown" class="date data-col">{{ shortDate }}</div>
        <div @click="drillDown" class="contact data-col">{{ contact }}</div>
        <div @click="drillDown" class="lead-type data-col">{{ leadtype }}</div>
        <div @click="drillDown" class="location data-col">{{ shortLocation }}</div>
    </div>
</template>

<script>
    export default {
        name: 'LeadLineItem',
        components: {},
        props: [
            'id',
            'datetime',
            'location',
            'contact',
            'leadtype',
            'active'
        ],
        data() {
            return {}
        },
        methods: {
            drillDown() {
                this.$emit('drilldown', this.$props.id)
            }
        },
        computed: {
            shortDate() {
                let d = this.$props.datetime
                let m = d.getMonth() + 1
                let t = d.getDate()
                let y = d.getFullYear()-2000
                return `${m}.${t}.${y}`
                
              
            },
            shortLocation() {
                let l = this.$props.location.split(',')
                return `${l[0]},${l[1]}`
            }
        }
    }
</script>

<style scoped>
    .line-item {
        display: grid;
        grid-template-columns: 64px 140px 45px 150px;
        background-color: white;
    }

    .highlight{
        background-color: blue;
        color: white;
    }

    .data-col {
        text-align: left;
        margin-right: 5px;
        cursor: pointer;
    }

    .date {
        text-align: right;
    }
</style>