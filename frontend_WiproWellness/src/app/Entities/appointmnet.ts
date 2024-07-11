export interface Appointment {
    id?: number; // Optional id, as it might not be present when booking a new appointment
    doctorId: number;
    patientId: number;
    doctorName: string;
    time: string;
    date: string;
    previousAppointMent?: string; // Optional field
    status?: string; // Optional field
  }
  