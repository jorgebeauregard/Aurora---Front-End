import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  displayedColumns = ['sala', 'fecha', 'horaInicio', 'horaFinal', 'id'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '600px',
    });
  }

}

export interface Element {
  sala: string;
  id: number;
  fecha: string;
  horaInicio: string;
  horaFinal: string;
}

const ELEMENT_DATA: Element[] = [
  {sala: 'Sala 4', fecha: '13/03/18', horaInicio: '09:30', horaFinal: '09:30', id: 1,},
  {sala: 'Sala 3', fecha: '13/03/18', horaInicio: '09:30', horaFinal: '09:30', id: 2,},
  {sala: 'Sala 9', fecha: '13/03/18', horaInicio: '09:30', horaFinal: '09:30', id: 3,},
  {sala: 'Sala 2', fecha: '13/03/18', horaInicio: '09:30', horaFinal: '09:30', id: 4,},
  {sala: 'Sala 4', fecha: '13/03/18', horaInicio: '09:30', horaFinal: '09:30', id: 5,},
];
