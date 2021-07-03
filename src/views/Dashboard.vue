<template>
{{  }}
<div class="container">
    <DashboardHeader class="dashboard-header" />
  <div class="content">
      
      <div class="main">
        <!-- engagement widget -->
        <EngagedWidget :engaged="engaged"/>
        <!-- leads widget -->
        <LeadsWidget :leads="leads" :sales="sales" :service="service"/>
        <!-- last login widget -->
        <SinceLoginWidget :videos="timeFilter.videos" :salesLeads="timeFilter.salesLeads" :serviceLeads="timeFilter.serviceLeads"/>
      </div>
      <!-- sales/engagements graph -->
      <div class="graph">
          <div id="curve_chart"></div>
          <LineChart :chartData="chartData" v-if="chartData"/>
      </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import { dateToApiDateString, dateStringForDaysPrior } from '../utils'

import DashboardHeader from '../components/dashboard/DashboardHeader'
import EngagedWidget from '../components/dashboard/EngagedWidget'
import LeadsWidget from '../components/dashboard/LeadsWidget'
import SinceLoginWidget from '../components/dashboard/SinceLoginWidget'
import LineChart from '../components/charts/LineChart'


export default {
    name: 'Dashboard',
    components: {
        DashboardHeader,
        EngagedWidget,
        LeadsWidget,
        SinceLoginWidget,
        LineChart
    },
    data() {
        return {
            engaged: null,
            leads: null,
            sales: null,
            service: null,
            timeFilter: {
                videos: null,
                salesLeads: null,
                serviceLeads: null
            },
            chartData: null
        }
    },
    methods: {
        async getDashboardInfo() {
            let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
            let startDate = null
            

            // set startDate for lastLogin
            if (this.$store.state.timeFrame == 'leadsLastLogin') {
                if (currentUser.last_login_at) {
                    startDate = dateToApiDateString(currentUser.last_login_at)
                } else {
                    this.$store.dispatch('set_time_frame', 'last30')
                }
            }
            console.log('store.state.timeFrame',this.$store.state.timeFrame)
            // set startDate for last30
            if (this.$store.state.timeFrame == 'leadsLast30') {
                console.log('in last30')
                startDate = dateStringForDaysPrior(30)
            }

            if (this.$store.state.timeFrame == 'leadsLast60') {
                startDate = dateStringForDaysPrior(60)
            }

            // console.log('startDate', startDate);
            

            // get dashboard info for appropriate state.timeFrame
            try {
                let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
                let email = currentUser.email
                let authentication_token = currentUser.authentication_token
                console.log('startDate', startDate)
                let dashboardInfo = await axios({
                    method: 'get',
                    url: `${process.env.VUE_APP_API_BASE}/dashboard`,
                    params: {
                        start_date: startDate,
                        end_date: dateToApiDateString(new Date())
                    },
                    headers: {
                        'X-User-Email': email,
                        'X-User-Token': authentication_token  
                    }
                })
                // console.log('dashboard info', dashboardInfo.data)
                // set API results to local state
                this.leads = dashboardInfo.data.leads
                this.sales = dashboardInfo.data.sales
                this.service = dashboardInfo.data.service
                this.engaged = dashboardInfo.data.engagements
                this.timeFilter.videos = dashboardInfo.data.since_last_login.videos
                this.timeFilter.salesLeads = dashboardInfo.data.since_last_login.sales_leads
                this.timeFilter.serviceLeads = dashboardInfo.data.since_last_login.service_leads
                this.chartData = dashboardInfo.data.chart_data
                // console.log('array?', Array.isArray(dashboardInfo.data.chart_data))
            } catch (err) {
                console.log(err)
            }
        
        }

    },
    created() {
        this.getDashboardInfo()
    },
    computed: {
        timeFrame() {
            return this.$store.state.timeFrame
        }
    },
    watch: {
        timeFrame: function() {
            this.chartData = null
            this.getDashboardInfo()
        }
    },
}
</script>

<style scoped>
    .main {
        position: relative;
        /* width: 100vw; */
        margin: 0 auto;
    }
    .container {
        position: relative;
        height: 100vh;   
        /* width: 100vw;  */
    }

    .content {
        background-color: rgb(237,240);
        position: relative;
        /* height: 100%; */
        /* overflow-y: auto; */
        /* width: 780px; */
        /* min-height: 100vh; */
        /* width: 100vw; */
        /* margin: 0 auto; */

    }

    .dashboard-header {
        width: 100vw;
    }

    #curve_chart {
        border-radius: 12px;
        /* border: 1px solid silver; */
        padding: 6px;
        /* padding-right: 12px; */
    }

    .graph {
        /* width: 100%; */
        /* min-height: 100%; */
        width: 740px;
        border: 1px solid silver;
        margin: 20px;
        margin-right: 40px;
        border: 1px solid silver;
        border-radius: 12px;
        box-shadow: 0 0 6px 0 silver;
        background-color: white;
    }

    .main {
        display: flex;
        gap: 40px;
        /* grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 12px; */
        
    }
</style>