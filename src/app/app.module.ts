import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavPatientComponent } from './nav-patient/nav-patient.component';
import { NavAuthComponent } from './nav-auth/nav-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPatientComponent,
    NavAuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
