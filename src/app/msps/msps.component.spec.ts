import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSPSComponent } from './msps.component';

describe('MSPSComponent', () => {
  let component: MSPSComponent;
  let fixture: ComponentFixture<MSPSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MSPSComponent]
    });
    fixture = TestBed.createComponent(MSPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
