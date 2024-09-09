import { Component, OnInit } from '@angular/core';
import { DashboardData} from '../../models/main.model'
import { ColDef, GridApi, GridOptions } from 'ag-grid-enterprise';
import { DashboardGridModel, DashboardGridOptionsModel} from 'src/app/models/grid-config/dashboard-grid.model'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  host: { class: 'grid grid-rows-[auto_1fr] m-4' },
})
export class DashboardComponent implements OnInit {
  columnDefinitions!: Array<ColDef>;
  gridOptions!: GridOptions;

  gridApi!: GridApi<Array<any>>;
  dashboardData = DashboardData


  constructor(){
    this.columnDefinitions = DashboardGridModel
    this.gridOptions = DashboardGridOptionsModel;
  }

  ngOnInit(): void {
    
  }



  onGridReady(params: any) {
    this.gridApi = params.api;
    //this.ApplyDefaultSort();
    this.sizeToFit();
  }


  sizeToFit() {
    //console.log('🚀 | sizeToFit:', this.gridApi);

    this.gridApi.sizeColumnsToFit({
      //defaultMinWidth: 99,
      //defaultMaxWidth: 99,
      //columnLimits: [{ key: 'country', minWidth: 90 }],
    });
  }

  onRowClicked(event: any) {
    //console.log('🚀 | onRowClicked:', event);
    //this.selectProgram(event.data);
  }

  getRandomYesNo(): string {
    return Math.random() < 0.5 ? 'Yes' : 'No';
  }

  getRandomColor(): string {
    const colors = ['#14A44D', '#DC4C64']; // Green and Red
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

