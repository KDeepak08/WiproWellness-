import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent {

  constructor( private router: Router) { }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']); // Navigate back to the login page
  }
  
}
