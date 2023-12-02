import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {
  partiesList: any[] = [];

  ngOnInit() {
    this.partiesList = [
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'gst': "22AAAAA0000A1Z5"
      }
    ]
  }
}
