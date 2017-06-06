import { SfsService } from './sfs.service';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Game2Component } from './game2/game2.component';

@NgModule({
  declarations: [
    AppComponent,
    Game2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService,SfsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
