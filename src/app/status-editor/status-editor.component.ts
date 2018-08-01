import { Component, OnInit ,Inject,Input} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatSlideToggle,MatAutocompleteModule,MatInputModule,} from '@angular/material';
import { Power, Weapon,Character,statblock } from '../Power';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-status-editor',
  templateUrl: './status-editor.component.html',
  styleUrls: ['./status-editor.component.css']
})
export class StatusEditorComponent {

  animal: string;
  name: string;
  @Input() character: Character;
  @Input() stats: statblock;
  myControl: FormControl = new FormControl();
  
  fieldArray: Array<any> = [];
  newAttribute: any = {};

  options = [
    'One',
    'Two',
    'Three'
   ];


   EffectTypes = [
    {
      name: 'Ongoing',
      effects: [
        { value: 'fire', viewValue: 'Fire' },
        { value: 'ice', viewValue: 'Ice' },
        { value: 'thunder', viewValue: 'Thunder' },
        { value: 'poison', viewValue: 'Poison' },
        { value: 'lightning', viewValue: 'Lightning' },
        { value: 'other', viewValue: 'Other' },
      ]
    },
    {
      name: 'Status',
      effects: [
        { value: 'stun', viewValue: 'Stunned' },
        {value: 'daze', viewValue: 'Dazed' },
        { value: 'slow', viewValue: 'Slowed' },
        { value: 'imobile', viewValue: 'Immobilized' },
        { value: 'restran', viewValue: 'Restrained' },
    ]
    },
   

  ];


  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
  constructor(public dialog: MatDialog) {}

  openDialog(title: string, val: string): void {
    
    console.log(val);
    console.log(this.stats[val].value);

    let dialogRef = this.dialog.open(StatusEditorComponentDialog, {
      width: '250px',
      data: { name: title, stat: this.stats[val].value, }
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      this.stats[val].value  = result;
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'status-editor-dialog.html',
})
export class StatusEditorComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<StatusEditorComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
