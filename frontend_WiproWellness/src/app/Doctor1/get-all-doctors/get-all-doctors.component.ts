import { Component } from '@angular/core';
import { Doctor } from '../../Entities/doctor';
import { AdminService } from '../../admin.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-all-doctors',
  templateUrl: './get-all-doctors.component.html',
  styleUrl: './get-all-doctors.component.css'
})
export class GetAllDoctorsComponent {
  doctors: Doctor[] = [];

  constructor(private doctorService:AdminService,private router: Router,) { }

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctorService.getAllDoctors().subscribe(
      (data: Doctor[]) => {
        this.doctors = data;
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  addPatient(doctorId: number) {
    // Navigate to a new patient form with doctorId as query parameter
    this.router.navigate(['/adminDashboard/addPatient'], { queryParams: { doctorId: doctorId } });
  }
}
