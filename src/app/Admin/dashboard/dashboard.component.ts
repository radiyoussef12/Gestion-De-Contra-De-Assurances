import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  bigChart = {};
  cards = [];
    pieChart ={};




  constructor(   private dataApi : DataService){ 

   }
  ngOnInit(): void {
 
     this.bigChart= this.dataApi.bigChart(); 
     this.pieChart = this.dataApi.pieChart();
  }
 
}
