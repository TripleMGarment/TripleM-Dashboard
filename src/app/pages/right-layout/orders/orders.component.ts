import {Component, Input, OnInit} from '@angular/core';
import { ImageConstants } from '../../../constants/image-constants';
import { NbDialogService } from '@nebular/theme';
import {OrderDetailComponent} from "../../../components/order-detail/order-detail.component";
import {FirebaseCrudService} from "../../../services/firebase-crud/firebase-crud.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordersList: any[] = [];
  list: any[] = [];
  searchOrder: FormGroup;
  searchNotFound: boolean = false;
  protected readonly ImageConstants = ImageConstants;
  showSpinner: boolean = false;
  partyIdFromRoute: string | undefined;

  constructor(private dialogService: NbDialogService, private firebase: FirebaseCrudService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.searchOrder = this.fb.group({
      searchValue: new FormControl("")
    });
    this.searchOrder.valueChanges.subscribe(data => {
      if (data.length === 0) this.ordersList = this.list;
      else {
        this.searchOrderList(data);
      }
    });
  }

  ngOnInit() {
    this.showSpinner = true;
    this.partyIdFromRoute = this.route?.snapshot?.params['id']

    if (this.partyIdFromRoute === undefined) {
      this.getDocuments();
    } else {
      this.getDocumentsById(this.partyIdFromRoute);
    }
  }

  async getDocuments() {
    var data = this.firebase.getDocuments('Orders');
    this.ordersList = (await data).docs.map(doc => doc.data());
    (await data).forEach((doc) => {
    });
    this.ordersList.forEach((data) => {
      const party = this.firebase.getDocumentById('Parties', 'id', data.PartyId);
      party.then(partyData => {
        data.PartyId = partyData[0];
      })
    })
    this.list = this.ordersList;
    this.showSpinner = false;
  }

  getDocumentsById(routeId: string) {
    const party = this.firebase.getDocumentById('Parties', 'id', routeId);
    party.then(partyData => {
      const order = this.firebase.getDocumentById('Orders', 'PartyId', routeId);
      order.then(orderData => {
        orderData.forEach((eachOrder: any) => {
          eachOrder.PartyId = partyData[0]
        })
        this.ordersList = orderData;
        this.list = this.ordersList;
        this.showSpinner = false;
      })
    })
  }

  openOrderDetail(order: any) {
    this.dialogService
      .open(OrderDetailComponent, {
        context: {
          orderDetail: order,
        }
      })
  }

  searchOrderList(data: { [x: string]: any; }) {
    this.ordersList = [];
    this.list.forEach((order) => {
      if (order['Order detail'].toLowerCase().includes(data['searchValue'])) {
        this.ordersList.push(order);
      }
      this.searchNotFound = false;
    })
    if (this.ordersList.length === 0) {
      this.searchNotFound = true;
    }
  }
}
