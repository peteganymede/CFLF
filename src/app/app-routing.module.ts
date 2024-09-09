import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TabularComponent } from "./pages/tabular/tabular.component";


const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },

  {
    path: "tabular",
    component: TabularComponent,
   
  },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "/dashboard", pathMatch: "full" },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
