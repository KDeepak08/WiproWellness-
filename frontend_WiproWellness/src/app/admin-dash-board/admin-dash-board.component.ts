import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrl: './admin-dash-board.component.css'
})
export class AdminDashBoardComponent {
  constructor(private router: Router) { }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']); // Navigate back to the login page
  }
}
