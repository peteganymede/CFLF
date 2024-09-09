/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import 'ag-grid-enterprise';
import { LicenseManager } from 'ag-grid-enterprise';

LicenseManager.setLicenseKey(
  'CompanyName=SHI International Corp._on_behalf_of_Pfizer c/o Sentinel,LicensedGroup=Multi,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=5,LicensedProductionInstancesCount=0,AssetReference=AG-030699,SupportServicesEnd=21_October_2023_[v2]_MTY5Nzg0MjgwMDAwMA==c255c5ea066a5d3f547e475ce168d8b9'
);




platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));