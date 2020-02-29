import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1050px',
      height: '1500px'
    
    });
  }
}
