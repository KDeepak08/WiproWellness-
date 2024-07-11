// patient.ts (or patient.model.ts)

export interface Patient {
    id?: number; // Optional id, as it might not be present when adding a new patient
    fullName: string;
    dateOfBirth: string;
    contactNumber: string;
    symptoms: string;
    patientInformation: string;
    gender: string;
    username: string;
    password: string;
    role?: string; // Optional role, depending on your application's requirements
    // Other properties as needed
    doctor:{
        id:number;
    };
    
  }
  
  