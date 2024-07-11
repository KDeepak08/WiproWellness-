import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AddPatientComponent,  } from './patient-register/patient-register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PatientsignupComponent } from './patientsignup/patientsignup.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { AppointmentformComponent } from './appointmentform/appointmentform.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDoctor1Component } from './Doctor1/add-doctor1/add-doctor1.component';
import { AddPatient1Component } from './Patient1/add-patient1/add-patient1.component';
import { GetAllDoctorsComponent } from './Doctor1/get-all-doctors/get-all-doctors.component';
import { PatientDashboardComponent } from './Patient1/patient-dashboard/patient-dashboard.component';
import { AddAppointmentComponent } from './Patient1/add-appointment/add-appointment.component';
import { ViewAppointmentComponent } from './Patient1/view-appointment/view-appointment.component';
import { DoctorDashboardComponent } from './Doctor1/doctor-dashboard/doctor-dashboard.component';
import { DoctorLoginComponent } from './Doctor1/doctor-login/doctor-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminRegistrationComponent,
    AddPatientComponent,
    DoctorComponent,
    AppoinmentComponent,
    MedicalRecordsComponent,
    LoginComponent,
    HomePageComponent,
    PatientloginComponent,
    DoctorloginComponent,
    AdminloginComponent,
    PatientsignupComponent,
    DoctorsignupComponent,
    AppointmentformComponent,
    AdminDashBoardComponent,
    AddDoctor1Component,
    AddPatient1Component,
    GetAllDoctorsComponent,
    PatientDashboardComponent,
    AddAppointmentComponent,
    ViewAppointmentComponent,
    DoctorDashboardComponent,
    DoctorLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
