import { Component, OnInit } from '@angular/core';

@Component({
  /*
  * The '[]' makes the selector as an attribute
  * selector: '[app-servers]',
  */
  /* 
  * Put a dot before makes the selector as a class
  * selector: '.app-servers',
   */
  selector: 'app-servers',
  template: `
   <app-server></app-server>
   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
