import {Component, OnInit} from '@angular/core';
import { ImageConstants } from '../../constants/image-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  protected readonly ImageConstants = ImageConstants;
  userAuthDetail: any;

  ngOnInit() {
    this.userAuthDetail = JSON.parse(localStorage.getItem('user')!);
  }
}
