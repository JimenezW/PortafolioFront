import {EventEmitter, Injectable, Output} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

  import { MessageTemplateComponent } from './component/messageTemplate.component';
  
  
  
  @Injectable({ providedIn: 'root' })
  export class MessageGenericService {

   $modal = new EventEmitter<any>();

    constructor() { }
    
   aClickedEvent = new EventEmitter<string>();

    AClicked(msg: string) {
      this.aClickedEvent.emit(msg);
    }
    
  }