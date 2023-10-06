import { Component } from '@angular/core';
import { MspsService } from '../msps.service';
import { datamodel1 } from '../msps/msps_model';
import { ApiService } from '../api.service';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  mspsCount!: number;
  vmsCount!:number;
  clientsCount!:number;
  constructor(private mspsService: MspsService, private apiservice:ApiService, private clientService:ClientsService ) {}

  ngOnInit() {
    this.mspsService.countemployee().subscribe((count) => {
      this.mspsCount = count;
      console.log("the total count is "+ this.mspsCount);
    });

    this.apiservice.countemployee().subscribe((count) => {
      this.vmsCount = count;
      console.log("the total count is "+ this.vmsCount);
    });

    this.clientService.countemployee().subscribe((count) => {
      this.clientsCount = count;
      console.log("the total count is "+ this.clientsCount);
    });
  }
}
