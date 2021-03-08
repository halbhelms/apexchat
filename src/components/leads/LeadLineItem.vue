<template>
    <!-- test to see what real data we get -->
    <!-- lead line item -->
    <div @click="drillDown" class="line-item">
        <div class="date data-col">{{ shortDate }}</div>
        <div class="contact data-col">{{ contact }}</div>
        <div class="lead-type data-col">{{ prettyLeadType }}</div>
        <div class="location data-col">{{ shortLocation }}</div>
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
            'address',
            'city',
            'state',
            'zipcode',
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
                // let d = new Date(this.$props.datetime)
                let d = new Date(this.$props.datetime)
                let sd = ''
                // let m = d.getMonth() + 1
                // let t = d.getDate()
                // let y = d.getFullYear()-2000
                // return `${m}.${t}.${y}`
                try {
                    sd = format(d, 'MM.dd.yy')
                } catch (e) {
                    sd = ''
                }
                return sd
                
              
            },
            shortLocation() {
                let address = this.$props.address || ''
                let city = this.$props.city || ''
                let state = this.$props.state || ''
                let zipcode = this.$props.zipcode || ''
                let location = `${address}, ${city} ${state} ${zipcode}`
                console.log("🚀 ~ file: LeadLineItem.vue ~ line 54 ~ shortLocation ~ location", location)
                
                if ((address?.trim() + city?.trim() + state?.trim() + zipcode?.trim()) == '') {
                    return "Missing"
                } else {
                    return location
                }
            },
            prettyLeadType() {
                let lt = ''
                try {
                    lt =  this.$props.leadtype.charAt(0).toUpperCase() + this.$props.leadtype.slice(1);
                } catch (e) {
                    lt = ''
                }
                return lt
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