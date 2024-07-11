import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Appointment } from '../../Entities/appointmnet';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrl: './view-appointment.component.css'
})
export class ViewAppointmentComponent implements OnInit {

  appointments: Appointment[] = [];
  doctorId: number=0;
  date: string='';

  constructor(private appointmentService: AdminService, private router: Router) { }

  ngOnInit(): void {
    // Replace with your actual doctorId and date logic to fetch appointments
    this.doctorId = 123; // Example doctorId
    this.date = '2024-07-15'; // Example date
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAllAppointments(this.doctorId, this.date).subscribe(
      (data: Appointment[]) => {
        this.appointments = data;
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }

  viewAppointment(patientId: number): void {
    this.router.navigate(['/viewAppointment', patientId]);
  }

  cancelAppointment(patientId: number): void {
    this.appointmentService.cancelAppointment(patientId).subscribe(
      (response: string) => {
        console.log('Appointment canceled successfully:', response);
        // Optionally, update the UI or navigate to another route upon cancellation
      },
      error => {
        console.error('Error canceling appointment:', error);
        // Handle error cases, such as displaying an error message to the user
      }
    );
  }}
