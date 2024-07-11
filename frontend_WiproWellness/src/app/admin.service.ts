import { Injectable } from '@angular/core';
import { AdminDto } from './admin-dto';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from './Entities/doctor';
import { Patient } from './Entities/patient';
import { Appointment } from './Entities/appointmnet';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8081/admin';

  private apiUrl1 = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  addAdmin(admin: AdminDto): Observable<AdminDto> {

    return this.http.post<AdminDto>(`${this.apiUrl}/addAdmin`, admin);
  }

  login(username: string, password: string, role: string): Observable<any> {
    const body = { username, password, role };
    return this.http.post<any>(`${this.apiUrl1}/login`, body);
  }


  addDoctor(doctor: Doctor): Observable<Doctor> {
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<Doctor>(`${this.apiUrl1}/doctor/adddoctor`, doctor, { headers });
  }
  addPatient(patient: Patient): Observable<Patient> {
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<Patient>(`${this.apiUrl1}/patient/addPatient`, patient, { headers });
  }

  getAllDoctors(): Observable<Doctor[]> {
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<Doctor[]>(`${this.apiUrl1}/doctor/getAllDoctors`, { headers });

  }
  bookAppointment(appointment: Appointment): Observable<Appointment> {
    // let tokenStr='Bearer '+localStorage.getItem('token*);
    // const headers=new HttpHeaders () -set('Authorization', tokenStr);
    return this.http.post<Appointment>(`${this.apiUrl1}/appointment/book`, appointment);
  }

  getAllAppointments(doctorId: number, date: string): Observable<Appointment[]> {
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<Appointment[]>(`${this.apiUrl1}/appointment/allAppointment/${doctorId}/${date}`, { headers });
  }

  viewAppointment(patientId: number): Observable<Appointment> {
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<Appointment>(`${this.apiUrl1}appointment/viewAppointment/${patientId}`, { headers });
  }

  cancelAppointment(patientId: number): Observable<void> {
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete<void>(`${this.apiUrl1}appointment/cancel/${patientId}`, { headers });
  }
}

