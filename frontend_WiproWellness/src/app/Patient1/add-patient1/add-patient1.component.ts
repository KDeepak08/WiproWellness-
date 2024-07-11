import { Component, OnInit } from '@angular/core';
import { Patient } from '../../Entities/patient';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-patient1',
  templateUrl: './add-patient1.component.html',
  styleUrl: './add-patient1.component.css'
})
export class AddPatient1Component implements OnInit  {

  patient: Patient = {
    id: 0,
    fullName: '',
    dateOfBirth: '',
    contactNumber: '',
    symptoms: '',
    patientInformation: '',
    gender: '',
    username: '',
    password: '',
    doctor: {
      id:0
    }
    
  };
  
  constructor(private adminService: AdminService, private router: Router, private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.patient.doctor.id =Number(params['doctorId']);
      console.log('Doctor ID from URL:',this.patient.doctor.id);
      // Implement your logic here to handle the retrieved doctorId
    });
  
  }

  onSubmit() {
    console.log(this.patient)
    this.adminService.addPatient(this.patient).subscribe(
      (response: Patient) => {
        console.log('Patient added successfully:', response);
        // Optionally, navigate to another route upon successful submission
        this.router.navigate(['/AllPatients']); // Adjust the navigation as needed
      },
      error => {
        console.error('Error adding patient:', error);
        // Handle error cases, such as displaying an error message to the user
      }
    );
  }

}
