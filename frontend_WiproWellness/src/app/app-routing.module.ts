import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AddPatientComponent } from './patient-register/patient-register.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AddDoctor1Component } from './Doctor1/add-doctor1/add-doctor1.component';
import { AddPatient1Component } from './Patient1/add-patient1/add-patient1.component';
import { GetAllDoctorsComponent } from './Doctor1/get-all-doctors/get-all-doctors.component';
import { PatientDashboardComponent } from './Patient1/patient-dashboard/patient-dashboard.component';
import { AddAppointmentComponent } from './Patient1/add-appointment/add-appointment.component';
import { DoctorDashboardComponent } from './Doctor1/doctor-dashboard/doctor-dashboard.component';
import { ViewAppointmentComponent } from './Patient1/view-appointment/view-appointment.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:LoginComponent},
  {path:'doctor', component:DoctorloginComponent},
  {path:'patient', component:PatientloginComponent},
  {path:'AdminRegister', component:AdminRegistrationComponent},
  {path:'PatientRegister', component:AddPatientComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'adminDashboard', component:AdminDashBoardComponent,
    children:[
      {path:'addDoctor1',component:AddDoctor1Component},
      {path:'addPatient',component:AddPatient1Component},
      {path:'AllDoctors',component:GetAllDoctorsComponent},
    ]
  },

  {path:'patientDashboard',component:PatientDashboardComponent,
    children:[
      {path:'addAppointment',component:AddAppointmentComponent},
     
    ]
  },
  {path:'doctorDashboard',component:DoctorDashboardComponent,
    children:[
      {path:'viewAppointment',component:ViewAppointmentComponent},
     
    ]
  },

  {path:'mainDashboard', component:LoginComponent,
    children: [
      {path:'doctor', component:DoctorloginComponent},
      {path:'patient', component:PatientloginComponent},
      {path:'AdminRegister', component:AdminRegistrationComponent},
      {path:'PatientRegister', component:AddPatientComponent},
      {path:'adminlogin', component:AdminloginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
