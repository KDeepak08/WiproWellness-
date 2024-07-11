import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.css'
})
export class PatientDashboardComponent {
  constructor(private router: Router) { }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']); // Navigate back to the login page
  }
}
