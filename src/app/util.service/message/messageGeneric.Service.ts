import {
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageTemplateComponent } from './component/messageTemplate.component';



@Injectable({ providedIn: 'root' })
export class MessagueGenericService {
  constructor(private dialog : MatDialog) { }
  
  message(modalTitle: string, modalBody: string, modalType : number = 1) {
    this.dialog.open(MessageTemplateComponent, {
      width : '350px',
      disableClose : true,
      data : { title : modalTitle, body : modalBody, type : modalType }
    });
  }

  closeModal() {

  }

  confirm() {
  }
}