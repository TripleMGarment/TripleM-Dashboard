import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
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
