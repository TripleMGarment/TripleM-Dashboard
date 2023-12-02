import { Component } from '@angular/core';
import { ImageConstants } from '../../constants/image-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  protected readonly ImageConstants = ImageConstants;
}
