$(document).ready(function(){
	var ctx = $("#myChart").get(0).getContext("2d");


	var data = [
	    {
	        value: 218,
	        color:"#FF5A5E",
	        highlight: "#FF5A5E",
	        label: "Nada interesado"
	    },
	    {
	        value: 143,
	        color: "#5AD3D1",
	        highlight: "#5AD3D1",
	        label: "Algo interesado"
	    },
	    {
	        value: 241,
	        color: "#3c8bc0",
	        highlight: "#3c8bc0",
	        label: "Muy interesado"
	    },
	    {
	        value: 59,
	        color: "#FFC870",
	        highlight: "#FFC870",
	        label: "Ns/nc"
	    }
	];
	var options = [{
	    //Boolean - Whether we should show a stroke on each segment
	    segmentShowStroke : true,

	    //String - The colour of each segment stroke
	    segmentStrokeColor : "#e9e9e9",

	    //Number - The width of each segment stroke
	    segmentStrokeWidth : 2,

	    //Number - The percentage of the chart that we cut out of the middle
	    percentageInnerCutout : 50, // This is 0 for Pie charts

	    //Number - Amount of animation steps
	    animationSteps : 100,

	    //String - Animation easing effect
	    animationEasing : "easeOutBounce",

	    //Boolean - Whether we animate the rotation of the Doughnut
	    animateRotate : true,

	    //Boolean - Whether we animate scaling the Doughnut from the centre
	    animateScale : false,
	    responsive: true,
	    //String - A legend template
	    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

	}];
	var myPieChart = new Chart(ctx).Doughnut(data,options);
	var legend = myPieChart.generateLegend();
	$(".piechart .legend").html(legend);
	/// Bar

	var ctx2 = $("#myChart2").get(0).getContext("2d");

	var data = {
    labels: ["Solidaridad Nacional","Diálogo Vecinal","Perú Patria Segura", "Somos Perú", "PPC", "Apra", "Blanco", "Nulo"],
    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "#dc6767",
	            strokeColor: "rgba(220,220,220,0.8)",
	            highlightFill: "rgba(220,220,220,0.75)",
	            highlightStroke: "rgba(220,220,220,1)",
	            data: [42, 29, 13, 8, 6, 1, 10,9]
	        }
	    ]
	};
	var options = {
	    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
	    scaleBeginAtZero : true,

	    //Boolean - Whether grid lines are shown across the chart
	    scaleShowGridLines : true,

	    //String - Colour of the grid lines
	    scaleGridLineColor : "rgba(0,0,0,.05)",

	    //Number - Width of the grid lines
	    scaleGridLineWidth : 1,

	    //Boolean - Whether to show horizontal lines (except X axis)
	    scaleShowHorizontalLines: true,

	    //Boolean - Whether to show vertical lines (except Y axis)
	    scaleShowVerticalLines: false,

	    //Boolean - If there is a stroke on each bar
	    barShowStroke : false,

	    //Number - Pixel width of the bar stroke
	    barStrokeWidth : 10,

	    //Number - Spacing between each of the X value sets
	    barValueSpacing : 10,

	    //Number - Spacing between data sets within X values
	    barDatasetSpacing : 11,

	    responsive: true,

	    showTooltips: false,

	    datasetStroke : false,

	    //String - A legend template
	    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

	}

	var myBarChart = new Chart(ctx2).Bar(data, options);


	// Line

	var data = {
	    labels: ["Enero", "Febrero","Marzo","Abril","Mayo","Junio"],
	    datasets: [
	        {
	            label: "PPK",
	            fillColor: "rgba(238,169,51,0)",
	            strokeColor: "rgba(140,93,162,1)",
	            pointColor: "rgba(140,93,162,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [44, 51, 30, 24, 26, 41]
	        },
	        {
	            label: "Keiko",
	            fillColor: "rgba(151,187,205,0)",
	            strokeColor: "rgba(255,150,0,1)",
	            pointColor: "rgba(255,150,0,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [35, 44, 26, 31, 22,35]
	        },
	        {
	            label: "Toledo",
	            fillColor: "rgba(105,168,59,0)",
	            strokeColor: "rgba(68,176,46,1)",
	            pointColor: "rgba(68,176,46,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [25, 34, 36, 31, 27,31]
	        },
	        {
	            label: "Nadine",
	            fillColor: "rgba(151,187,205,0)",
	            strokeColor: "rgba(255,0,0,1)",
	            pointColor: "rgba(255,0,0,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [25, 24, 28, 36, 31,51]
	        }
	    ]
	};

	var options = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve : true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,
    responsive:true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};
	var ctx3 = $("#myChart3").get(0).getContext("2d");

	var myLineChart = new Chart(ctx3).Line(data, options);

	var legend3 = myLineChart.generateLegend();
	$(".linechart .legend").html(legend3);
})