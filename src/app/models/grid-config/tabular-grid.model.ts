import { GridOptions, ColDef } from 'ag-grid-community';

import { StandardColumnTypes } from './standard-column-types.model';
import {  SortLists } from '../main.model';

export const TabularGridModel: Array<ColDef> = [
  {
    headerName: 'Status',
    field: 'status',
    type: 'string',
    hide: false,
    width: 150,
    minWidth: 150,
    editable: true,
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
    headerName: 'Category',
    field: 'category',
    type: 'string',
    hide: false,
    width: 100,
    minWidth: 100,
  },
];

export const TabularGridOptionsModel: GridOptions = {
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
  },
};

