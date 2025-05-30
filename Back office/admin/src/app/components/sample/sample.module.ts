import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgSelectModule,
    SampleRoutingModule
  ],
  declarations: [SampleComponent]
})
export class SampleModule { }
