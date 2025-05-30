import * as Chartist from "chartist";
import { ChartEvent } from "ng-chartist";
import * as series from "./series";

let primary_color = localStorage.getItem("primary_color") || "#7e37d8";
let secondary_color = localStorage.getItem("secondary_color") || "#fe80b2";

export interface Chart {
  type: any;
  data: any;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

// Chart 1
export const chartBox1 = {
  chart: {
    height: 120,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 2,
      left: 10,
      blur: 2,
      color: primary_color,
      opacity: 0.5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Series 1",
      data: [50, 40, 60, 38, 52],
    },
  ],
  stroke: {
    lineCap: "butt",
    width: [8],
    curve: "smooth",
  },
  colors: ["#ffffff", "transparent"],
  grid: {
    show: false,
    padding: {
      top: -25,
      left: 0,
      right: 0,
      bottom: 25,
    },
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan"],
    low: 0,
    offsetX: 0,
    offsetY: 0,
    show: false,
    labels: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};
export const chartBox2 = {
  chart: {
    height: 130,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 2,
      left: 10,
      blur: 2,
      color: secondary_color,
      opacity: 0.5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Series 1",
      data: [40, 60, 40, 60, 55, 65],
    },
  ],
  stroke: {
    lineCap: "butt",
    width: [8],
    curve: "smooth",
  },
  colors: ["#ffffff"],
  grid: {
    show: false,
    padding: {
      top: -25,
      left: 0,
      right: 0,
      bottom: 25,
    },
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan"],
    low: 0,
    offsetX: 0,
    offsetY: 0,
    show: false,
    labels: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

// Chart 3
export const chartBox3 = {
  chart: {
    height: 130,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 2,
      left: 10,
      blur: 2,
      color: "#fbbc30",
      opacity: 0.5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Series 1",
      data: [70, 50, 70, 50, 60],
    },
  ],
  stroke: {
    lineCap: "butt",
    width: [8],
    curve: "smooth",
  },
  colors: ["#ffffff"],
  grid: {
    show: false,
    padding: {
      top: -25,
      left: 0,
      right: 0,
      bottom: 25,
    },
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan"],
    low: 0,
    offsetX: 0,
    offsetY: 0,
    show: false,
    labels: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

export const chartBox4 = {
  chart: {
    height: 130,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 2,
      left: 10,
      blur: 2,
      color: "#06b5ca",
      opacity: 0.5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Series 1",
      data: [30, 20, 70, 40, 60, 50],
    },
  ],
  stroke: {
    lineCap: "butt",
    width: [8],
    curve: "smooth",
  },
  colors: ["#ffffff"],
  grid: {
    show: false,
    padding: {
      top: -25,
      left: 0,
      right: 0,
      bottom: 25,
    },
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan"],
    low: 0,
    offsetX: 0,
    offsetY: 0,
    show: false,
    labels: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

export const yearOverview = {
  type: "Bar",
  data: {
    labels: ["J", "F", "M", "A", "M", "J"],
    series: [[400, 580, 200, 450, 650, 800]],
  },
  options: {
    height: 300,
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
export const yearOverview1 = {
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

export const salesByCountry = {
  chart: {
    height: 390,
    type: "radialBar",
    fullWitdth: true,
  },
  plotOptions: {
    padding: {
      left: 0,
      right: 0,
    },
    radialBar: {
      width: 12,
      hollow: {
        size: "40%",
      },
      track: {
        show: false,
      },
      dataLabels: {
        name: {
          fontSize: "22px",
        },
        value: {
          fontSize: "16px",
        },
        total: {
          show: true,
          label: "Total",
          formatter: function (w) {
            return 75;
          },
        },
      },
    },
  },
  fill: {
    colors: [primary_color, secondary_color, "#ffc717"],
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.2,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  colors: ["#5a1aab", "#fe6aa4", "#168ef7"],
  series: [60, 67, 80],
  labels: ["UK", "New York", "Chaina"],
  stroke: {
    lineCap: "round",
    width: 8,
  },
  responsive: [
    {
      breakpoint: 360,
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

export const monthOverview = {
  chart: {
    height: 230,
    type: "area",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [8],
    curve: "straight",
  },
  fill: {
    opacity: 0.4,
    type: "solid",
    colors: [secondary_color],
  },
  series: [
    {
      name: "STOCK ABC",
      data: [8121.85, 8128.0, 8122.9, 8165.5, 8340.7, 8514.3, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8876.0, 9040.65, 9240],
    },
  ],
  labels: series.series.monthDataSeries1.dates,
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
      bottom: -40,
      top: -30,
    },
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    show: false,
  },
  legend: {
    horizontalAlign: "left",
  },
  colors: ["#ffffff"],
};
export const yearOverviewApex = {
  chart: {
    height: 230,
    type: "area",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [8],
    curve: "straight",
  },
  fill: {
    opacity: 0.4,
    type: "solid",
    colors: [primary_color],
  },
  series: [
    {
      name: "STOCK ABC",
      data: [8121.85, 8128.0, 8520.87, 8620.5, 8750.7, 8680.3, 8640.0, 8599.45, 8581.85, 8689.75, 8575.7, 8645.9, 8899.95, 8998.86, 9090.42, 9040.0, 9190.85, 9040.0, 9140.65, 9240.85],
    },
  ],
  labels: series.series.monthDataSeries1.dates,
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
      bottom: -40,
      top: -30,
    },
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    show: false,
  },
  legend: {
    horizontalAlign: "left",
  },
  colors: ["#ffffff"],
};
