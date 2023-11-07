// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-card',
  // templateUrl: './card.component.html',
  // styleUrls: ['./card.component.css']
// })
// export class CardComponent {

// }
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  label!: string;
  @Input()
  total!: string;
  @Input()
  percentage!: string;
  @Input() data = [];

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 0
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
        name: 'Ocean transport',
        data: [0, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
    }, {
        name: 'Households',
        data: [0, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

    }, {
        name: 'Agriculture and hunting',
        data: [0, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
    }, {
        name: 'Air transport',
        data: [0, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

    }, {
        name: 'Construction',
        data: [0, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
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