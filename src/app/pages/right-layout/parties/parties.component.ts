import {Component, OnInit} from '@angular/core';
import {FirebaseCrudService} from "../../../services/firebase-crud/firebase-crud.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {
  partiesList: any[] = [];
  list: any[] = [];
  searchParty: FormGroup;

  constructor(private firebase: FirebaseCrudService, private fb: FormBuilder) {
    this.searchParty = this.fb.group({
      searchValue: new FormControl("")
    });
    this.searchParty.valueChanges.subscribe(data => {
      if (data.length === 0) this.partiesList = this.list;
      else {
        this.searchPartyList(data);
      }
    });
  }
  ngOnInit() {
    this.getDocuments();
  }

  async getDocuments() {
    var data = this.firebase.getDocuments('Parties');
    this.partiesList = (await data).docs.map(doc => doc.data());
    this.list = this.partiesList;
  }

  searchPartyList(data: { [x: string]: any; }) {
    this.partiesList = [];
    this.list.forEach((party) => {
      if (party['Name'].toLowerCase().includes(data['searchValue'])) {
        this.partiesList.push(party);
      }
    })
    if (this.partiesList.length === 0) {
      console.log("list 0");
    }
  }
}
