import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NebularModule} from "../nebular/nebular.module";
import {HeaderComponent} from "../../components/header/header.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {DashboardComponent} from "../../pages/right-layout/dashboard/dashboard.component";
import {OrdersComponent} from "../../pages/right-layout/orders/orders.component";
import {PartiesComponent} from "../../pages/right-layout/parties/parties.component";
import {NewpartyComponent} from "../../pages/right-layout/newparty/newparty.component";
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {OrderDetailComponent} from "../../components/order-detail/order-detail.component";
import {NeworderComponent} from "../../pages/right-layout/neworder/neworder.component";

const modules = [
  HeaderComponent,
  SidebarComponent,
  DashboardComponent,
  OrdersComponent,
  PartiesComponent,
  NewpartyComponent,
  OrderDetailComponent,
  NeworderComponent
]

@NgModule({
  declarations: [
    ...modules
  ],
  imports: [
    CommonModule,
    NebularModule,
    RouterLink,
    ReactiveFormsModule
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
