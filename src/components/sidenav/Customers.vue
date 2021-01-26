<template>
    <div class="sidebar-nav-element" v-bind:class="{active: $store.state.active === 'support'}" @click="setActiveNav('support')">
        <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

<circle cx="20.5" cy="10.5" r="4.5" fill="white"/>
<path d="M29.9,16.5C29.7,16.2,29.4,16,29,16c-2.2,0-4.3,1-5.6,2.8L22.5,20c-1.1,1.3-2.8,2-4.5,2h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h1.9
	c1.6,0,3.1-1.3,3.1-2.9c0,0,0-0.1,0-0.1c0-0.5-0.5-1-1-1l-6.1,0c-3.6,0-6.5,1.6-8.1,4.2l-2.7,4.2c-0.2,0.3-0.2,0.7,0,1l3,5
	c0.1,0.2,0.4,0.4,0.6,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2c3.8-2.5,8.2-3.8,12.7-3.8c3.3,0,6.3-1.8,7.9-4.7l2.7-4.8
	C30,17.2,30,16.8,29.9,16.5z" fill="white"/>
<path d="M14,10.5c0-2.5,1.5-4.7,3.6-5.8C16.9,3.1,15.3,2,13.5,2C11,2,9,4,9,6.5s2,4.5,4.5,4.5c0.2,0,0.3,0,0.5-0.1
	C14,10.8,14,10.7,14,10.5z" fill="white"/>
</svg>

        <div class="label">Customers</div>
    </div>
</template>

<script>
export default {
    name: 'CustomerSupport',
    props: {},
    data() {
        return {}
    },
    methods: {
        setActiveNav(navElement) {
            this.$store.dispatch('set_active_nav', navElement)
        }
    }
}
</script>





<style scoped>
    .active {
        background-color: rgb(79,185,255);
        border-left: 5px solid white;
    }

    .sidebar-nav-element {
        /* display: grid;
        grid-template-columns: 20px auto; */
        color: white;
        font-weight: bold;
        text-align: left;
        padding-left: 24px;
        padding-top: 12px;
        cursor: pointer;
    }

    .label {
        padding-left: 38px;
    }

    /* svg styles */
    .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>