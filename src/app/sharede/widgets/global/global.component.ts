// import { Component } from '@angular/core';


// export class GlobalComponent {

// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pie',
  // templateUrl: './pie.component.html',
  // styleUrls: ['./pie.component.css']
// })
// export class PieComponent {

// }
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
    selector: 'app-widget-global',
    templateUrl: './global.component.html',
    styleUrls: ['./global.component.css']
  })
export class GlobalComponent implements OnInit {
  chartOptions = {};

  Highcharts = Highcharts;

 
  @Input()   data={};


  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Statistic  Inassurance  global'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'percentage',
        colorByPoint: true,
        data: this.data,
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}