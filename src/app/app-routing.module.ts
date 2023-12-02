import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/right-layout/dashboard/dashboard.component";
import {OrdersComponent} from "./pages/right-layout/orders/orders.component";
import {PartiesComponent} from "./pages/right-layout/parties/parties.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'parties',
    component: PartiesComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
