import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './list/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //add employee
  addemployee(data:datamodel){
    return this.http.post<datamodel>("http://192.168.29.30:8080/create",data);
  }

  //get employee
  getemployee(){
    return this.http.get<datamodel[]>("http://192.168.29.30:8080/");
  }

  //delete
  deleteemployee(id:number){
    return this.http.delete<datamodel>("http://192.168.29.30:8080/vms/"+id);
  }

  //fetch data
  fetchdata(id:number){
    return this.http.get<datamodel[]>("http://192.168.29.30:8080/get/"+id);
  }

  //update data
  updateemployee(data:datamodel,id:number){
    return this.http.put<datamodel>("http://192.168.29.30:8080/update/"+id,data);
  }
}
