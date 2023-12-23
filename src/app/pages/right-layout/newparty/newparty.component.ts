import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FirebaseCrudService} from "../../../services/firebase-crud/firebase-crud.service";
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-newparty',
  templateUrl: './newparty.component.html',
  styleUrls: ['./newparty.component.scss']
})
export class NewpartyComponent implements OnInit {
  newPartyForm: FormGroup; // Holds the value of the form inputs

  constructor(private fb: FormBuilder, private firebase: FirebaseCrudService) {
    this.newPartyForm = this.fb.group({
      partyName: new FormControl(""),
      partyAddress: new FormControl(""),
      partyGst: new FormControl(""),
    });
  }

  addParty() {
    if (this.newPartyForm.valid) {
      var data = {
        Name: this.newPartyForm?.get('partyName')?.value,
        Address: this.newPartyForm?.get('partyAddress')?.value,
        GST: this.newPartyForm?.get('partyGst')?.value,
        id: Guid.create()['value']
      }
      this.firebase.createDocument('Parties',data);
      this.newPartyForm.reset();
    } else {

    }
  }

  ngOnInit() {
  }
}
