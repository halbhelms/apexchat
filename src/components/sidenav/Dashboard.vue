<template>
    <div class="sidebar-nav-element" v-bind:class="{active: $store.state.active === 'dashboard'}" @click="setActiveNav('dashboard')">
        <svg width="24px" height="24px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rounded" transform="translate(-341.000000, -245.000000)">
                    <g id="Action" transform="translate(100.000000, 100.000000)">
                        <g id="-Round-/-Action-/-dashboard" transform="translate(238.000000, 142.000000)">
                            <g>
                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                <path d="M4,13 L10,13 C10.55,13 11,12.55 11,12 L11,4 C11,3.45 10.55,3 10,3 L4,3 C3.45,3 3,3.45 3,4 L3,12 C3,12.55 3.45,13 4,13 Z M4,21 L10,21 C10.55,21 11,20.55 11,20 L11,16 C11,15.45 10.55,15 10,15 L4,15 C3.45,15 3,15.45 3,16 L3,20 C3,20.55 3.45,21 4,21 Z M14,21 L20,21 C20.55,21 21,20.55 21,20 L21,12 C21,11.45 20.55,11 20,11 L14,11 C13.45,11 13,11.45 13,12 L13,20 C13,20.55 13.45,21 14,21 Z M13,4 L13,8 C13,8.55 13.45,9 14,9 L20,9 C20.55,9 21,8.55 21,8 L21,4 C21,3.45 20.55,3 20,3 L14,3 C13.45,3 13,3.45 13,4 Z" id="🔹Icon-Color" fill="white"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg> 
        <div class="label">Dashboard</div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    props: {},
    data() {
        return {};
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
        padding-left: 24px;
        padding-top: 12px;
        cursor: pointer;
    }

    .label {
        padding-left: 38px;
    }
</style>