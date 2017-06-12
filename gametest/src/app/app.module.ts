import { SfsService } from './sfs.service';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { Game2Component } from './game2/game2.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game/:username', component: GameComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    Game2Component,
    GameComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService,SfsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
