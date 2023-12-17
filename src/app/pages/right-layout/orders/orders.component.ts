import {Component, OnInit} from '@angular/core';
import { ImageConstants } from '../../../constants/image-constants';
import { NbDialogService } from '@nebular/theme';
import {OrderDetailComponent} from "../../../components/order-detail/order-detail.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordersList: any[] = [];

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit() {
    this.ordersList = [
      {
        'image': ImageConstants.imagePath.searchNotFound,
        'detail': 'Sample Detail',
        'date': new Date(),
        'party': {
          'party_name': 'Sridhar',
          'address': 'Salem, Salem',
          'gst': 'AABBDDCCDD2234'
        },
      },
      {
        'image': ImageConstants.imagePath.searchNotFound,
        'detail': 'Sample Detail text',
        'date': new Date(),
        'party': {
          'party_name': 'Sample',
          'address': 'Salem, Salem',
          'gst': 'AABBDDCCDD2234'
        },
      }
    ]
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
}
