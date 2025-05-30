let primary_color = localStorage.getItem('primary_color') || '#7e37d8';
let secondary_color = localStorage.getItem('secondary_color') || '#fe80b2';

export const smallChart1 = {
    chart: {
        toolbar: {
            show: false
        },
        height: 170,
        type: 'line'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [4]
    },
    yaxis: {
        show: false,
    },
    xaxis: {
        show: false,
        type: 'datetime',
        categories: ["2021-09-19T00:00:00", "2021-09-19T01:30:00", "2021-09-19T02:30:00", "2021-09-19T03:30:00", "2021-09-19T04:30:00", "2021-09-19T05:30:00", "2021-09-19T06:30:00"],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        }
    },
    grid: {
        show: false,
        padding: {
            left: 15,
            right: 15,
            bottom: 20
        }
    },
    colors: ['#ffffff'],
    series: [
        {
            name: 'series1',
            data: [1.2, 2.3, 1.7, 3.2, 1.8, 3.2, 1]
        }
    ],
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        }
    }
};
export const smallChart2 = {
    chart: {
        toolbar: {
            show: false
        },
        height: 170,
        type: 'line'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [4]
    },
    yaxis: {
        show: false,
    },
    xaxis: {
        show: false,
        type: 'datetime',
        categories: ["2021-09-19T00:00:00", "2021-09-19T01:30:00", "2021-09-19T02:30:00", "2021-09-19T03:30:00", "2021-09-19T04:30:00", "2021-09-19T05:30:00", "2021-09-19T06:30:00"],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        }
    },
    grid: {
        show: false,
        padding: {
            left: 15,
            right: 15,
            bottom: 20
        }
    },
    colors: ['#ffffff'],
    series: [
        {
            name: 'series1',
            data: [1.2, 2.3, 1.7, 3.2, 1.8, 3.2, 1]
        }
    ],
    tooltip: {
        background: 'transparent',
        x: {
            show: false,
            format: 'dd/MM/yy HH:mm',
        }
    }
};
export const smallChart3 = {
    chart: {
        toolbar: {
            show: false
        },
        height: 170,
        type: 'line'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [3]
    },
    yaxis: {
        show: false,
    },
    xaxis: {
        show: false,
        type: 'datetime',
        categories: ["2021-09-19T00:00:00", "2021-09-19T01:30:00", "2021-09-19T02:30:00", "2021-09-19T03:30:00", "2021-09-19T04:30:00", "2021-09-19T05:30:00", "2021-09-19T06:30:00"],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        }
    },
    grid: {
        show: false,
        padding: {
            left: 15,
            right: 15,
            bottom: 20
        }
    },
    colors: ['#ffffff'],
    series: [
        {
            name: 'series1',
            data: [1.2, 2.3, 1.7, 3.2, 1.8, 3.2, 1]
        }
    ],
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm',
            show: false,
        },
        y: {
            show: false
        }
    }
};
export const finance = {

    chart: {
        type: 'radialBar',
        height: 300,
    },
    plotOptions: {
        radialBar: {
            size: undefined,
            inverseOrder: true,
            hollow: {
                margin: 5,
                size: '48%',
                background: 'transparent',
            },
            track: {
                show: false,
            },
            startAngle: -180,
            endAngle: 180
        },
    },
    stroke: {
        lineCap: 'round'
    },
    colors: [primary_color, secondary_color, '#ffc717'],
    series: [71, 63, 77],
    labels: ['June', 'May', 'April'],
    legend: {
        show: true,
        floating: true,
        position: 'bottom',
        horizontalAlign: 'right',
    },
}
export const marketingRevenue = {
    chart: {
        toolbar: {
            show: false
        },
        height: 350,
        type: 'heatmap',
    },
    plotOptions: {
        heatmap: {
            shadeIntensity: 0.5,

            colorScale: {
                ranges: [{
                    from: -30,
                    to: 5,
                    name: 'low',
                    color: '#06b5dd'
                },
                {
                    from: 6,
                    to: 20,
                    name: 'medium',
                    color: secondary_color
                },
                {
                    from: 21,
                    to: 45,
                    name: 'high',
                    color: primary_color
                },
                {
                    from: 46,
                    to: 55,
                    name: 'extreme',
                    color: '#ffc717'
                }
                ]
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
        labels: {
            show: false
        }
    },
    series: [{
        name: 'Jan',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Feb',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Mar',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Apr',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'May',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Jun',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Jul',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Aug',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Sep',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }
    ],
    title: {
        text: 'HeatMap Chart with Color Range',
        offsetX: 20,
        offsetY: 15
    },

};
export const result = {
    chart: {
        id: 'barYear',
        height: 450,
        width: '100%',
        type: 'bar',
        toolbar: {
            show: false
        },
    },

    plotOptions: {
        bar: {
            distributed: true,
            horizontal: true,
            barHeight: '20%',
            dataLabels: {
                show: false,
            }
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        data: makeData()
    }],
    tooltip: {
        x: {
            show: false
        },
    },
    title: {
        text: 'Yearly Results',
        offsetX: 15,
        offsetY: 15
    },
    grid: {
        yaxis: {
            lines: {
                show: false,
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        }
    },
    yaxis: {
        labels: {
            show: true
        },
        tooltip: {
            enabled: true
        },
    },
    xaxis: {
        labels: {
            show: true
        },
        axisBorder: {
            show: false
        },
    }
};
export const amtProcessed = {
    chart: {
        height: 180,
        type: 'line',
        shadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
        },
        toolbar: {
            show: false
        }
    },
    colors: [primary_color],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 4
    },
    series: [{
        name: "High - 2013",
        data: [20, 25, 20, 36, 32]
    },
    ],
    grid: {
        show: false
    },
    markers: {
        size: 5
    },
    xaxis: {
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
        labels: {
            show: false
        }
    },

    yaxis: {
        show: false,
        title: {
            text: 'Temperature'
        },
        min: 5,
        max: 40
    },

};
export const amtSpent = {
    chart: {
        height: 180,
        type: 'line',
        shadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
        },
        toolbar: {
            show: false
        }
    },
    colors: [secondary_color],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 4
    },
    series: [{
        name: "High - 2013",
        data: [30, 20, 40, 28, 36]
    },
    ],
    grid: {
        show: false
    },
    markers: {
        size: 5
    },
    xaxis: {
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
        labels: {
            show: false
        }
    },

    yaxis: {
        show: false,
        title: {
            text: 'Temperature'
        },
        min: 5,
        max: 40
    },
};
export const seriousTrends = {
    chart: {
        width: 350,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    series: [44, 55, 13],
    responsive: [{
        breakpoint: 200,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false
            }
        }
    }],
    legend: {
        position: 'bottom'
    },
    fill: {
        opacity: 1
    },
    colors: [primary_color, secondary_color, '#06b5dd'],

};

export const orderStatus = {
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
    },

    xaxis: {
        axisBorder: {
            show: true,
            color: '#cccccc',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
    },

    chart: {
        height: 360,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    stroke: {
        curve: 'smooth',
        width: 4
    },
    colors: [primary_color, secondary_color, '#ffc717'],
    series: [{
        name: "Music",
        data: [1, 15, 26, 20, 33, 27]
    },
    {
        name: "Photos",
        data: [3, 33, 21, 42, 19, 32]
    },
    {
        name: "Files",
        data: [0, 39, 52, 11, 29, 43]
    }
    ],
    subtitle: {
        text: 'Statistics',
        offsetY: 55,
        offsetX: 20
    },
    markers: {
        size: 6,
        strokeWidth: 0,
        hover: {
            size: 9
        }
    },
    labels: ['01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022'],
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -20
    }
}


function generateData(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        const x = (i + 1).toString();
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
};
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
function makeData() {
    const colors = ['#669bbc', '#219ebc', '#03045e', '#335c67', '#ffc717', '#fd517d', '#158df7'];    const arrayData = [{
        y: 400,
        quarters: [{
            x: 'Q1',
            y: 120
        }, {
            x: 'Q2',
            y: 90
        }, {
            x: 'Q3',
            y: 100
        }, {
            x: 'Q4',
            y: 90
        }]
    }, {
        y: 430,
        quarters: [{
            x: 'Q1',
            y: 120
        }, {
            x: 'Q2',
            y: 110
        }, {
            x: 'Q3',
            y: 90
        }, {
            x: 'Q4',
            y: 110
        }]
    }, {
        y: 448,
        quarters: [{
            x: 'Q1',
            y: 70
        }, {
            x: 'Q2',
            y: 100
        }, {
            x: 'Q3',
            y: 140
        }, {
            x: 'Q4',
            y: 138
        }]
    }, {
        y: 470,
        quarters: [{
            x: 'Q1',
            y: 150
        }, {
            x: 'Q2',
            y: 60
        }, {
            x: 'Q3',
            y: 190
        }, {
            x: 'Q4',
            y: 70
        }]
    }, {
        y: 540,
        quarters: [{
            x: 'Q1',
            y: 120
        }, {
            x: 'Q2',
            y: 120
        }, {
            x: 'Q3',
            y: 130
        }, {
            x: 'Q4',
            y: 170
        }]
    }, {
        y: 580,
        quarters: [{
            x: 'Q1',
            y: 170
        }, {
            x: 'Q2',
            y: 130
        }, {
            x: 'Q3',
            y: 120
        }, {
            x: 'Q4',
            y: 160
        }]
    }];
    const dataSet = shuffleArray(arrayData)

    const dataYearSeries = [{
        x: "2014",
        y: dataSet[0].y,
        color: colors[0],
        quarters: dataSet[0].quarters
    }, {
        x: "2015",
        y: dataSet[1].y,
        color: colors[1],
        quarters: dataSet[1].quarters
    }, {
        x: "2016",
        y: dataSet[2].y,
        color: colors[2],
        quarters: dataSet[2].quarters
    }, {
        x: "2017",
        y: dataSet[3].y,
        color: colors[3],
        quarters: dataSet[3].quarters
    }, {
        x: "2021",
        y: dataSet[4].y,
        color: colors[4],
        quarters: dataSet[4].quarters
    }, {
        x: "2022",
        y: dataSet[5].y,
        color: colors[5],
        quarters: dataSet[5].quarters
    }];

    return dataYearSeries
};