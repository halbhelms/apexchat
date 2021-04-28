<template>
    <div id="chart_div"></div>
</template>

<script>


    export default {
        name: 'LineChart',

        components: {},

        props: ['chartData'],

        data() {

            return {

            }
        },

        methods: {},

        computed: {},

        created() {
        //   const chart_data = [
        //   [ ["Day", "Leads", "Average"], [ "2021-01-03", 6, 6 ], [ "2021-01-04", 24, 6 ], [ "2021-01-05", 21, 6 ], [ "2021-01-06", 10, 6 ], [ "2021-01-07", 8, 6 ], [ "2021-01-08", 9, 6 ], [ "2021-01-09", 12, 6 ], [ "2021-01-10", 6, 6 ], [ "2021-01-11", 12, 6 ], [ "2021-01-12", 16, 6 ], [ "2021-01-13", 15, 6 ], [ "2021-01-14", 12, 6 ], [ "2021-01-15", 11, 6 ], [ "2021-01-16", 3, 6 ], [ "2021-01-17", 6, 6 ], [ "2021-01-18", 20, 6 ], [ "2021-01-19", 18, 6 ], [ "2021-01-20", 0, 6 ], [ "2021-01-21", 0, 6 ], [ "2021-01-22", 0, 6 ], [ "2021-01-23", 0, 6 ], [ "2021-01-24", 0, 6 ], [ "2021-01-25", 0, 6 ], [ "2021-01-26", 0, 6 ], [ "2021-01-27", 0, 6 ], [ "2021-01-28", 0, 6 ], [ "2021-01-29", 0, 6 ], [ "2021-01-30", 0, 6 ], [ "2021-01-31", 0, 6 ], [ "2021-02-01", 0, 6 ], [ "2021-02-02", 0, 6 ], [ "2021-02-03", 0, 6 ], [ "2021-02-04", 0, 6 ], [ "2021-02-05", 0, 6 ] ]
        // ]
            // let that = this
            let google = window.google
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);
            let chartData = this.$props.chartData

      function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);

        var options = {
          title: 'Sales Leads v. Engagements',
          curveType: 'function',
          legend: { position: 'bottom' },
          hAxis: { format:''}
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
        }
    }
</script>

<style scoped>

</style>