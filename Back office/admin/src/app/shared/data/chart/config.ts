import * as shape from 'd3-shape';

let primary_color = localStorage.getItem('primary_color') || '#7e37d8';
let secondary_color = localStorage.getItem('secondary_color') || '#fe80b2';

//BarChart
// options
export var barChartShowXAxis = true;
export var barChartShowYAxis = true;
export var barChartGradient = true;
export var barChartShowLegend = false;
export var barChartShowXAxisLabel = true;
export var barChartXAxisLabel = 'Activité';
export var barChartShowYAxisLabel = true;
export var barChartYAxisLabel = "Nombre d'agence";
export var roundEdges: boolean = true;
export var barChartshowGridLines = false;
export var barChartColorScheme = {
    domain: ["#007bff", "#ff9f40", "#2ec4b6", "#e36414"]
};

//Pie-Chart
//Options
export var pieChartShowLabels = true;
export var pieChartGradient = false;
export var pieChartcolorScheme = {
    domain: ["#ff9914", "#7ae582", "#f7b267", "#aed1e6", "#25a18e", "#7de2d1"]
};
export var chartOptions = { responsive: true };


//Area Chart
export var areaChartshowXAxis = true;
export var areaChartshowYAxis = true;
export var areaChartgradient = false;
export var areaChartshowXAxisLabel = true;
export var areaChartxAxisLabel = 'Country';
export var areaChartshowYAxisLabel = true;
export var areaChartyAxisLabel = 'Population';
export var areaChartcolorScheme = {
    domain: ["#15616D", "#ff9f40", "#2ec4b6"]
}
export var lineChartcurve = shape.curveStep;
export var lineChartcurve1 = shape.curveLinear;