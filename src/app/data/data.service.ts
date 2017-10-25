import { Injectable } from '@angular/core';
import { IData } from './data';
@Injectable()
export class DataService{
	
	getData():IData[] {
	return [
  {init_time:1508806800000,data_download_time:100,data_cleaning_time:150,data_processing_time:100,data_size:3,row_count:5000,status:"success"},
  {"init_time":1508814000000,"data_download_time":120,"data_cleaning_time":200,"data_processing_time":150,"data_size":3.5,"row_count":9700,"status":"success"},
  {"init_time":1508821200000,"data_download_time":0,"data_cleaning_time":0,"data_processing_time":0,"data_size":0,"row_count":9700,"status":"failed"},
  {"init_time":1508832000000,"data_download_time":190,"data_cleaning_time":220,"data_processing_time":250,"data_size":4.5,"row_count":14080,"status":"success"},
  {"init_time":1508842800000,"data_download_time":110,"data_cleaning_time":150,"data_processing_time":100,"data_size":3,"row_count":19679,"status":"success"},
  {"init_time":1508850000000,"data_download_time":180,"data_cleaning_time":180,"data_processing_time":120,"data_size":4.1,"row_count":23679,"status":"success"},
  {"init_time":1508857200000,"data_download_time":0,"data_cleaning_time":0,"data_processing_time":0,"data_size":0,"row_count":23679,"status":"failed"},
  {"init_time":1508868000000,"data_download_time":200,"data_cleaning_time":150,"data_processing_time":190,"data_size":3.7,"row_count":27679,"status":"success"},
  {"init_time":1508875200000,"data_download_time":150,"data_cleaning_time":180,"data_processing_time":120,"data_size":3.5,"row_count":32789,"status":"success"},
  {"init_time":1508882400000,"data_download_time":110,"data_cleaning_time":150,"data_processing_time":115,"data_size":3,"row_count":37898,"status":"success"}];
	}
}