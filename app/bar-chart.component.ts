import { Component , OnInit} from '@angular/core';
import {DataService} from './data/data.service';
import {IData} from './data/data';
@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit{
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  constructor(private _dataService : DataService){
  }
  data: IData[];
  ngOnInit() : void {
    this._dataService.getData()
             .then(data => this.data = data);
  }


  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:IData[] = this.data;
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
}