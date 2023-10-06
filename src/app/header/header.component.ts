import { Component ,EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;


  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
// <--------country dropdown action------->
isDropdownOpen: boolean = false;
selectedCountryImage: string = '/assets/india.jpg'; // Default selected country image

countries = [
  { name: 'India', image: '/assets/india.jpg' },
  { name: 'USA', image: '/assets/usa.jpg' }
  // Add more countries as needed
];

toggleDropdown(event: Event) {
  event.stopPropagation();
  this.isDropdownOpen = !this.isDropdownOpen;
}

selectCountry(event: Event ,country: any) {
  event.stopPropagation();
  this.selectedCountryImage = country.image;
  this.isDropdownOpen = false;
  // You can perform any additional actions when a country is selected here
  console.log(`Selected country: ${country.name}`);
}
}
