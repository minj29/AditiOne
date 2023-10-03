import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel1 } from './msps/msps_model';
@Injectable({
  providedIn: 'root'
})
export class MspsService {

  constructor(private http:HttpClient) { }

  //add employee
  addemployee(data:datamodel1){
    return this.http.post<datamodel1>("http://192.168.29.134:8080/create",data);
  }

  //get employee
  getemployee(){
    return this.http.get<datamodel1[]>("http://192.168.29.134:8080/");
  }

  //delete
  deleteemployee(id:number){
    return this.http.delete<datamodel1>("http://192.168.29.134:8080/vms/"+id);
  }

  //fetch data
  fetchdata(id:number){
    return this.http.get<datamodel1[]>("http://192.168.29.134:8080/get/"+id);
  }

  //update data
  updateemployee(data:datamodel1,id:number){
    return this.http.put<datamodel1>("http://192.168.29.134:8080/update/"+id,data);
  }
}


