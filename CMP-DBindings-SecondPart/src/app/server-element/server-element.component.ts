import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //  ViewEncapsulation.None Don't provide any template or style encapsulation
//  ViewEncapsulation.ShadowDom or the DOM this means using modern Shadow DOM and creating a ShadowRoot for Component's Host Element.
  encapsulation: ViewEncapsulation.Emulated //Default option
})
export class ServerElementComponent implements OnInit {
  @Input('svrElement') 
  element: {
    type:string,
    name: string,
    content: string
  };
  constructor() { }

  ngOnInit(): void {
  }

}
