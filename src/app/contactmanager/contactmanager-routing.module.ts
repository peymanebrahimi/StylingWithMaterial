import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: UserComponent },
      { path: '', component: MaincontentComponent },
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactmanagerRoutingModule { }
