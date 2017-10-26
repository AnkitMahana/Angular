import { Injectable } from '@angular/core';
import { IData } from './data';
//import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/map';

@Injectable()
export class DataService{
	private _dataUrl = 'http://13.229.75.64:8084/log';

	constructor(private _http: Http){}

	getData(): Promise<IData[]>{
	return this._http.get(this._dataUrl).toPromise().then(response => response.json().result as IData[])
	.catch(this.handleError);
 }

 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}