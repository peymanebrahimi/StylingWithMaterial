import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-newcontactdialog',
  templateUrl: './newcontactdialog.component.html',
  styleUrls: ['./newcontactdialog.component.scss']
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
