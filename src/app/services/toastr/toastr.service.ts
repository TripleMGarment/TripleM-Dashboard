import { Injectable } from '@angular/core';
import {
  NbToastrService,
  NbGlobalPhysicalPosition,
  NbDuplicateToastBehaviour,
} from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(private toastrService: NbToastrService) {}
  positions = NbGlobalPhysicalPosition;
  option: NbDuplicateToastBehaviour = 'previous';

  showWarningToast(message: string) {
    this.toastrService.show(message, 'Warning', {
      destroyByClick: true,
      duplicatesBehaviour: this.option,
      duration: 3000,
      hasIcon: false,
      icon: { icon: 'alert-triangle', pack: 'eva' },
      limit: 3,
      position: this.positions.TOP_RIGHT,
      preventDuplicates: true,
      status: 'warning',
      toastClass: '',
    });
  }

  showSuccessToast(message: string) {
    this.toastrService.show(message, 'Success', {
      destroyByClick: true,
      duplicatesBehaviour: this.option,
      duration: 3000,
      hasIcon: true,
      icon: { icon: 'checkmark', pack: 'eva' },
      limit: 3,
      position: this.positions.TOP_RIGHT,
      preventDuplicates: true,
      status: 'success',
      toastClass: '',
    });
  }

  showDangerToast(message: string) {
    this.toastrService.show(message, 'Error', {
      destroyByClick: true,
      duplicatesBehaviour: this.option,
      duration: 3000,
      hasIcon: false,
      icon: { icon: 'close-square-outline', pack: 'eva' },
      limit: 3,
      position: this.positions.TOP_RIGHT,
      preventDuplicates: true,
      status: 'danger',
      toastClass: ''
    });
  }
}
