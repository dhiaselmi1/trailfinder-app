import {Component, OnInit} from '@angular/core';
import * as data from "../../../../shared/data/dashboard/e-commerce";

import {ActivatedRoute, Router} from "@angular/router";
import {DashboardService} from "../../../../_services/dashboard.service";
import {DashagenceService} from "../../../../_services/dashagence.service";
import * as graphoptions from "../../../../shared/data/chart/config";
import {multiData, pieChart, single} from "../../../../shared/data/chart/ngx-chart";
let secondary_color = localStorage.getItem('secondary_color') || '#f7c59f';
let primary_color = localStorage.getItem('primary_color') || '#17bebb';
@Component({
  selector: 'ps-agence-dashboard',
  templateUrl: './agence-dashboard.component.html',
  styleUrls: ['./agence-dashboard.component.scss']
})
export class AgenceDashboardComponent implements OnInit{
  agency:any
  pieChart:any= {};
  pieChart3:any= {};
  pie:any= {};
  totalCount:any= {};
  newCustomers:any= null;
  sum:Number = 0;
  revenueStatistic:any= {};
  public pieChartColorScheme = graphoptions.pieChartcolorScheme;

constructor(
            private activatedRoute:ActivatedRoute,    private router: Router,private dashagenceService:DashagenceService,) {

  Object.assign(this, { multiData, pieChart, single })

}

  ngOnInit(): void {
    this.agency = this.activatedRoute.snapshot.data['Agency'];
    this.getPie3Ag();
    this.getNearestEventAg();
this.getSinglePieAg();
this.getPieAg();
    this.getRevenueTotalAg();
    this.getTotalCountAg();
    if (!localStorage.getItem('refreshed')) {
      // Rafraîchissez la page et définissez l'indicateur
      window.location.reload();
      localStorage.setItem('refreshed', 'true');
    }
  }
 // public newCustomers = data.newCustomers;
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
  public onSelect(e) {  }
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
              title: 'Utilsateurs par pays',
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
