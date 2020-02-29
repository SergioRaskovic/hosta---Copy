import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  latitude =45.328896;
  longitude = 14.299422;
  constructor() { }

  ngOnInit() {
  }

}
