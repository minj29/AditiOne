import { Component, OnInit } from '@angular/core';
import { Chart }from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit{
ngOnInit(): void {
  new Chart("myChart", {
    type: 'line',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
      datasets: [{
        label: 'Daily Logins',
        data: [12, 19, 3, 5, 2, 3, 2],
        backgroundColor:[
          'rgba(255,99,132,0.2)',
          'rgba(255,105,99,0.2)',
          'rgba(255,132,132,0.2)',
        ],
        borderWidth: 1
      },
      {
        label: 'Monthly Login',
        data: [2, 22, 3, 12, 2, 6, 3],
        backgroundColor:[
          'rgba(64,224,208,0.2)',
          'rgba(235,105,89,0.2)',
          'rgba(235,132,132,0.2)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        
      }
    }
  });
}
}
