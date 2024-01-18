import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FirebaseCrudService} from "../../../services/firebase-crud/firebase-crud.service";
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import {GlobalService} from "../../../services/global.service";
import {ToastrService} from "../../../services/toastr/toastr.service";
import {ToastrConstants} from "../../../constants/toastr-constants";
import {Guid} from "guid-typescript";

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

  constructor(private fb: FormBuilder,
              private firebase: FirebaseCrudService,
              private globalService: GlobalService,
              private toastrService: ToastrService
  ) {
    this.newOrderForm = this.fb.group({
      orderDetail: new FormControl(""),
      orderDate: new FormControl(""),
      image: new FormControl(""),
      partyName: new FormControl(""),
      orderDescription: new FormControl("")
    });
    this.newOrderForm.valueChanges.subscribe( data => {
    })
  }

  addOrder() {
    this.showSpinner = true;
    var fileName, formatedDate: string | undefined;
    if (this.newOrderForm.valid) {
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
        var data = {
          'Order detail': this.newOrderForm.get('orderDetail')?.value,
          'Order description': this.newOrderForm.get('orderDescription')?.value,
          Date: formatedDate,
          ImageURL: imageURL,
          PartyId: this.newOrderForm.get('partyName')?.value,
          id: Guid.create()['value']
        }
        this.firebase.createDocument('Orders',data);
        this.toastrService.showSuccessToast(ToastrConstants.toastrSuccessMessage.newOrder);
        this.newOrderForm.reset();
        this.showSpinner = false;
      });
    } else {
      this.toastrService.showDangerToast(ToastrConstants.toastrFailureMessage.newOrder);
    }
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
  }
}
