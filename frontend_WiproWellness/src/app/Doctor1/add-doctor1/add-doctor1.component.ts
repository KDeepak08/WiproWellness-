import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { Doctor } from '../../Entities/doctor';

@Component({
  selector: 'app-add-doctor1',
  templateUrl: './add-doctor1.component.html',
  styleUrl: './add-doctor1.component.css'
})
export class AddDoctor1Component  {
  doctorForm: FormGroup;

  constructor(private fb: FormBuilder, private doctorService: AdminService) {
    this.doctorForm = this.fb.group({
      name: [''],
      speciality: [''],
      experience: [''],
      qualification: [''],
      designation: [''],
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    const doctor: Doctor = this.doctorForm.value;
    this.doctorService.addDoctor(doctor).subscribe(
      response => {
        console.log('Doctor added successfully', response);
        // Optionally, reset the form after successful submission
        this.doctorForm.reset();
      },
      error => {
        console.error('Error adding doctor', error);
      }
    );
  }
}