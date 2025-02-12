import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrl: './patientlogin.component.css'
})
export class PatientloginComponent {

  
  username: string = '';
  password: string = '';
  role: string = 'PATIENT'; // Default role

  constructor(private loginService: AdminService, private router: Router) { }

  login() {
    this.loginService.login(this.username, this.password, this.role).subscribe(
      response => {
        // Handle successful login, e.g., store the token and navigate to a different page
        console.log('Login successful:', response);
        // localStorage.setItem('token', response.token);
        localStorage.setItem('token', response.token);
        this.router.navigate(['patientDashboard']); // Adjust the navigation as needed
      },
      error => {
        // Handle login error
        console.error('Login failed:', error);
        alert('Login failed: ' + error.error.message);
      }
    );
  }
}

