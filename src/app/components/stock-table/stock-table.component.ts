import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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
  customColumn = 'size';
  defaultColumns = ['quantity'];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  data: TreeNode<FSEntry>[] = [];

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
}
