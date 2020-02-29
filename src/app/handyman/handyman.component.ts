import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-handyman',
  templateUrl: './handyman.component.html',
  styleUrls: ['./handyman.component.css']
})
export class HandymanComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

 
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1050px',
      height: '1500px'
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  myFunction37() {
    var x = document.getElementById("plus37");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction38() {
    var x = document.getElementById("plus38");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction39() {
    var x = document.getElementById("plus39");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
 
  myFunction40() {
    var x = document.getElementById("plus40");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }



}
