<template>
    <!-- test to see what real data we get -->
    <!-- lead line item -->
    <div @click="drillDown" class="line-item" :class="active == id ? 'highlight' : ''">
        <div class="date data-col">{{ shortDate }}</div>
        <div class="contact data-col">{{ contact }}</div>
        <div class="lead-type data-col">{{ leadtype }}</div>
        <div class="location data-col">{{ location }}</div>
    </div>
</template>

<script>
    import {format} from 'date-fns/'
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
                // let m = d.getMonth() + 1
                // let t = d.getDate()
                // let y = d.getFullYear()-2000
                // return `${m}.${t}.${y}`
                return format(d, 'MM.dd.yy')
                
              
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
        /* grid-template-columns: 64px 140px 45px 158px; */
        grid-template-columns: 102px 240px 145px auto;
        background-color: white;
        font-size: 1rem;
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
        text-align: left;
        margin-left: 12px;
    }
</style>