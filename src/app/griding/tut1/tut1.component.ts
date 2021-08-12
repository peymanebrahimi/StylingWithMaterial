import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tut1',
  templateUrl: './tut1.component.html',
  styleUrls: ['./tut1.component.scss']
})
export class Tut1Component implements OnInit {

  @ViewChild('agGrid') agGrid!: AgGridAngular;

  // columnDefs = [
  //   { field: 'make', sortable: true, filter: true, checkboxSelection: true },
  //   { field: 'model', sortable: true, filter: true },
  //   { field: 'price', sortable: true, filter: true }
  // ];

  defaultColDef = {
    sortable: true,
    filter: true
  };

  columnDefs = [
    { field: 'make', rowGroup: true },
    { field: 'price' }
  ];

  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  rowData!: Observable<any[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json');
    this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }
  // getSelectedRows(): void {
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   const selectedData = selectedNodes.map(node => node.data);
  //   const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');

  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => {
      if (node.groupData) {
        return { make: node.key, model: 'Group' };
      }
      return node.data;
    });
    const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
}
