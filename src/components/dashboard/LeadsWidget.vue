<template>
    <!-- Leads widget -->
    <div class="card">
        <div class="title">Leads</div>
        <div class="leads">{{ leads }}</div>
        <div class="leads-breakdown">
            <!-- Breakdown by sales leads -->
            <div class="by-sales">
                <div class="breakdown-title">
                    Sales
                </div>
                <div class="breakdown-number">
                    {{ sales }}
                </div>
            </div>
            <!-- Breakdown by service leads -->
            <div class="by-service">
                <div class="breakdown-title">
                    Service
                </div>
                <div class="breakdown-number">
                    {{ service }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LeadsWidget',
        components: {},
        props: [ 'leads', 'sales', 'service' ],
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
        width: 180px;
        box-shadow: 0 0 6px 0 silver;
        margin-top: 20px;
        margin-left: 20px;
    }

    .title {
        padding: 8px;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: left;
        padding-left: 12px;
        color: gray;
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

    .breakdown-title {
        font-size: 1.2rem;
        font-weight:600;
        color: gray;
    }

    .breakdown-number {
        font-size: 1.1rem;
        font-weight: 500;
        margin-top: -4px;
    }

    .by-sales {
        margin-left: 12px;
    }
</style>