import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridingRoutingModule } from './griding-routing.module';
import { Tut1Component } from './tut1/tut1.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    Tut1Component
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    GridingRoutingModule
  ]
})
export class GridingModule { }
