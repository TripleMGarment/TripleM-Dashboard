import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  topBar: any[] = [];
  partiesList: any[] = [];

  ngOnInit() {
    this.topBar = [
      {
        'key': 'Parties',
        'value': 50,
        'route': '/parties'
      },
      {
        'key': 'Orders',
        'value': 190,
        'route': '/orders'
      }
    ]
    this.partiesList = [
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      },
      {
        'party_name': "Sridhar",
        'address': "Salem, Salem",
        'total_orders': "200"
      }
    ]
  }
}
