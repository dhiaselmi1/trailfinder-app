import {Component, OnInit} from '@angular/core';
import * as chartData1 from './../../../shared/data/chart/apex';
import {multiData, pieChart, single} from "../../../shared/data/chart/ngx-chart";
import * as graphoptions from '../../../shared/data/chart/config';
import * as chartData3 from '../../../shared/data/widget/chart'
import * as data from '../../../shared/data/dashboard/e-commerce';

import {DashboardService} from "../../../_services/dashboard.service";

import {DashagenceService} from "../../../_services/dashagence.service";
import {ActivatedRoute} from "@angular/router";
let secondary_color = localStorage.getItem('secondary_color') || '#ff9b54';

let primary_color = localStorage.getItem('primary_color') || '#0e9594';
@Component({
  selector: 'ps-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  agency:any

  result:any={};
  responseBar:any= {};
  responseResult:any= {};
  totalCount:any= {};
  ChartOptions:any= {};
  revenueStatistic:any= {};
  radar:any= {};
  pieChart:any= {};
  pieChart3:any= {};
  pie:any= {};
  barChartsingle:any = [];
  topAgencies:any= [];
  bar:any;
  //Apex chart
  MAX_ELEMENTS: number = 10;
  sum:Number = 0;
  ITEM_PRICE: number = 5;
  box: HTMLElement | null = document.querySelector(".box");
  price: HTMLElement | null = document.querySelector(".wrap.price");
  minus: HTMLElement | null = document.querySelector(".minus");
  plus: HTMLElement | null = document.querySelector(".plus");
  activeCount: number = 1;


  public column = chartData1.column;
  public donut = chartData1.donut;
// NGX CHART


  public single = single
constructor(private dashboardService:DashboardService ,private dashagenceService:DashagenceService, private activatedRoute:ActivatedRoute,) {
  Object.assign(this, { multiData, pieChart, single })



}
  public barChartShowYAxis = graphoptions.barChartShowYAxis;
  public barChartShowXAxis = graphoptions.barChartShowXAxis;
  public barChartGradient = graphoptions.barChartGradient;
  public barChartShowLegend = graphoptions.barChartShowLegend;
  public barChartShowXAxisLabel = graphoptions.barChartShowXAxisLabel;
  public barChartXAxisLabel = graphoptions.barChartXAxisLabel;
  public barChartShowYAxisLabel = graphoptions.barChartShowYAxisLabel;
  public barChartYAxisLabel = graphoptions.barChartYAxisLabel;
  public barChartColorScheme = graphoptions.barChartColorScheme;

  // pie-chart options
  public pieChartColorScheme = graphoptions.pieChartcolorScheme;


  //Area-chart options
  public areaChartshowXAxis = graphoptions.areaChartshowXAxis;
  public areaChartshowYAxis = graphoptions.areaChartshowYAxis;
  public areaChartgradient = graphoptions.areaChartgradient;
  public areaChartshowXAxisLabel = graphoptions.areaChartshowXAxisLabel;
  public areaChartxAxisLabel = graphoptions.areaChartxAxisLabel
  public areaChartshowYAxisLabel = graphoptions.areaChartshowYAxisLabel;
  public areaChartcolorScheme = graphoptions.areaChartcolorScheme;


//CHart

//E-commerce
  public newCustomers = data.newCustomers;



  //Area-chart options

  public lineChartcurve = graphoptions.lineChartcurve;
  ngOnInit(): void {
    this.agency = this.activatedRoute.snapshot.data['Agency'];

    if (!localStorage.getItem('refreshed')) {
      // Rafraîchissez la page et définissez l'indicateur
      window.location.reload();
      localStorage.setItem('refreshed', 'true');
    }
    if (this.box && this.price && this.minus && this.plus) {
      for (let i = 2; i < this.MAX_ELEMENTS + 2; i++) {
        const span = document.createElement("span");
        span.innerText = i.toString();
        span.classList.add("number");
        this.box.appendChild(span);

      }

      this.plus.addEventListener("click", this.handlePlusClick.bind(this));
      this.minus.addEventListener("click", this.handleMinusClick.bind(this));
    }
    if(this.agency.id==0) {
      this.getBar();
      this.getresult();
      this.getRadar();
      this.getSingleBar();
      this.getSinglePie();
      this.getPie3();
      this.getPie();
      this.getRevenueTotal();
      this.getTop3();
      this.getTotalCount();
    }
    else
    {
      this.getPie3Ag();
      this.getNearestEventAg();
      this.getSinglePieAg();
      this.getPieAg();
      this.getRevenueTotalAg();
      this.getTotalCountAg();
    }
  }
  handlePlusClick(): void {
    if (this.minus && this.box && this.price) {
      this.minus.classList.remove("gray");
      if (this.activeCount < this.MAX_ELEMENTS) {
        if (this.box.children.length > 0) {
          this.box.scrollTo((this.box.scrollWidth / this.box.children.length) * this.activeCount, 0);
        }
        this.activeCount++;
      }
      if (this.activeCount == this.MAX_ELEMENTS) {
        this.plus.classList.add("gray");
      }
      if (this.price) {
        this.price.innerText = `$${this.activeCount * this.ITEM_PRICE}`;
      }
    }
  }

  handleMinusClick(): void {
    if (this.plus && this.box && this.price) {
      this.plus.classList.remove("gray");
      if (this.activeCount > 1) {
        this.activeCount--;
        if (this.box.children.length > 0) {
          this.box.scrollTo((this.box.scrollWidth / this.box.children.length) * (this.activeCount - 1), 0);
        }
      }
      if (this.activeCount == 1) {
        this.minus.classList.add("gray");
      }
      if (this.price) {
        this.price.innerText = `$${this.activeCount * this.ITEM_PRICE}`;
      }
    }
  }
  public onSelect(e) {  }
  public getBar() {
    this.dashboardService.getBarchart().subscribe(
        (response: any) => {
          this.responseBar = response;

          this.ChartOptions = {
            series: [
              {
                name: "Nombre d'agence",
                data: this.responseBar?.data
              }
            ],
            colors: [primary_color],
            chart: {
              type: "bar",
              height: 350,
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: this.responseBar?.categories
            }
          };
          this.bar = this.ChartOptions
        },
        () => {
        },
        () => {
        }
    );
  }
  public getresult()
  {
    this.dashboardService.getResultchart().subscribe(
        (response: any) => {
          this.responseResult = response;
          this.result = {
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
              data: this.makeData(this.responseResult)
            }],
            tooltip: {
              x: {
                show: false
              },
            },
            title: {
              text: "",
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
              tickAmount: 5, // Ajustez cette valeur pour changer la distance entre les abscisses
              labels: {
                show: true
              },
              axisBorder: {
                show: false
              },
            }
          };


        },
        () => {
        },
        () => {
        }
    );






  }
  public getRadar()
  { this.dashboardService.getRadarchart().subscribe(
      (response: any) => {
        this.radar = {
          series: [
            {
              name: "Series 1",
              data: response.data
            }
          ],
          colors: [secondary_color],
          chart: {
            height: 350,
            type: "radar",
            toolbar:{
              show: false
            }
          },
          dataLabels: {
            enabled: true
          },
          plotOptions: {
            radar: {
              size: 140,
              polygons: {
                // strokeColor: "#e9e9e9",
                fill: {
                  colors: ["#f8f8f8", "#fff"]
                }
              }
            }
          },
          title: {
            text: ""
          },
          markers: {
            size: 4,
            colors: ["#fff"],
            strokeColors: ["#ef8354"],
            strokeWidth: 2
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val;
              }
            }
          },
          xaxis: {
            categories: response.categories
          },
          yaxis: {
            tickAmount: 6,
          }
        };
      },
      () => {
      },
      () => {
      }
  );

  }
  public makeData(response:any) {
    const colors = ['#669bbc', '#219ebc', '#03045e', '#335c67', '#ffc717', '#fd517d', '#158df7'];


    const dataYearSeries = response.data.map((data, index) => {
      return {
        x: response.categories[index],
        y: data,
        color: colors[index % colors.length], // Utilisez le modulo pour éviter les erreurs d'index en dehors des limites
      };
    });


    return dataYearSeries
  }
  public getSingleBar()
  {
    this.dashboardService.getSingleBarchart().subscribe(
        (response: any) => {
          this.barChartsingle = response.categories.map((category, index) => {
            return {
              "name": category,
              "value": response.data[index]
            };
          });
          console.log(this.barChartsingle);
        },

        () => {
        },
        () => {
        }
    );

  }
  public getSinglePie()
  {
    this.dashboardService.getSinglePieChart().subscribe(
        (response: any) => {
          this.pieChart = response.categories.map((category, index) => {
            return {
              "name": category,
              "value": response.data[index]
            };
          });

        },

        () => {
        },
        () => {
        }
    );
  }
  public getPie3()
  {
    this.dashboardService.getPieChart3().subscribe(
        (response: any) => {
          let dataTable = [['Country', 'Number of Users']];
          for (let i = 0; i < response.categories.length; i++) {
            dataTable.push([response.categories[i], Number(response.data[i])]);
          }
console.log(dataTable);
          this.pieChart3 = {
            chartType: 'PieChart',
            dataTable: dataTable,
            options: {
              title: '',
              is3D: true,
              width: '100%',
              height: 400,
              colors: ["#15616D", "#2C737D", "#43868E", "#59989E", "#70AAAF", "#87BCBF","#9ECFCF","#B4E1E0","#CBF3F0"],
              backgroundColor: 'transparent'
            },
          };

        },

        () => {
        },
        () => {
        }
    );
  }
  public getPie()
  {
    this.dashboardService.getPieChart().subscribe(
        (response: any) => {
          let dataTable = [['Country', 'Number of Users']];
          for (let i = 0; i < response.categories.length; i++) {
            dataTable.push([response.categories[i], Number(response.data[i])]);
          }
console.log(dataTable);
          this.pie = {
            pieseries: response.data,
            chart: {
              width: 380,
              type: "pie",
              toolbar:{
                show: false
              }
            },
            colors: [primary_color, secondary_color],
            labels: response.categories,
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: "bottom"
                  }
                }
              }
            ]
          };

        },

        () => {
        },
        () => {
        }
    );
  }
  public getRevenueTotal() {
    this.dashboardService.getRevenueTotal().subscribe(
        (response: any) => {
          this.sum=  response.data.reduce((a, b) => a + b, 0);

          this.revenueStatistic = {
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
                data: response.data,
              },
            ],
            xaxis: {
              low: 0,
              offsetX: 0,
              offsetY: 0,
              show: false,
              type: "category", // Change type to "category"
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
              categories: response.categories,
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
            }
          };
        },
        () => {
        },
        () => {
        }
    );
  }
  public getTop3() {
    this.dashboardService.getTopAgencies().subscribe(
        (response: any) => {
          this.topAgencies = response.map(agencyRevenue => {
            return {
              name: agencyRevenue.agency,
              series: Object.entries(agencyRevenue.revenue).map(([quarter, revenue]) => {
                return {
                  name: quarter,
                  value: revenue
                };
              })
            };
          });
        },
        () => {
        },
        () => {
        }
    );
  }

getTotalCount()
{
  this.dashboardService.getTotalCount().subscribe(
      (response: any) => {

       this.totalCount=response;
      },
      () => {
      },
      () => {
      }
  );
}

  getNearestEventAg()
  {
    this.dashagenceService.getEvent(this.agency.id).subscribe(
        (response: any) => {
          this.newCustomers=  {
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
            series: [Math.round(response.reservationCount / response.capacity * 100)],
            stroke: {
              dashArray: 5,
            },
            labels: [`Event: ${response.event}`],
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

        },

        () => {
        },
        () => {
        }
    );
  }
  public getSinglePieAg()
  {
    this.dashagenceService.getSinglePieChart(this.agency.id).subscribe(
        (response: any) => {
          this.pieChart = response.categories.map((category, index) => {
            return {
              "name": category,
              "value": response.data[index]
            };
          });

        },

        () => {
        },
        () => {
        }
    );
  }
  public getPie3Ag()
  {
    this.dashagenceService.getPieChart3(this.agency.id).subscribe(
        (response: any) => {
          let dataTable = [['Country', 'Number of Users']];
          for (let i = 0; i < response.categories.length; i++) {
            dataTable.push([response.categories[i], Number(response.data[i])]);
          }
          console.log(dataTable);
          this.pieChart3 = {
            chartType: 'PieChart',
            dataTable: dataTable,
            options: {
              title: '',
              is3D: true,
              width: '100%',
              height: 400,
              colors: ["#94d2bd", primary_color,  "#90e0ef", "#44a1a0", "#457b9d"],
              backgroundColor: 'transparent'
            },
          };

        },

        () => {
        },
        () => {
        }
    );
  }
  public getPieAg()
  {
    this.dashagenceService.getPieChart(this.agency.id).subscribe(
        (response: any) => {
          let dataTable = [['Country', 'Number of Users']];
          for (let i = 0; i < response.categories.length; i++) {
            dataTable.push([response.categories[i], Number(response.data[i])]);
          }
          console.log(dataTable);
          this.pie = {
            pieseries: response.data,
            chart: {
              width: 380,
              type: "pie",
              toolbar:{
                show: false
              }
            },
            colors: [primary_color, secondary_color],
            labels: response.categories,
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: "bottom"
                  }
                }
              }
            ]
          };

        },

        () => {
        },
        () => {
        }
    );
  }
  public getRevenueTotalAg() {
    this.dashagenceService.getRevenueTotal(this.agency.id).subscribe(
        (response: any) => {
          this.sum=  response.data.reduce((a, b) => a + b, 0);

          this.revenueStatistic = {
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
                data: response.data,
              },
            ],
            xaxis: {
              low: 0,
              offsetX: 0,
              offsetY: 0,
              show: false,
              type: "category", // Change type to "category"
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
              categories: response.categories,
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
            }
          };
        },
        () => {
        },
        () => {
        }
    );
  }
  getTotalCountAg()
  {
    this.dashagenceService.getTotalCount(this.agency.id).subscribe(
        (response: any) => {

          this.totalCount=response;
        },
        () => {
        },
        () => {
        }
    );
  }
  ngOnDestroy() {
    // Supprimez l'indicateur lorsque vous quittez la page
    localStorage.removeItem('refreshed');
  }

}
