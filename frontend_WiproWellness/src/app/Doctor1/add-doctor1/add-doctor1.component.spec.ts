import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctor1Component } from './add-doctor1.component';

describe('AddDoctor1Component', () => {
  let component: AddDoctor1Component;
  let fixture: ComponentFixture<AddDoctor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDoctor1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDoctor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
