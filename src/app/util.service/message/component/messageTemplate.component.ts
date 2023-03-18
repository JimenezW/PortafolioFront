import { Component, Input, OnInit } from "@angular/core";
import { MessageGenericService } from "../messageGeneric.Service";


export interface DialogData {
    title: string;
    body: string;
    type: number
}

@Component({
    selector: 'app-message',
    templateUrl: './messageTemplate.component.html'
})

export class MessageTemplateComponent implements OnInit {
  public visible = false;

  constructor(private _modaService : MessageGenericService){
    
  }

  ngOnInit(): void {
    this._modaService.aClickedEvent.subscribe((t)=>{
      this.visible = true;
    });
  }
 
  @Input() Titulo : string = '';

   

  toggleLiveDemo() {
    this._modaService.$modal.emit(false);
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

}