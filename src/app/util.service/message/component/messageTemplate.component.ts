import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

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

    ModelTemple : DialogData;

    //icoShow = 'sucess';

    constructor(
        private dialogRef: MatDialogRef<MessageTemplateComponent>,
        @Inject(MAT_DIALOG_DATA) private data: DialogData) {
            this.ModelTemple = data;
    }

    iconColor() : string{
        let color = '';

        switch(this.ModelTemple.type){
            case 2:
                color = '#EAE122'
                break;
            case 3:
                color = '#FF2D00'
                break;
            default:
                color = '#16A338';
                break;
        }
        return color;
    }
    

    onClick(): void {
        this.dialogRef.close();
    }

}