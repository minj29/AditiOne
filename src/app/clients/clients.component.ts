import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../clients.service';
import { datamodel2 } from './clients_model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
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
  data: datamodel2[] = [];
  constructor(private formbuider:FormBuilder,private clients:ClientsService){}

  ngOnInit(): void {
    this.employeeform = this.formbuider.group({
      name: ['',Validators.required],
      organization_id: ['',Validators.required],
      region_id: ['',Validators.required],
      rule_id: ['',Validators.required],
      margin_share: ['',Validators.required],
      created_at: ['',Validators.required],
      updated_at: ['',Validators.required],
      deleted_at: ['',Validators.required],
    })
    this.getemployee();
  }

  addemployee(data: datamodel2) {
    //console.log(data);
    this.clients.addemployee(data).subscribe((res=>{
      this.employeeform.reset();
      this.getemployee();
    }))
   
  }

  getemployee(){
    this.clients.getemployee().subscribe(res=>{
      this.data=res;
    })
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.clients.deleteemployee(id).subscribe((res) => {
        this.getemployee();
      });
    }
  }

}
