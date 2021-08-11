import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent, merge, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note';
import { User } from '../models/user';

@Component({
  selector: 'app-usernote',
  templateUrl: './usernote.component.html',
  styleUrls: ['./usernote.component.scss']
})
export class UsernoteComponent implements OnInit, OnChanges {

  @Input() notes: Note[] = [];

  private _onDestroy = new Subject<void>();

  dataSource: MatTableDataSource<Note> = new MatTableDataSource<Note>();

  displayedColumns: string[] = ['position', 'title', 'date'];

  selectedFilter = this.displayedColumns[0];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.notes;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}
