let primary_color = localStorage.getItem('primary_color') || '#7e37d8';
let secondary_color = localStorage.getItem('secondary_color') || '#fe80b2';

// Pie Chart 1
export var pieChart1: any = {
  chartType: 'PieChart',
  dataTable: [
    ['Task', 'Hours per Day'],
    ['Work', 5],
    ['Eat', 10],
    ['Commute', 15],
    ['Watch TV', 20],
    ['Sleep', 25]
  ],
  options: {
    title: 'My Daily Activities',
    width: '100%',
    height: 400,
    colors: ["#06b5dd", primary_color, secondary_color, "#80cf00", "#FF5370"],
    backgroundColor: 'transparent'
  },
};

// Pie Chart 2
export var pieChart2: any = {
  chartType: 'PieChart',
  dataTable: [
    ['Work', 5],
    ['Eat', 10],
    ['Commute', 15],
    ['Watch TV', 20],
    ['Sleep', 25]
  ],
  options: {
    title: 'My Daily Activities',
    is3D: true,
    width: '100%',
    height: 400,
    colors: ["#06b5dd", primary_color, secondary_color, "#80cf00", "#FF5370"],
    backgroundColor: 'transparent'
  },
};

// Pie Chart 3
export var pieChart3: any = {
  chartType: 'PieChart',
  dataTable: [
    ['Task', 'Hours per Day'],
    ['Work', 2],
    ['Eat', 2],
    ['Commute', 11],
    ['Watch TV', 2],
    ['Sleep', 7]
  ],
  options: {
    title: 'My Daily Activities',
    pieHole: 0.4,
    width: '100%',
    height: 400,
    colors: ["#06b5dd", primary_color, secondary_color, "#80cf00", "#FF5370", "#FF5370"],
    backgroundColor: 'transparent'
  },
};

// Pie Chart 4
export var pieChart4: any = {
  chartType: 'PieChart',
  dataTable: [
    ['Language', 'Speakers (in millions)'],
    ['Assamese', 13],
    ['Bengali', 83],
    ['Bodo', 1.4],
    ['Dogri', 2.3],
    ['Gujarati', 46],
    ['Hindi', 300],
    ['Kannada', 38],
    ['Kashmiri', 5.5],
    ['Konkani', 5],
    ['Maithili', 20],
    ['Malayalam', 33],
    ['Manipuri', 1.5],
    ['Marathi', 72],
    ['Nepali', 2.9],
    ['Oriya', 33],
    ['Punjabi', 29],
    ['Sanskrit', 0.01],
    ['Santhali', 6.5],
    ['Sindhi', 2.5],
    ['Tamil', 61],
    ['Telugu', 74],
    ['Urdu', 52]
  ],
  options: {
    title: 'Indian Language Use',
    legend: 'none',
    width: '100%',
    height: 400,
    pieSliceText: 'label',
    slices: {
      4: { offset: 0.2 }, 
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },
    },
    // colors: ["#ab8ce4", "#26c6da"]
    colors: ["#06b5dd", primary_color, secondary_color, "#80cf00", "#ffc717", "#FF5370", primary_color, secondary_color, "#80cf00", "#06b5dd", "#ffc717", "#FF5370", primary_color, secondary_color, "#80cf00", "#06b5dd", "#ffc717", "#FF5370", "#fd7b6c", "#80cf00", "#06b5dd", "#ffc717"],
    backgroundColor: 'transparent'
  },
};

// Area Chart 1
export var areaChart1: any = {
  chartType: 'AreaChart',
  dataTable: [
    ['Year', 'Sales', 'Expenses'],
    ['2018', 1000, 400],
    ['2019', 1170, 460],
    ['2020', 660, 1120],
    ['2021', 1030, 540]
  ],
  options: {
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    width: '100%',
    height: 400,
    colors: [primary_color, secondary_color],
    backgroundColor: 'transparent'
  },
};

// Area Chart 2
export var areaChart2: any = {
  chartType: 'AreaChart',
  dataTable: [
    ['Year', 'Cars', 'Trucks', 'Drones', 'Segways'],
    ['2018', 100, 400, 2000, 400],
    ['2019', 500, 700, 530, 800],
    ['2020', 2000, 1000, 620, 120],
    ['2022', 120, 201, 2501, 540]
  ],
  options: {
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    width: '100%',
    height: 400,
    colors: [primary_color, secondary_color, "#80cf00", "#06b5dd"],
    backgroundColor: 'transparent'
  },
};

// Column Chart 1
export var columnChart1: any = {
  chartType: 'ColumnChart',
  dataTable: [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2019", 1e3, 400, 250],
    ["2020", 1170, 460, 300],
    ["2021", 660, 1120, 400],
    ["2022", 1030, 540, 450]
  ],
  options: {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2019-2022"
    },
    bars: "vertical",
    vAxis: {
      format: "decimal"
    },
    height: 400,
    width: '100%',
    colors: [primary_color, secondary_color, "#80cf00"],
    backgroundColor: 'transparent'
  },
};

// Column-BarChart Chart 2
export var columnChart2: any = {
  chartType: 'BarChart',
  dataTable: [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2019", 1e3, 400, 250],
    ["2020", 1170, 460, 300],
    ["2021", 660, 1120, 400],
    ["2022", 1030, 540, 450]
  ],
  options: {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2019-2022"
    },
    bars: "horizontal",
    vAxis: {
      format: "decimal"
    },
    height: 400,
    width: '100%',
    colors: [primary_color, secondary_color, "#80cf00"],
    backgroundColor: 'transparent'
  },
};

// ColumnChart-BarChart Chart 1
export var barChart1: any = {
  chartType: 'ColumnChart',
  dataTable: [
    ["Element", "Density", { role: "style" }],
    ["Copper", 10, primary_color],
    ["Silver", 12, secondary_color],
    ["Gold", 14, "#80cf00"],
    ["Platinum", 16, "color: #06b5dd"]
  ],
  options: {
    title: "Density of Precious Metals, in g/cm^3",
    width: '100%',
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
    backgroundColor: 'transparent'
  },
};

// BarChart Chart 2
export var barChart2: any = {
  chartType: 'BarChart',
  dataTable: [
    ["Element", "Density", {
      role: "style"
    }],
    ["Copper", 10, primary_color],
    ["Silver", 12, secondary_color],
    ["Gold", 14, "#80cf00"],
    ["Platinum", 16, "color: #06b5dd"]
  ],
  options: {
    title: "Density of Precious Metals, in g/cm^3",
    width: '100%',
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
    backgroundColor: 'transparent'
  },
};

// Line Chart 
export var lineChart: any = {
  chartType: 'LineChart',
  dataTable: [
    ['Month', 'Guardians of the Galaxy', 'The Avengers', 'Transformers: Age of Extinction'],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 10.5, 32.4],
    [3, 40.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 20, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
  ],
  options: {
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)'
    },
    colors: [primary_color, secondary_color, "#80cf00"],
    height: 500,
    width: '100%',
    backgroundColor: 'transparent'
  },
};

// Combo Chart
export var comboChart: any = {
  chartType: 'ComboChart',
  dataTable: [
    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
    ['2017/18', 165, 938, 522, 998, 450, 614.6],
    ['2018/19', 135, 1120, 599, 1268, 288, 682],
    ['2019/20', 157, 1167, 587, 807, 397, 623],
    ['2020/21', 139, 1110, 615, 968, 215, 609.4],
    ['2021/22', 136, 691, 629, 1026, 366, 569.6]
  ],
  options: {
    title: 'Monthly Coffee Production by Country',
    vAxis: { title: 'Cups' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
    height: 500,
    fullWidth: true,
    colors: [primary_color, secondary_color, "#80cf00", "#FF5370", "#06b5dd"],
    backgroundColor: 'transparent'
  },
};

