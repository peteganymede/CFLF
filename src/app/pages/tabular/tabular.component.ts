import { Component, OnInit } from '@angular/core';
import { TabularData} from '../../models/main.model'
import { ColDef, GridApi, GridOptions } from 'ag-grid-enterprise';
import { TabularGridModel, TabularGridOptionsModel} from 'src/app/models/grid-config/tabular-grid.model'

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrl: './tabular.component.scss',
  host: { class: 'grid grid-rows-[auto_1fr] m-4' },
})
export class TabularComponent implements OnInit {

  columnDefinitions!: Array<ColDef>;
  gridOptions!: GridOptions;
  tabularData = TabularData
  gridApi!: GridApi<Array<any>>;

  constructor(){
    this.columnDefinitions = TabularGridModel
    this.gridOptions = TabularGridOptionsModel;
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

}
