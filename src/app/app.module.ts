import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanComponent } from './components/loan/loan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
