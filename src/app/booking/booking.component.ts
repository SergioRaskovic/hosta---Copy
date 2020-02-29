import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  
 
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

  myFunction16() {
    var x = document.getElementById("plus16");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction17() {
    var x = document.getElementById("plus17");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction18() {
    var x = document.getElementById("plus18");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction19() {
    var x = document.getElementById("plus19");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }

  myFunction20() {
    var x = document.getElementById("plus20");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  myFunction21() {
    var x = document.getElementById("plus21");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
 

  myFunction22() {
    var x = document.getElementById("plus22");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  myFunction23() {
    var x = document.getElementById("plus23");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }

  myFunction24() {
    var x = document.getElementById("plus24");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }

  myFunction25() {
    var x = document.getElementById("plus25");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction26() {
    var x = document.getElementById("plus26");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
  myFunction27() {
    var x = document.getElementById("plus27");
    if (x.style.display === "block") {
      x.style.display = "none";
     
    } else {
      x.style.display = "block";
      
    }
  }
    
}
