import {Component, OnInit} from '@angular/core';
import { ImageConstants } from '../../../constants/image-constants';
import { NbDialogService } from '@nebular/theme';
import {OrderDetailComponent} from "../../../components/order-detail/order-detail.component";
import {FirebaseCrudService} from "../../../services/firebase-crud/firebase-crud.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

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

  constructor(private dialogService: NbDialogService, private firebase: FirebaseCrudService, private fb: FormBuilder) {
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
    this.getDocuments();
  }

  async getDocuments() {
    var data = this.firebase.getDocuments('Orders');
    this.ordersList = (await data).docs.map(doc => doc.data());
    console.log(data);
    (await data).forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
    });
    this.ordersList.forEach((data) => {
      console.log(data.PartyId);
      const party = this.firebase.getDocumentById('Parties', 'id', data.PartyId);
      party.then(partyData => {
        console.log(partyData);
        data.PartyId = partyData;
      })
    })
    console.log(this.ordersList);
    this.list = this.ordersList;
    console.log(this.ordersList);
    this.showSpinner = false;
  }

  openOrderDetail(order: any) {
    console.log(order);
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
