import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NebularModule} from "../nebular/nebular.module";
import {HeaderComponent} from "../../components/header/header.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {DashboardComponent} from "../../pages/right-layout/dashboard/dashboard.component";
import {OrdersComponent} from "../../pages/right-layout/orders/orders.component";
import {PartiesComponent} from "../../pages/right-layout/parties/parties.component";

const modules = [
  HeaderComponent,
  SidebarComponent,
  DashboardComponent,
  OrdersComponent,
  PartiesComponent
]

@NgModule({
  declarations: [
    ...modules
  ],
  imports: [
    CommonModule,
    NebularModule
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
