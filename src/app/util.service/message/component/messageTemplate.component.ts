import { Component, Inject, OnInit } from "@angular/core";


export interface DialogData {
    title: string;
    body: string;
    type: number
}

@Component({
    selector: 'app-message',
    templateUrl: './messageTemplate.component.html'
})

export class MessageTemplateComponent  {

 //   ModelTemple : DialogData;

    //icoShow = 'sucess';

    constructor(
        ) {
           // this.ModelTemple = data;
    }


    

    onClick(): void {
       // this.dialogRef.close();
    }

    public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

}