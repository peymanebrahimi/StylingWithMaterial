import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialcoreModule } from '../materialcore/materialcore.module';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialcoreModule
  ]
})
export class DemoModule { }
