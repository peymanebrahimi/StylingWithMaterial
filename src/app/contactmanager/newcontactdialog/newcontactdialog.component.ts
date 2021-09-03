import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LuxonDateAdapter, MatLuxonDateAdapterOptions, MAT_LUXON_DATE_ADAPTER_OPTIONS, MAT_LUXON_DATE_FORMATS } from '@angular/material-luxon-adapter';
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-newcontactdialog',
  templateUrl: './newcontactdialog.component.html',
  styleUrls: ['./newcontactdialog.component.scss'],

  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "fa-IR" },
    {
      provide: DateAdapter,
      useClass: LuxonDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS, useValue: MAT_LUXON_DATE_FORMATS
    }
  ]
})
export class NewcontactdialogComponent implements OnInit {

  user: User;

  constructor(private dialogRef: MatDialogRef<NewcontactdialogComponent>,
    private userService: UserService) {
    this.user = new User(0, new Date(), '', '', '', []);
  }

  name = new FormControl('', [Validators.required]);
  birthDate = new FormControl('', [Validators.required]);
  bio = new FormControl('');


  ngOnInit(): void {
  }

  save() {
    this.user.name = this.name.value;
    this.user.birthDate = this.birthDate.value;
    this.user.bio = this.bio.value;
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'name is required' : '';
  }
}
