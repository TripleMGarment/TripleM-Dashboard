import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-stock-quantity',
  templateUrl: './stock-quantity.component.html',
  styleUrls: ['./stock-quantity.component.scss']
})
export class StockQuantityComponent {
  constructor(private dialogRef: NbDialogRef<StockQuantityComponent>) {
  }
  onClose() {
    this.dialogRef.close();
  }
}
