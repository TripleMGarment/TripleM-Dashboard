import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/right-layout/dashboard/dashboard.component";
import {OrdersComponent} from "./pages/right-layout/orders/orders.component";
import {PartiesComponent} from "./pages/right-layout/parties/parties.component";
import {NewpartyComponent} from "./pages/right-layout/newparty/newparty.component";
import {NeworderComponent} from "./pages/right-layout/neworder/neworder.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {SigninComponent} from "./pages/signin/signin.component";
import {AuthGuard} from "./services/authentication/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      showSidebar: false,
    },
  },
  {
    path: 'login',
    component: SigninComponent,
    data: {
      showSidebar: false,
    },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      showSidebar: true,
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'parties',
    component: PartiesComponent,
    data: {
      showSidebar: true,
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'new-party',
    component: NewpartyComponent,
    data: {
      showSidebar: true,
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: {
      showSidebar: true,
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'orders/:id',
    component: OrdersComponent,
    data: {
      showSidebar: true,
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'new-order',
    component: NeworderComponent,
    data: {
      showSidebar: true,
    },
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
