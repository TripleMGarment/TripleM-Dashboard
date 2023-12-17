import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.scss']
})
export class NeworderComponent {
  newOrderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newOrderForm = this.fb.group({
      orderDetail: new FormControl(""),
      orderDate: new FormControl(""),
      image: new FormControl(""),
      partyName: new FormControl("")
    });
  }

  addOrder() {
    console.log(this.newOrderForm);
  }
}
