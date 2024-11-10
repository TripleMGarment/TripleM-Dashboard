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
import {SignupComponent} from "../../pages/signup/signup.component";
import {SigninComponent} from "../../pages/signin/signin.component";
import { StockManagementComponent } from 'src/app/pages/right-layout/stock-management/stock-management.component';
import { StockQuantityComponent } from 'src/app/components/stock-quantity/stock-quantity.component';
import { StockTableComponent } from 'src/app/components/stock-table/stock-table.component';
import { NbTreeGridModule } from '@nebular/theme';

const modules = [
  HeaderComponent,
  SidebarComponent,
  DashboardComponent,
  OrdersComponent,
  PartiesComponent,
  NewpartyComponent,
  OrderDetailComponent,
  NeworderComponent,
  SignupComponent,
  SigninComponent,
  StockManagementComponent,
  StockQuantityComponent,
  StockTableComponent
]

@NgModule({
  declarations: [
    ...modules
  ],
  imports: [
    CommonModule,
    NebularModule,
    RouterLink,
    ReactiveFormsModule,
    NbTreeGridModule,
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
