import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FirebaseCrudService } from 'src/app/services/firebase-crud/firebase-crud.service';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  quantity: string;
  size: string;
}

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent implements OnChanges {
  @Input() stockDetails: any;
  @Input() item: string | undefined;
  @Input() category: string | undefined;
  @Input() product: string | undefined;
  customColumn = 'size';
  defaultColumns = ['quantity'];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  editingRow: any = null;

  data: TreeNode<FSEntry>[] = [];

  constructor(private firebase: FirebaseCrudService) {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['stockDetails']) {
      // Handle the update logic
      this.data = changes['stockDetails'].currentValue;

      let updatedArray = changes['stockDetails'].currentValue.map((item: { size: string; quantity: string }) => ({
        data: {'size': item.size, 'quantity': item.quantity}
      }));

      this.data = updatedArray;
    }
  }

  openQuantityDialog(rowData: any) {
    this.editingRow = rowData;
  }

  saveQuantity(rowData: any, newValue: string) {
    rowData.quantity = newValue; // Update the quantity in the row
    this.editingRow = null; // Exit edit mode
  }

  incrementQuantity(rowData: any, value: number) {
    rowData.quantity = Number(rowData.quantity) + value;
  }

  decrementQuantity(rowData: any, value: number) {
    rowData.quantity = Number(rowData.quantity) - value;
  }

  handleTick() {
    const flattenedArray = this.data.map(item => item.data);
    this.firebase.updateDocument(this.item as string, this.category as string, { [this.product as string]: flattenedArray })
    this.editingRow = null;
  }
}
