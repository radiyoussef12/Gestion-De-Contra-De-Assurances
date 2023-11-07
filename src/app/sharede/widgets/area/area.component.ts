// import { Component } from '@angular/core';

// @Component({
  // selector: 'app-widget-area',
  // templateUrl: './area.component.html',
  // styleUrls: ['./area.component.css']
// })
// export class AreaComponent {

// }
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions!: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions =
 {

      title: {
          text: 'insurance statistics in morocco, 2018-2023',
          align: 'left'
      },
  
      subtitle: {
          text: 'Source: <a href="https://www.bing.com/ck/a?!&&p=cc197d1d31ee2ecdJmltdHM9MTY4MTk0ODgwMCZpZ3VpZD0wNGY1ZDc3MC0xMzljLTYzMjgtMDkwMS1jNzliMTI1YjYyMTcmaW5zaWQ9NTE1NA&ptn=3&hsh=3&fclid=04f5d770-139c-6328-0901-c79b125b6217&psq=statistique+inassurance+wekipidya&u=a1aHR0cHM6Ly9mci53aWtpcGVkaWEub3JnL3dpa2kvQXNzdXJhbmNl&ntb=1" target="_blank">IREC</a>',
          align: 'left'
      },
  
      yAxis: {
          title: {
              text: 'Number of pepoel',
              
          }
      },
  
      xAxis: {
          accessibility: {
              rangeDescription: 'Range: 2013 to 2023'
          }
      },
  
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
  
      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2013
          }
      },
  
      series: [{
          name: 'Life',
          data: [43934, 48656, 65165, 81827, 112143, 142383,
              171533, 165174, 155157, 161454, 154610]
      }, {
          name: 'Hail',
          data: [24916, 37941, 29742, 29851, 32490, 30282,
              38121, 36885, 33726, 34243, 31050]
      }, {
          name: 'Strom',
          data: [11744, 30000, 16005, 19771, 20185, 24377,
              32147, 30912, 29243, 29213, 25663]
      }, {
          name: 'Fire',
          data: [null, null, null, null, null, null, null,
              null, 11164, 11218, 10077]
      }, {
          name: 'Other',
          data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
              17300, 13053, 11906, 10073]
      }],
  
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
  
  }
  //     { chart: {
  //       type: 'area'
  //     },
  //     title: {
  //       text: 'Random DATA'
  //     },
  //     subtitle: {
  //       text: 'Demo'
  //     },
  //     tooltip: {
  //       split: true,
  //       valueSuffix: ' millions'
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     exporting: {
  //       enabled: true,
  //     },
  //     series: this.data
  //   };
  //   HC_exporting(Highcharts);
  //   setTimeout(() => {
  //     window.dispatchEvent(
  //       new Event('resize')
  //     );
  //   }, 300);
  // }

}
}