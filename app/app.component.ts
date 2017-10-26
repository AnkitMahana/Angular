import { Component , OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {IData} from './data/data';
import {DataService} from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'Process Monitor';
  
  constructor(private _dataService : DataService){
  }
  data: IData[];
  ngOnInit() : void {
  	this._dataService.getData()
  	         .then(data => this.data = data);
  }
}
