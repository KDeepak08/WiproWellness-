import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../Entities/appointmnet';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent implements OnInit {

  appointment: Appointment = {
    doctorId: 0,
    patientId: 0,
    doctorName: '',
    time: '',
    date: '',
    previousAppointMent: '',
    status: ''
  };

  constructor(
    private appointmentService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.appointment.doctorId = 1;
      Number(params['doctorId']);
      this.appointment.patientId = 506;
      // Number(params['patientId']);
      // You can remove this if you want to manually enter the doctorName
      // this.appointment.doctorName = params['doctorName'];
    });
  }

  onSubmit() {
    this.appointmentService.bookAppointment(this.appointment).subscribe(
      (response: Appointment) => {
        console.log('Appointment booked successfully:', response);
       // this.router.navigate(['/appointments']); // Adjust the navigation as needed
      },
      error => {
        console.error('Error booking appointment:', error);
      }
    );
  }}