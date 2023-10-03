import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { MSPSComponent } from './msps/msps.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path:'graph', component:GraphComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'list',component:ListComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'msps',component:MSPSComponent},
  {path:'clients',component:ClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
