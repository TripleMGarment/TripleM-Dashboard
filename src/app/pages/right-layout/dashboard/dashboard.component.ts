import {Component, OnInit} from '@angular/core';
import {FirebaseCrudService} from "../../../services/firebase-crud/firebase-crud.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  topBar: any[] = [];
  partiesList: any[] = [];
  ordersList: any[] = [];
  dashboardList: any[] = [];
  showSpinner: boolean = false;

  constructor(private firebase: FirebaseCrudService, private _router: Router) {
  }
  async ngOnInit() {
    this.showSpinner = true;
    this.partiesList = await this.getDocuments('Parties');
    this.ordersList = await this.getDocuments('Orders');

    this.topBar = [
      {
        'key': 'Parties',
        'value': this.partiesList.length,
        'route': '/parties'
      },
      {
        'key': 'Orders',
        'value': this.ordersList.length,
        'route': '/orders'
      }
    ]

    this.partiesList.forEach((party) => {
      var PartiesOrder = {
        party: party,
        order: []
      };
      this.ordersList.forEach((order) => {
        if (order.PartyId === party.id) {
          // @ts-ignore
          PartiesOrder.order.push(order)
        }
      })
      this.dashboardList.push(PartiesOrder);
    })
    this.showSpinner = false;
  }

  async getDocuments(collectionName: string) {
    const data = this.firebase.getDocuments(collectionName);
    return (await data).docs.map(doc => doc.data());
  }

  navigateToOrders(dataFromDasboard: any) {
    this._router.navigate(['orders', dataFromDasboard.party.id])
  }
}
