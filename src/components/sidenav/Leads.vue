<template>
    <div class="sidebar-nav-element" v-bind:class="{active: $store.state.active === 'leads'}" @click="setActiveNav('leads')">
        <svg width="32px" height="32px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 32 32" style="enable-background:new 0 0 48 48;" xml:space="preserve">
<path d="M22,3h-5c-2.8,0-5,2.2-5,5v10c0,0.3,0.2,0.7,0.5,0.9C12.6,19,12.8,19,13,19c0.2,0,0.3,0,0.4-0.1l5.8-2.9H22c2.8,0,5-2.2,5-5
	V8C27,5.2,24.8,3,22,3z M18,12h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1c0.6,0,1,0.4,1,1S18.6,12,18,12z M20,9h-3c-0.6,0-1-0.4-1-1
	s0.4-1,1-1h3c0.6,0,1,0.4,1,1S20.6,9,20,9z" fill="white"/>
<path d="M27.1,25.7c-0.4-0.1-0.7-0.4-0.8-0.8c0.4-0.5,0.7-1.2,0.7-1.9v-2c0-1.7-1.3-3-3-3s-3,1.3-3,3v2c0,0.7,0.3,1.4,0.7,1.9
	c-0.1,0.4-0.4,0.7-0.8,0.8c-1.5,0.4-2.6,1.6-2.8,3.1c-0.1,0.3,0,0.6,0.2,0.8c0.2,0.2,0.5,0.4,0.8,0.4l10,0c0.3,0,0.6-0.1,0.8-0.4
	c0.2-0.2,0.3-0.5,0.2-0.8C29.7,27.3,28.5,26.1,27.1,25.7z" fill="white"/>
<path d="M11.1,25.7c-0.4-0.1-0.7-0.4-0.8-0.8c0.4-0.5,0.7-1.2,0.7-1.9v-2c0-1.7-1.3-3-3-3s-3,1.3-3,3v2c0,0.7,0.3,1.4,0.7,1.9
	c-0.1,0.4-0.4,0.7-0.8,0.8c-1.5,0.4-2.6,1.6-2.8,3.1c-0.1,0.3,0,0.6,0.2,0.8C2.4,29.9,2.7,30,3,30l10,0c0.3,0,0.6-0.1,0.8-0.4
	c0.2-0.2,0.3-0.5,0.2-0.8C13.7,27.3,12.5,26.1,11.1,25.7z" fill="white"/>
</svg> 
        <div class="label">Leads</div>
    </div>
</template>

<script>
export default {
    name: 'Leads',
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
        display: grid;
        grid-template-columns: 20px auto;
        color: white;
        font-weight: bold;
        text-align: left;
        padding-left: 21px;
        padding-top: 12px;
        cursor: pointer;
        height: 48px
    }

    .label {
        padding-left: 40px;
        padding-top: 4px;
    }

    /* svg styling */
    .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>