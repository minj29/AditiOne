import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  {path:'graph', component:GraphComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'list',component:ListComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
