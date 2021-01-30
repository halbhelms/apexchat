<template>
<div class="container">
    <DashboardHeader />
  <div class="content">
      
      <div class="main">
        
        <EngagedWidget :engaged="engaged"/>
        <LeadsWidget :leads="leads" :sales="sales" :service="service"/>
        <SinceLoginWidget :videos="timeFilter.videos" :salesLeads="timeFilter.salesLeads" :serviceLeads="timeFilter.serviceLeads"/>
      </div>
      <div class="graph">
          <div id="curve_chart"></div>
          <!-- <BarChart :chartData="chartData" /> -->
          <LineChart />
      </div>
  </div>
  </div>
</template>

<script>
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
            engaged: 7874,
            leads: 1249,
            sales: 1000,
            service: 249,
            timeFilter: {
                videos: 12,
                salesLeads: 110,
                serviceLeads: 56
            },
            chartData: [
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: rgb(237,240,245);    
        height: 100%;    
    }

    .content {
        background-color: rgb(237,240);
        /* height: 100%; */
        /* overflow-y: auto; */
        width: 780px;
        /* min-height: 100vh; */
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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 12px;
    }

    /* rect {
        
    } */
</style>