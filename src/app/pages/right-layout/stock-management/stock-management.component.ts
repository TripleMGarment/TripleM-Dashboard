import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FirebaseCrudService } from 'src/app/services/firebase-crud/firebase-crud.service';
import { NbDialogService } from '@nebular/theme';
import { StockQuantityComponent } from 'src/app/components/stock-quantity/stock-quantity.component';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.scss']
})
export class StockManagementComponent implements OnInit {
  search: FormGroup;
  uniforms: any[] = [];
  itemsDropdown: string[] = [];
  categoryDropdown: string[] = [];
  productDropdown: string[] = [];
  categoryWithProduct: any[] = [];
  showNewProduct: boolean = false;
  showSpinner: boolean = false;
  stockTableData: { [key: string]: any } = [];

  constructor(
    private fb: FormBuilder,
    private firebase: FirebaseCrudService,
    private dialogService: NbDialogService
  ) {
    this.search = this.fb.group({
      item: new FormControl(""),
      category: new FormControl({value: '', disabled: true}),
      product: new FormControl({value: '', disabled: true})
    });
    this.search.get('item')?.valueChanges.subscribe(async value => {
      if (value && value.trim() !== '') {
        this.search.get('category')?.reset();
        this.search.get('product')?.reset();
        this.categoryDropdown = [];
        this.stockTableData = [];
        this.uniforms = [];
          await this.getDocuments(value);
        this.search.get('category')?.enable();
      } else {
        this.search.get('category')?.disable();
      }
    });
    this.search.get('category')?.valueChanges.subscribe(value => {
      if (value && value.trim() !== '') {
        this.search.get('product')?.reset();
        this.stockTableData = [];
        this.productDropdown = ['All',...this.getKeysForId(value)];
        this.search.get('product')?.enable();
      } else {
        this.search.get('product')?.disable();
      }
    });
    this.search.get('product')?.valueChanges.subscribe(value => {
      if (value && value.trim() !== '') {
        this.setStockTableData();
      }
    })
  }

  ngOnInit() {
    this.getStockItems();
  }

  getKeysForId(targetId: string): string[] {
    const category = this.categoryWithProduct.find(item => item.id === targetId);
  if (!category) return [];
  return category.keys
  }

  async getStockItems() {
    var items = this.firebase.getDocuments('Stock-Items');
    (await items).forEach((doc) => {
      this.itemsDropdown = doc.data()['Items'];
    });
  }

  async getDocuments(item: string) {
    var data = this.firebase.getDocuments(item);
    (await data).forEach((doc) => {
      this.uniforms.push({
        id: doc.id,
        ...doc.data()
      });
    });
    this.categoryDropdown = this.uniforms.map(item => item.id);
    this.categoryWithProduct = this.uniforms.map(item => {
      return {
        id: item.id,
        keys: Object.keys(item).filter(key => key !== 'id'),
      };
    });
  }

  setStockTableData() {
    const result = this.uniforms.reduce((acc, item) => {
      acc[item.id] = Object.entries(item).reduce<Record<string, any>>((itemAcc, [key, value]) => {
        if (key !== 'id') {
          itemAcc[key] = value;
        }
        return itemAcc;
      }, {});
      return acc;
    }, {} as Record<string, any>);
  
    if (this.search.get('product')?.value === 'All') {
    
      // Get the category value
      const category = this.search.get('category')?.value;
    
     this.stockTableData = result[this.search.get('category')?.value];
    } else {
      this.stockTableData = {
        [this.search.get('product')?.value]: 
          result[this.search.get('category')?.value][this.search.get('product')?.value]
      };
    }
  }

  openQuantityDialog() {
    this.dialogService
      .open(StockQuantityComponent, {
      })
  }
}
