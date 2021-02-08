import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated')
  blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput')
  serverContentInput: ElementRef;
  ngOnInit() {}
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName:  nameInput.value !== '' ? nameInput.value : 'Server Name',
      serverContent: this.serverContentInput.nativeElement.value !== '' ? this.serverContentInput.nativeElement.value : 'Server Content',
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:  nameInput.value !== '' ? nameInput.value  : 'Server Name',
      serverContent: this.serverContentInput.nativeElement.value !== '' ? this.serverContentInput.nativeElement.value : 'Server Content',
    });
  }
}
