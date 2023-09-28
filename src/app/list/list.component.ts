import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  totalLength:any;
  page:number=1;

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }



  employeeform!: FormGroup;
  // data: undefined|datamodel[];
  data: datamodel[] = [];
  constructor(private formbuider:FormBuilder,private api:ApiService){}

  ngOnInit(): void {
    this.employeeform = this.formbuider.group({
      name: ['',Validators.required],
      client_id: ['',Validators.required],
      msp_id: ['',Validators.required],
      created_at: ['',Validators.required],
      updated_at: ['',Validators.required],
      deleted_at: ['',Validators.required],
    })
    this.getemployee();
  }

  addemployee(data: datamodel) {
    //console.log(data);
    this.api.addemployee(data).subscribe((res=>{
      this.employeeform.reset();
      this.getemployee();
    }))
   
  }

  getemployee(){
    this.api.getemployee().subscribe(res=>{
      this.data=res;
    })
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.api.deleteemployee(id).subscribe((res) => {
        this.getemployee();
        // After successfully deleting the employee, you can reload the data or remove the deleted item from the array.
        // For example, you can call this.loadData() to refresh the employee list.
      });
    }
  }

  

}
