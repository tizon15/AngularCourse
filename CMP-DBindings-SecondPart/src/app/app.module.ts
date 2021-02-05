import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [AppComponent, ServerElementComponent, CockpitComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
