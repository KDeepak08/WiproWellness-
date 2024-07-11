import { Component } from '@angular/core';
import { Patient } from '../patient-dto';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrl: './patient-register.component.css'
})
export class AddPatientComponent {
  patient: Patient = {
    id: 0,
    fullName: '',
    dateOfBirth: '',
    contactNumber: '',
    symptoms: '',
    patientInformation: '',
    gender: '',
    doctor: { id: 0, name: '', specialization: '' },
    status: '',
    medicalReports: { id: 0, reportDetails: '', date: '' },
    role: 'ROLE_PATIENT',
    appointmentDate: '',
    username: '',
    password: ''
  };

  constructor(private patientService: PatientService) { }

  addPatient() {
    this.patientService.addPatient(this.patient).subscribe(response => {
      console.log('Patient added successfully', response);
    }, (error: any) => {
      console.error('Error adding patient', error);
    });
  }
}
