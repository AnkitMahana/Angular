import { Component } from '@angular/core';
import {DataService} from './data/data.service';
import {IData} from './data/data';
import {IBarChartData} from './data/barChartData';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent{
 
  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  error: any;
  data_downld_time : number[] = [];
  data_cleaning_time : number[] = [];
  data_processing_time : number[] = [];
  // barChartData: any[] = [
  //   {
  //     data: [], 
  //     label: ''
  //   }
  // ];
  
  data : any[];

  barChartType:string = 'bar';
  barChartLabels:string[] = ['Time1','Time2','Time3','Time4','Time5','Time6','Time7','Time8','Time9','Time10'];
  barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [100, 120, 0, 190, 110, 180, 0, 200, 150, 110], label: 'Data Download'},
    {data: [150, 200, 0, 220, 150, 180, 0, 150, 180, 150], label: 'Data Cleaning'},
    {data: [100, 150, 0, 250, 100, 120, 0, 190, 120, 115],label:'Data Processing'}
  ];

  // constructor(private _dataService : DataService){}
  //   ngOnInit() : void {
  //   this._dataService.getData().then(data1 => {
  //              console.log("Data" +data1);
  //              this.setData(data1);
  //            }).catch(error => this.error = error);  
  // }


/*
Set Data
*/
// setData(data : IData[]) {

//   for(let d of data){
//      this.data_downld_time.push(Object.assign({}, d.data_download_time));
//      this.data_cleaning_time.push(Object.assign({},d.data_cleaning_time));
//      this.data_processing_time.push(Object.assign({},d.data_processing_time));
//   }
  
//   console.log("Data Download Time" + this.data_downld_time);
//   console.log("Data Cleaning Time" + this.data_cleaning_time);
//   console.log("Data Processing Time" + this.data_processing_time);
//   this.setBarChartData(this.data_downld_time, this.data_cleaning_time, this.data_processing_time);
// }

/*
Set BarChartData
*/
// setBarChartData(download_time, cleaning_time, processing_time) {
//   //Insert Data
//    this.data.push(Object.assign({}, 
//          { data: [1,2,3],
//           label: 'Data Download Time'
//          }
//           )
//      );
    
//     console.log("BarChart Data" + this.data);            
//     // Set the chart data
//    this.barChartData   = this.data;
//    console.log("BarChart Data" + this.barChartData);
   // this.barChartData.data = download_time;
   // this.barChartData.label = " Data Download Time";
   // console.log("BarChart Data" + this.barChartData);
   // this.barChartDataList.push(Object.assign({}, this.barChartData));
   // console.log("BarchartDataList" + this.barChartDataList);

   // this.barChartData.data = cleaning_time;
   // this.barChartData.label = "Cleaning Time";
   // console.log("Bar chart data cleaning time:"+ this.barChartData.label);
   // this.barChartData.data.push(Object.assign({}, cleaning_time));

   // this.barChartData.data = processing_time;
   // this.barChartData.label = "Processing Time";
   // this.barChartData.data.push(Object.assign({}, processing_time));

   
}

