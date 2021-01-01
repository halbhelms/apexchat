<template>
    <div class="card">
        <div class="title">Since you last logged in...</div>
        <div class="login-item">
            <img class="icon" src="../../assets/video.png" width="24" alt=""> 
            <div class="msg">{{ videos }} videos have been uploaded</div>
        </div>
        <div class="login-item">
            <img class="icon" src="../../assets/lead.png" width="24" alt=""> 
            <div class="msg">{{ salesLeads }} sales leads have been entered</div>
        </div>
        <div class="login-item">
            <img class="icon" src="../../assets/service.png" width="24" alt=""> 
            <div class="msg">{{ serviceLeads }} service leads have been uploaded</div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'SinceLoginWidget',
        components: {},
        props: [ 'videos', 'salesLeads', 'serviceLeads' ],
        data() {
            return {}
        },
        methods: {
            formattedNum(num) {
                return num.toLocaleString('en-US')
            }
        },
        computed: {
        }
    }
</script>

<style scoped>
    .card {
        background-color: white;
        text-align: left;
        border: 1px solid silver;
        border-radius: 12px;
        height: 150px;
        width: 300px;
        box-shadow: 0 0 6px 0 silver;
        margin-top: 20px;
        margin-left: -20px;
        margin-right: 20px;
    }

    .title {
        padding: 8px;
        font-weight: bold;
        font-size: 1rem;
        text-align: left;
        padding-left: 12px;
        color: rgb(80,110,228);
    }

    .icon {
        margin-left: 8px;
        display: inline;
    }

    .leads {
        text-align: left;
        padding-left: 10px;
        font-size: 2rem;
        font-weight: bold;
        margin-top: -14px;
    }

    .leads-breakdown {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 6px;
    }

    .login-item {
        display: grid;
        grid-template-columns: 30px 1fr;
        margin-bottom: 12px;
    }

    .msg {
        margin-left: 8px;
        font-size: 0.9rem;
    }

    .breakdown-title {
        font-size: 1.2rem;
        font-weight:600;
        color: gray;
    }

    .breakdown-number {
        font-size: 1.1rem;
        font-weight: 500;
    }

    .by-sales {
        margin-left: 12px;
    }
</style>