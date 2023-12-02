import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-newparty',
  templateUrl: './newparty.component.html',
  styleUrls: ['./newparty.component.scss']
})
export class NewpartyComponent implements OnInit {
  newPartyForm: FormGroup; // Holds the value of the form inputs

  constructor(private fb: FormBuilder) {
    this.newPartyForm = this.fb.group({
      partnerName: new FormControl(""),
      partnerAddress: new FormControl(""),
      partnerGst: new FormControl(""),
    });
    this.newPartyForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }
}
