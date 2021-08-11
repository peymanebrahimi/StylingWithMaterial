import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>Basic</button>
    <button mat-icon-button>
      <mat-icon>home</mat-icon>
    </button>
    <mat-checkbox>Check me</mat-checkbox>

  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
