import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  getAllApplications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/applications`);
  }

  getAllAnnouncements(): Observable<any> {
    return this.http.get(`${this.baseUrl}/announcements`);
  }

  updateApplicationStatus(applicationId: number, status: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/applications/${applicationId}`, { status });
  }

  manageAnnouncement(announcement: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/announcements`, announcement);
  }
}
