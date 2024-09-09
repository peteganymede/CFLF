import { GridOptions, ColDef } from 'ag-grid-community';

import { StandardColumnTypes } from './standard-column-types.model';
import {  SortLists } from '../main.model';

export const DashboardGridModel: Array<ColDef> = [
  {
    headerName: 'Decision Reached',
    field: 'decisionReached',
    type: 'yesNoIndicator',
    hide: false,
    maxWidth: 130,
    minWidth: 130,
  },
  {
    headerName: 'Code',
    field: 'programCode',
    type: 'string',
    hide: false,
    width: 100,
    minWidth: 100,
  },
  {
    headerName: 'Category',
    field: 'category',
    type: 'string',
    hide: false,
    width: 100,
    minWidth: 100,
  },

  {
    headerName: 'DM',
    field: 'dm',
    type: 'statusIndicator',
    hide: false,
    width: 100,
    minWidth: 100,
    
  },
  {
    headerName: 'SDSA / Stats',
    field: 'sdsaStats',
    type: 'statusIndicator',
    hide: false,
    width: 100,
    minWidth: 100,
    
  },
  {
    headerName: 'Clin Ops',
    field: 'clinicalOps',
    type: 'statusIndicator',
    hide: false,
    width: 100,
    minWidth: 100,
    
  },
  {
    headerName: 'Clin Pharm',
    field: 'clinPharm',
    type: 'statusIndicator',
    hide: false,
    width: 100,
    minWidth: 100,
    
  },
  {
    headerName: 'Regulatory',
    field: 'regulatory',
    type: 'statusIndicator',
    hide: false,
    width: 100,
    minWidth: 100,
    
  },
  {
    headerName: 'OARS / GSSO',
    field: 'oarsGsso',
    type: 'statusIndicator',
    hide: false,
    width: 100,
    minWidth: 100,
    
  },
  {
    headerName: 'PharmSci / GCS',
    field: 'pharmSciGcs', 
    type: 'statusIndicator',
    hide: false,
    width: 100,
    minWidth: 100,
    
  },
  {
    headerName: 'DED',
    field: 'ded',
    type: 'statusIndicator',
    hide: false,
    width: 100,
    minWidth: 100,
    
  },
  {
    headerName: 'MW',
    field: 'mw',
    type: 'statusIndicator',
    hide: false,
    width: 100,
    minWidth: 100,
    
  },
];

export const DashboardGridOptionsModel: GridOptions = {
  animateRows: true,
  rowSelection: 'single',
  suppressContextMenu: true,
  suppressCellSelection: true,
  groupDisplayType: 'custom',
  suppressAggFuncInHeader: true,
  headerHeight: 70,
  columnDefs: [],
  defaultColDef: {
    width: 100,
    sortable: true,
    resizable: true,
    filter: 'agSetColumnFilter',
    filterParams: {
      textFormatter: function (s: any) {
        if (s) {
          return s.toLowerCase();
        }
      },
      debounceMs: 50,
    },
    menuTabs: ['filterMenuTab'],
    headerComponentParams: {
      template:
        '<div class="ag-cell-label-container" role="presentation">' +
        '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
        '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
        '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
        '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
        '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
        '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
        '    <span ref="eText" class="ag-header-cell-text" role="columnheader" style="white-space: normal;"></span>' +
        '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
        '  </div>' +
        '</div>',
    },
  },

  columnTypes: {
    ...StandardColumnTypes,
    phase: {
      comparator: (valueA: any, valueB: any, nodeA: any, nodeB: any) => {
        const sortA = SortLists?.['ValuationPhaseSort']?.[nodeA?.data?.PHASE] || 1000;
        const sortB = SortLists?.['ValuationPhaseSort']?.[nodeB?.data?.PHASE] || 1000;
        return sortA < sortB ? -1 : 1;
      },
    },

    statusIndicator:{
      maxWidth: 130,
      minWidth: 130,

      cellClass: ['flex ', 'items-center', 'justify-center', 'px-0'],
      cellRenderer: function (params: any) {
        if (params.value === 'Yes') {
          return '<span class="  bg-green-500 my-1 ml-5  h-6 w-6 flex items-center justify-center rounded-full border border-solid border-slate-500 px-2 text-sm  text-green-100"></span>';
        } else if (params.value === 'No') {
          return '<span class="  bg-red-500  my-1 ml-5 h-6 w-6 flex items-center justify-center rounded-full border border-solid border-slate-500 px-2 text-sm  text-blue-100"></span>';
        } else {
          return '<span class=" bg-slate-300  my-1 ml-5 h-6 w-6 flex items-center justify-center rounded-full border border-solid border-slate-500 px-2 text-sm  text-white"></span>';
        }
      },
    },
    yesNoIndicator:{
      maxWidth: 120,
      minWidth: 120,

      cellClass: ['flex ', 'items-center', 'justify-center', 'px-0'],
      cellRenderer: function (params: any) {
        if (params.value === 'Yes') {
          return '<span class="  bg-green-500 my-1 ml-5   flex items-center justify-center rounded-full border border-solid border-slate-500 px-2 text-sm  text-green-100">' + ' ' + params.value + '</span>';
        } else if (params.value === 'No') {
          return '<span class="  bg-red-500  my-1 ml-5  flex items-center justify-center rounded-full border border-solid border-slate-500 px-2 text-sm  text-blue-100">' + ' ' + params.value + '</span>';
        } else {
          return '<span class=" bg-slate-300  my-1 ml-5  flex items-center justify-center rounded-full border border-solid border-slate-500 px-2 text-sm  text-white">' + ' ' + params.value + '</span>';
        }
      },
    }
  },
};

