import { Component } from '@angular/core';
import { AdminDto } from '../admin-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrl: './admin-registration.component.css'
})
export class AdminRegistrationComponent {
  adminForm: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.adminForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    const admin: AdminDto = this.adminForm.value;
    this.adminService.addAdmin(admin).subscribe(
      response => {
        console.log('Admin added successfully', response);
      },
      error => {
        console.error('Error adding admin', error);
      }
    );
  }
}

