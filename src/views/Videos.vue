<template>
    Videos
    <div class="video-thumbnails">
        <Video v-for="(embedCode, index) in $store.state.videos" :key="index" :_embedCode="embedCode" />

    </div>
    
</template>

<script>
    import Video from '../components/videos/Video'
    export default {
        name: 'Videos',
        components: {Video},
        props: [],
        data() {
            return {}
        },
        methods: {},
        computed: {},
    }
</script>

<style scoped>
    .video-thumbnails {
        margin-left: 20px;
        margin-right: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 12px;
    }
</style>