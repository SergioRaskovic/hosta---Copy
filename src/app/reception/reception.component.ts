import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1050px',
      height: '1500px'
    
    });
  }
  
  myFunction41() {
    var x = document.getElementById("plus41");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  myFunction42() {
    var x = document.getElementById("plus42");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
 

  myFunction43() {
    var x = document.getElementById("plus43");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  myFunction44() {
    var x = document.getElementById("plus45");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }

  myFunction45() {
    var x = document.getElementById("plus45");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction46() {
    var x = document.getElementById("plus46");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }

  myFunction47() {
    var x = document.getElementById("plus47");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction48() {
    var x = document.getElementById("plus48");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction49() {
    var x = document.getElementById("plus49");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction50() {
    var x = document.getElementById("plus50");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction51() {
    var x = document.getElementById("plus51");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }

  myFunction52() {
    var x = document.getElementById("plus52");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  myFunction53() {
    var x = document.getElementById("plus53");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
 

  myFunction54() {
    var x = document.getElementById("plus54");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

}
