import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent {
  @Input() sideNavStatus: boolean = false;
  
  list = [
    {
      number:'1',
      name:'dashboard',
      icon:'fa-solid fa-gauge-high',
    },
    {
      number:'2',
      name:'my query',
      icon:'fa-solid fa-circle-question',
    },
    {
      number:'3',
      name:'compsheet',
      icon:'fa-solid fa-calculator',
    },
    {
      number:'4',
      name:'org chart',
      icon:'fa-solid fa-code-branch',
    },
    {
      number:'5',
      name:'reports',
      icon:'fa-solid fa-chart-pie',
    },
  ];

}
