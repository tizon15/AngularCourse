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
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName !== '' ? this.newServerName : 'Server Name',
      serverContent: this.newServerContent !== '' ? this.newServerContent : 'Server Content',
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName !== '' ? this.newServerName : 'Server Name',
      serverContent: this.newServerContent !== '' ? this.newServerContent : 'Server Content',
    });
  }
}
