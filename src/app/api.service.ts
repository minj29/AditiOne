import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './list/model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //add employee
  addemployee(data:datamodel){
    return this.http.post<datamodel>("http://192.168.29.134:8080/create",data);
  }

  //get employee
  getemployee(){
    return this.http.get<datamodel[]>("http://192.168.29.134:8080/");
  }

  //delete
  deleteemployee(id:number){
    return this.http.delete<datamodel>("http://192.168.29.134:8080/vms/"+id);
  }

  //fetch data
  fetchdata(id:number){
    return this.http.get<datamodel[]>("http://192.168.29.134:8080/get/"+id);
  }

  //update data
  updateemployee(data:datamodel,id:number){
    return this.http.put<datamodel>("http://192.168.29.134:8080/update/"+id,data);
  }

   //count employee
   countemployee(): Observable<number> {
    return this.http.get<{ count: number }>("http://192.168.29.134:8080/count")
      .pipe(
        map(response => response.count)
      );
  }
}
