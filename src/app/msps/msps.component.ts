import { Component, EventEmitter, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MspsService } from '../msps.service';
import { datamodel1 } from '../msps/msps_model';
import { RowCountService } from '../row-count.service';

@Component({
  selector: 'app-msps',
  templateUrl: './msps.component.html',
  styleUrls: ['./msps.component.css']
})
export class MSPSComponent {
  totalLength:number=0;
  page:number=1;

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }



  employeeform!: FormGroup;
  // data: undefined|datamodel[];
  data1: datamodel1[] = [];
  constructor(private formbuider:FormBuilder,private msps:MspsService,private rowCountService: RowCountService){}

  ngOnInit(): void {
    this.employeeform = this.formbuider.group({
      name: ['',Validators.required],
      created_at: ['',Validators.required],
      updated_at: ['',Validators.required],
      deleted_at: ['',Validators.required],
    })
    this.getemployee();
    this.updateRowCount();
  }

  private updateRowCount() {
    const rowCount = this.data1.length;
    this.rowCountService.setRowCount(rowCount);
  }

  // countemployee(){
  //   this.msps.countemployee().subscribe(res=>{
  //     this.data1=res;
  //     console.log("The total count is"+ this.data1)
  //   })
  // }

  addemployee(data1: datamodel1) {
    //console.log(data);
    this.msps.addemployee(data1).subscribe((res=>{
      this.employeeform.reset();
      this.getemployee();
    }))
   
  }

  getemployee(){
    this.msps.getemployee().subscribe(res=>{
      this.data1=res;
    })
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.msps.deleteemployee(id).subscribe((res) => {
        this.getemployee();
      });
    }
  }
}


