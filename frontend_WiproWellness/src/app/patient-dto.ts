export interface Doctor {
    id: number;
    name: string;
    specialization: string;
  }
  
  export interface MedicalReports {
    id: number;
    reportDetails: string;
    date: string;
  }
  
  export interface Patient {
    id: number;
    fullName: string;
    dateOfBirth: string;
    contactNumber: string;
    symptoms: string;
    patientInformation: string;
    gender: string;
    doctor: Doctor;
    status: string;
    medicalReports: MedicalReports;
    role: string;
    appointmentDate: string;
    username: string;
    password: string;
  }
  