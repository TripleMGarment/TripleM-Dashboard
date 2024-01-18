import {Component, OnInit} from '@angular/core';
import {FirebaseCrudService} from "../../../services/firebase-crud/firebase-crud.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { ImageConstants } from '../../../constants/image-constants';
import {ToastrService} from "../../../services/toastr/toastr.service";
import {ToastrConstants} from "../../../constants/toastr-constants";
import { read, utils } from 'xlsx';
import {Guid} from "guid-typescript";

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

  constructor(private firebase: FirebaseCrudService, private fb: FormBuilder, private toastrService: ToastrService) {
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
    (await data).forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
    });
    this.list = this.partiesList;
    this.showSpinner = false;
  }

  deleteDocument(data: any) {
    const orderList = this.firebase.getDocumentById('Orders', 'PartyId', data.id);
    orderList.then((value) => {
      if (value.length === 0) {
        this.firebase.deleteDocument('Parties','id', data.id)
          .then(() => {
            this.toastrService.showSuccessToast(ToastrConstants.toastrSuccessMessage.partyDelete);
            this.showSpinner = true;
            this.getDocuments();
          })
          .catch((error) => {
            this.toastrService.showDangerToast(ToastrConstants.toastrFailureMessage.partyDelete);
          });
      } else {
        this.toastrService.showWarningToast(ToastrConstants.toastrWarningMessage.partyDelete);
      }
    })
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

  handleImport($event: any) {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);

          rows.forEach((party: any) => {
            var data = {
              Name: party.Name,
              Address: party.Address,
              GST: party['GST Number'],
              id: Guid.create()['value']
            }
            this.firebase.createDocument('Parties',data);
            this.toastrService.showSuccessToast(ToastrConstants.toastrSuccessMessage.newParty);
          })
        }
      }
      reader.readAsArrayBuffer(file);
      this.getDocuments();
    }
  }
}
