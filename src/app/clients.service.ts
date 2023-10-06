import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel2 } from './clients/clients_model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }
   //add employee
   addemployee(data:datamodel2){
    return this.http.post<datamodel2>("http://192.168.29.134:8080/create",data);
  }

  //get employee
  getemployee(){
    return this.http.get<datamodel2[]>("http://192.168.29.134:8080/");
  }

  //delete
  deleteemployee(id:number){
    return this.http.delete<datamodel2>("http://192.168.29.134:8080/vms/"+id);
  }

  //fetch data
  fetchdata(id:number){
    return this.http.get<datamodel2[]>("http://192.168.29.134:8080/get/"+id);
  }

  //update data
  updateemployee(data:datamodel2,id:number){
    return this.http.put<datamodel2>("http://192.168.29.134:8080/update/"+id,data);
  }

   //count employee
   countemployee(): Observable<number> {
    return this.http.get<{ count: number }>("http://192.168.29.134:8080/count")
      .pipe(
        map(response => response.count)
      );
  }
}


