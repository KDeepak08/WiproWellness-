import { Component } from '@angular/core';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointmentform',
  templateUrl: './appointmentform.component.html',
  styleUrl: './appointmentform.component.css'
})
export class AppointmentformComponent {

  appointments: Appointment;
  constructor() {
    // Creating an Appointment object
    this.appointments = {
    
      doctorId: 101,
      patientId: 201,
      doctorName: 'Dr. Smith',
      time: '10:00 AM',
      date: '2024-07-10',
      previousAppointment: '2024-06-15',
      status: 'Confirmed'
    };
  }

}
