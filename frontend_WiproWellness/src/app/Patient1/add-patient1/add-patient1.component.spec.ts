import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatient1Component } from './add-patient1.component';

describe('AddPatient1Component', () => {
  let component: AddPatient1Component;
  let fixture: ComponentFixture<AddPatient1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPatient1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatient1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
