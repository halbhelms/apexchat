<template>
    <div id="chart_div"></div>
</template>

<script>


    export default {
        name: 'BarChart',

        components: {},

        props: ['chartData'],

        data() {

            return {

            }
        },

        methods: {},

        computed: {},

        created() {
          const chart_data = [
          ['Day', 'Sales', 'Leads'],
          ['2021-02-10',  51,      72],
          ['2021-02-11',  61,      85],
          ['2021-02-12',  47,      78],
          ['2021-02-13',  22,      44],
          ['2021-02-14',  36,      45],
          ['2021-02-15',  19,      31],
        ]
            // let that = this
            let google = window.google
            google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(chart_data);

        var options = {
          title: 'Sales & Leads',
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