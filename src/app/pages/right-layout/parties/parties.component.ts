import {Component, OnInit} from '@angular/core';
import {FirebaseCrudService} from "../../../services/firebase-crud/firebase-crud.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { ImageConstants } from '../../../constants/image-constants';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {
  partiesList: any[] = [];
  list: any[] = [];
  searchParty: FormGroup;
  searchNotFound: boolean = false;
  protected readonly ImageConstants = ImageConstants;
  showSpinner: boolean = false;

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
    this.showSpinner = true;
    this.getDocuments();
  }

  async getDocuments() {
    var data = this.firebase.getDocuments('Parties');
    this.partiesList = (await data).docs.map(doc => doc.data());
    console.log(data);
    (await data).forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    this.list = this.partiesList;
    this.showSpinner = false;
  }

  searchPartyList(data: { [x: string]: any; }) {
    this.partiesList = [];
    this.list.forEach((party) => {
      if (party['Name'].toLowerCase().includes(data['searchValue'])) {
        this.partiesList.push(party);
      }
      this.searchNotFound = false;
    })
    if (this.partiesList.length === 0) {
      this.searchNotFound = true;
    }
  }
}
