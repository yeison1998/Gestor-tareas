import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWorkManagementComponent } from './form-work-management.component';

describe('FormWorkManagementComponent', () => {
  let component: FormWorkManagementComponent;
  let fixture: ComponentFixture<FormWorkManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWorkManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWorkManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
