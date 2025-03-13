import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJobPositionComponent } from './form-job-position.component';

describe('FormJobPositionComponent', () => {
  let component: FormJobPositionComponent;
  let fixture: ComponentFixture<FormJobPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormJobPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormJobPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
