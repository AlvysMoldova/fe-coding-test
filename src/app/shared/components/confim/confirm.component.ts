import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({  
    selector: 'confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {
  public submit: any;
  public message: string;

  constructor(private modalRef: BsModalRef) {

  }

  public onSubmit() {
    this.submit(true);
    this.modalRef.hide();
  }

  public onClose() {
    this.submit(false);
    this.modalRef.hide();
  }
}