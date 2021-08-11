import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmanagerRoutingModule } from './contactmanager-routing.module';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialcoreModule } from '../materialcore/materialcore.module';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UsernoteComponent } from './usernote/usernote.component';
import { NewcontactdialogComponent } from './newcontactdialog/newcontactdialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MaincontentComponent,
    SidenavComponent,
    UserComponent,
    UsernoteComponent,
    NewcontactdialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialcoreModule,
    ContactmanagerRoutingModule
  ]
})
export class ContactmanagerModule { }
