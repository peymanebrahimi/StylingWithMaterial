import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";

const moduleList = [
  MatButtonModule,
  MatIconModule,
  MatCardModule, 
  MatCheckboxModule
];

@NgModule({
  declarations: [],
  imports: [
    moduleList
  ],
  exports: [moduleList]
})
export class MaterialcoreModule { }
