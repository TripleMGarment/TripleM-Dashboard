import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FirebaseCrudService} from "../../../services/firebase-crud/firebase-crud.service";
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import {GlobalService} from "../../../services/global.service";

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.scss']
})
export class NeworderComponent implements OnInit{
  newOrderForm: FormGroup;
  partiesList: any[] = [];
  private readonly storage: Storage = inject(Storage);
  orderImage: any;
  showSpinner: boolean = false;

  constructor(private fb: FormBuilder, private firebase: FirebaseCrudService, private globalService: GlobalService) {
    this.newOrderForm = this.fb.group({
      orderDetail: new FormControl(""),
      orderDate: new FormControl(""),
      image: new FormControl(""),
      partyName: new FormControl("")
    });
    this.newOrderForm.valueChanges.subscribe( data => {
      console.log(this.newOrderForm.value);
    })
  }

  addOrder() {
    this.showSpinner = true;
    console.log(this.newOrderForm);
    var fileName, formatedDate: string | undefined;
    this.partiesList.forEach((party) => {
      if (party['id'] === this.newOrderForm.get('partyName')?.value) {
        fileName = party.Name;
        return;
      }
    })
    formatedDate = this.globalService.formatDate(this.newOrderForm.get('orderDate')?.value)
    fileName = 'orders/' + fileName + '-' + formatedDate;
    const url = this.firebase.pushFileToStorage(this.orderImage, fileName);
    url.then(imageURL => {
      console.log(imageURL)
      var data = {
        'Order detail': this.newOrderForm.get('orderDetail')?.value,
        Date: formatedDate,
        ImageURL: imageURL,
        PartyId: this.newOrderForm.get('partyName')?.value
      }
      this.firebase.createDocument('Orders',data);
      this.newOrderForm.reset();
      this.showSpinner = false;
    });
  }

  onOrderImageUploaded(event: any) {
    this.orderImage = event.target.files[0];
  }

  ngOnInit() {
    this.getDocuments();
  }

  async getDocuments() {
    var data = this.firebase.getDocuments('Parties');
    this.partiesList = (await data).docs.map(doc => doc.data());
    console.log(this.partiesList);
  }
}
