import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap'; // for importing bootstrap classes

import { ChartsModule } from 'ng2-charts'; //for importing charts

import  { BarChartComponent } from './bar-chart.component'


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    AlertModule.forRoot() //bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
