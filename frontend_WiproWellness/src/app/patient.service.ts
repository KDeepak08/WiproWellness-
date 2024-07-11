import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/addPatient`, patient);
  }
}
