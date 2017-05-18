import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Angular2SocialLoginModule } from "motu-angular2-social-login"

let providers = {
    "google": {
      "clientId": "687691751177-ci9uc038n0vrleet1qreqhq2n3jcns1a.apps.googleusercontent.com"
    },
    "facebook": {
      "clientId": "1868134046772255",
      "apiVersion": "v2.8" //like v2.4 
    }
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2SocialLoginModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


Angular2SocialLoginModule.loadProvidersScripts(providers);