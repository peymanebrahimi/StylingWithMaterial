import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tut1Component } from './tut1/tut1.component';

const routes: Routes = [
  { path: 'tut1', component: Tut1Component },
  { path: '**', redirectTo: 'tut1' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridingRoutingModule { }
