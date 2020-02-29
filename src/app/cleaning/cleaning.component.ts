import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.css']
})
export class CleaningComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1050px',
      height: '1500px'
    
    });
  }
  myFunction28() {
    var x = document.getElementById("plus28");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction29() {
    var x = document.getElementById("plus29");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }

  myFunction30() {
    var x = document.getElementById("plus30");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  myFunction31() {
    var x = document.getElementById("plus31");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
 

  myFunction32() {
    var x = document.getElementById("plus32");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  myFunction33() {
    var x = document.getElementById("plus33");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }

  myFunction34() {
    var x = document.getElementById("plus34");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }

  myFunction35() {
    var x = document.getElementById("plus35");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction36() {
    var x = document.getElementById("plus36");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  
}
