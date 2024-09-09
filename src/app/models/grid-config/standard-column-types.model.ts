import { format, isPast, addDays, parseISO, isValid, isDate } from 'date-fns';
import { isInteger } from 'lodash';

export const StandardColumnTypes = {
  buttonCell: {
    maxWidth: 120,
    minWidth: 120,
    resizable: false,
    headerClass: 'header-custom',
    cellClass: ['flex ', 'items-center', 'justify-center', 'px-0'],
  },

  codeCell: {
    maxWidth: 150,
    minWidth: 120,
    resizable: false,
    cellClass: ['flex ', 'items-center', 'justify-center', 'px-0'],
  },


  popupCell: {
    maxWidth: 70,
    minWidth: 70,
    resizable: false,
    headerClass: ['flex ', 'items-center', 'justify-center', 'px-2'],
    cellClass: ['flex ', 'items-center', 'justify-center', 'px-2'],
  },

  number: {
    cellStyle: { 'text-align': 'center' },
    filter: 'agNumberColumnFilter',
    minWidth: 100,
  },

  string: {
    filter: 'agSetColumnFilter',
    minWidth: 100,
  },

  lineBreak: {
    filter: 'agSetColumnFilter',
    minWidth: 100,
    cellRenderer: function (params: any) {
      const breakParams = params.value ? params.value.replace(/(\r\n|\n|\r)/gm, '\n').replace(/\s\s+/g, ' ') : '';
      return '<span class="line-break">' + ' ' + breakParams + '</span>';
    },
  },

  wrap: {
    filter: 'agSetColumnFilter',
    minWidth: 100,
    flex: 1,
    resizable: true,
    sortable: true,
    wrapText: true,
    autoHeight: true,
  },

  percent1: {
    minWidth: 90,
    filter: 'agSetColumnFilter',
    valueFormatter: function (params: any) {
      if (isInteger(params.value * 100)) {
        return params.value && !isNaN(params.value) ? (+params.value * 100).toFixed(0).toLocaleString() + '%' : '';
      } else {
        return params.value && !isNaN(params.value) ? (+params.value * 100).toFixed(1).toLocaleString() + '%' : '';
      }
    },
  },

  percent100: {
    minWidth: 90,
    filter: 'agSetColumnFilter',
    valueFormatter: function (params: any) {
      return params.value && !isNaN(params.value) ? (+params.value).toFixed(0).toLocaleString() + '%' : '';
    },
  },

  currencyM: {
    minWidth: 90,
    filter: 'agSetColumnFilter',
    valueFormatter: function (params: any) {
      if (!isNaN(params.value)) {
        if (+params.value > 10) {
          return '$' + (+params.value).toFixed(0).toLocaleString() + 'M';
        } else {
          return '$' + (+params.value).toFixed(1).toLocaleString() + 'M';
        }
      } else {
        return ''; //'$0M';
      }
      //return params.value && !isNaN(params.value) ? '$' + (+params.value).toFixed(0).toLocaleString() + 'M' : '';  //'$0M';
    },
  },

  currency: {
    minWidth: 90,
    filter: 'agSetColumnFilter',
    valueFormatter: function (params: any) {
      if (!isNaN(params.value)) {
        if (+params.value > 100000000) {
          return '$' + (+params.value / 1000000).toFixed(0).toLocaleString() + 'M';
        } else if (+params.value > 10000000) {
          return '$' + (+params.value / 1000000).toFixed(1).toLocaleString() + 'M';
        } else {
          return '$' + (+params.value / 1000000).toFixed(2).toLocaleString() + 'M';
        }
      } else {
        return ''; //'$0M';
      }
      //return params.value && !isNaN(params.value) ? '$' + (+params.value).toFixed(0).toLocaleString() + 'M' : '';  //'$0M';
    },
  },

  year: {
    filter: 'agSetColumnFilter',
  },

  numberM: {
    minWidth: 90,
    filter: 'agSetColumnFilter',
    valueFormatter: function (params: any) {
      return params.value && !isNaN(params.value) ? (+params.value / 1000000).toFixed(1).toLocaleString() + 'M' : '';
    },
  },

  number2: {
    minWidth: 90,
    filter: 'agSetColumnFilter',
    valueFormatter: function (params: any) {
      return params.value && !isNaN(params.value) ? (+params.value).toFixed(2).toLocaleString() + '' : '';
    },
  },

  integer: {
    minWidth: 90,
    filter: 'agSetColumnFilter',
    valueFormatter: function (params: any) {
      return params.value && !isNaN(params.value) ? params.value : '';
    },
  },

  url: {
    filter: 'agSetColumnFilter',
    cellRenderer: function (params: any) {
      if (params?.value) {
        return '<a  href="' + params?.value + '" class=" font-bold text-blue-500 hover:text-blue-900" >' + 'Download </span>';
      } else {
        return '';
      }
    },
  },

  date: {
    filter: 'agDateColumnFilter',
    valueFormatter: function (params: any) {
      //return params.value ? format(params.value, 'DD-MMM-YY') : '';
      return isValid(parseISO(params.value)) ? format(parseISO(params.value), 'dd-MMM-yyyy') : '';
    }, //
    // add extra parameters for the date filter
    filterParams: {
      buttons: ['reset'],
      closeOnApply: true,
      defaultOption: 'greaterThanOrEqual',
      suppressAndOrCondition: true,
    },
    /*     valueGetter: function (params: any) {
      return params.data[params.colDef.field] ? format(params.data[params.colDef.field], 'YYYY-MM-DD') : ''; //: null;
    }, */
  },



};
