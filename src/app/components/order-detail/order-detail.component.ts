import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailComponent implements OnInit{
  @Input() orderDetail: any;
  constructor(private dialogRef: NbDialogRef<OrderDetailComponent>) {
  }

  ngOnInit() {

  }

  onClose() {
    this.dialogRef.close();
  }
}
