import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
  newServerName = '';
  newServerContent = '';
  ngOnInit() {}
  onAddServer(nameInput) {
    console.log(nameInput.value);
    
    this.serverCreated.emit({
      serverName:  nameInput.value !== '' ? nameInput.value : 'Server Name',
      serverContent: this.newServerContent !== '' ? this.newServerContent : 'Server Content',
    });
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      serverName:  nameInput.value !== '' ? nameInput.value  : 'Server Name',
      serverContent: this.newServerContent !== '' ? this.newServerContent : 'Server Content',
    });
  }
}
