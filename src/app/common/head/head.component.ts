import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Input() pageTitle:string ="No Title"; //This is how you give the header what you wanna call each webpage title

  constructor() { }

  ngOnInit(): void {
  }

}
