import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {TodoModule} from "../todo/todo.module";
import {StickyComponent} from "../sticky/sticky.component";
import {FormsModule} from "@angular/forms";
import {ChartistModule} from "ng-chartist";
import {NgChartsModule} from "ng2-charts";
import {NgApexchartsModule} from "ng-apexcharts";
import { AgenceDashboardComponent } from './agence-dashboard/agence-dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {Ng2GoogleChartsModule} from "ng2-google-charts";
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
    declarations: [DashboardComponent, StickyComponent, AgenceDashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartistModule,
        NgChartsModule,
        NgApexchartsModule,
        FormsModule,
        NgxChartsModule,
        TodoModule,
        Ng2GoogleChartsModule,
        SharedModule,

    ]
})
export class DashboardModule { }
