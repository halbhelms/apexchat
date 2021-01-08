<template>
    <VideoHeader />
    <div class="video-thumbnails">
        <Video v-for="(embedCode, index) in $store.state.videos" :key="index" :_embedCode="embedCode" />

    </div>
    
</template>

<script>
    import Video from '../components/videos/Video'
    import VideoHeader from '../components/videos/VideoHeader'
    export default {
        name: 'Videos',
        components: {Video, VideoHeader},
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
        margin-top: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 12px;
    }
</style>