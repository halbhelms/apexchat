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
            let that = this
            let google = window.google
google.charts.load('current', {'packages':['corechart']})

google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        // console.log('that.$props.chartData', Array.isArray(that.$props.chartData));
        
        data.addRows(that.$props.chartData);

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
        }
    }
</script>

<style scoped>

</style>