let primary_color = localStorage.getItem("primary_color") || "#7e37d8";
let secondary_color = localStorage.getItem("secondary_color") || "#fe80b2";

export const smallChart1 = {
  type: "Bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
    series: [
      [400, 900, 800, 1000, 700, 1000],
      [1000, 500, 600, 400, 700, 400],
    ],
  },
  options: {
    stackBars: true,
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0,
      labelInterpolationFnc: function (value) {
        return value / 1000 + "k";
      },
    },
    height: 80,
    width: 120,
  }
};
export const smallChart2 = {
  type: "Bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
    series: [
      [400, 900, 800, 1000, 700, 1000],
      [1000, 500, 600, 400, 700, 400],
    ],
  },
  options: {
    stackBars: true,
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0,
      labelInterpolationFnc: function (value) {
        return value / 1000 + "k";
      },
    },
    height: 80,
    width: 120,

    colors: ["#ffffff"],
    fill: {
      opacity: 1,
    },
  },
};

export const smallChart3 = {
  type: "Bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
    series: [
      [400, 900, 800, 1000, 700, 1000],
      [1000, 500, 600, 400, 700, 400],
    ],
  },
  options: {
    stackBars: true,
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0,
      labelInterpolationFnc: function (value) {
        return value / 1000 + "k";
      },
    },
    height: 80,
    width: 120,
  }
};
export const smallChart4 = {
  type: "Bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
    series: [
      [400, 900, 800, 1000, 700, 1000],
      [1000, 500, 600, 400, 700, 400],
    ],
  },
  options: {
    stackBars: true,
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0,
      labelInterpolationFnc: function (value) {
        return value / 1000 + "k";
      },
    },
    height: 80,
    width: 120,
    colors: ["#ffffff"],
    fill: {
      opacity: 1,
    },
  }
};

export const revenueStatistic = {
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  stroke: {
    curve: "smooth",
    width: 4,
  },
  series: [
    {
      name: "",
      data: [50, 45, 55, 50, 60, 56, 58, 50, 65, 60, 50, 60, 52, 55, 52],
    },
  ],

  xaxis: {
    low: 0,
    offsetX: 0,
    offsetY: 0,
    show: false,
    type: "datetime",
    labels: {
      low: 0,
      offsetX: 0,
      show: true,
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: ["2022-09-19T00:00:00", "2022-09-19T01:30:00", "2022-09-19T02:30:00", "2022-09-19T03:30:00", "2022-09-19T04:30:00", "2022-09-19T05:30:00", "2022-09-19T06:30:00", "2022-09-19T07:30:00", "2022-09-19T08:30:00", "2022-09-19T09:30:00", "2022-09-19T10:30:00", "2022-09-19T11:30:00", "2022-09-19T12:30:00", "2022-09-19T13:30:00", "2022-09-19T14:30:00"],
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  colors: [secondary_color],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 1.0,
      stops: [0, 85, 100],
    },
  },
};

export const newCustomers = {
  chart: {
    height: 480,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 20,
        size: "50%",
      },
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "16px",
          color: "#ffffff",
          offsetY: 10,
        },
        value: {
          offsetY: -40,
          fontSize: "22px",
          color: "#ffffff",
          formatter: function (val) {
            return val + "/100";
          },
        },
      },
    },
  },

  fill: {
    opacity: 1,
  },
  colors: ["#ffffff"],
  series: [50],
  stroke: {
    dashArray: 5,
  },
  labels: ["Customer Ratio"],
  responsive: [
    {
      breakpoint: 1730,
      options: {
        chart: {
          height: 350,
        },
        legend: {
          show: false,
        },
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          height: 300,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

export const monthRevenue = {
  type: "Bar",
  data: {
    labels: ["J", "F", "M", "A", "M", "J"],
    series: [[400, 580, 200, 450, 650, 800]],
  },
  options: {
    height: 300,
    low: 0,
    offset: 0,
    chartPadding: {
      left: 0,
    },
    axisY: {
      labelInterpolationFnc: function (value) {
        return value / 1000 + "k";
      },
      showLabel: false,
      showGrid: false,
      offset: 0,
    },
    axisX: {
      showGrid: false,
    },
  },
  events: {
    draw: (data) => {
      if (data.type === "bar") {
        data.element.attr({
          x1: data.x1 + 0.05,
          style: "stroke-width: 15px ; stroke-linecap: round",
        });
      }
    },
    created: (data) => {
      const defs = data.svg.elem("defs");
      defs
        .elem("linearGradient", {
          id: "gradient",
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0,
        })
        .elem("stop", {
          offset: 0,
          "stop-color": primary_color,
        })
        .parent()
        .elem("stop", {
          offset: 1,
          "stop-color": primary_color,
        });
    },
  },
};
export const monthRevenue1 = {
  type: "Bar",
  data: {
    labels: ["J", "A", "S", "O", "N", "F"],
    series: [[250, 150, 200, 100, 400, 150]],
  },
  options: {
    height: 300,
    low: 0,
    offset: 0,
    axisY: {
      labelInterpolationFnc: function (value) {
        return value / 1000 + "k";
      },
      showLabel: false,
      showGrid: false,
      offset: -26,
    },
    chartPadding: {
      right: 0,
    },
    axisX: {
      showGrid: false,
    },
  },
  events: {
    draw: (data) => {
      if (data.type === "bar") {
        data.element.attr({
          x1: data.x1 + 0.05,
          style: "stroke-width: 15px ; stroke-linecap: round",
        });
      }
    },
  },
};
