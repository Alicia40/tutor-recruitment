// admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  createAd(adData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ads`, adData);
  }

  getCandidatesByAd(adId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/candidates/${adId}`);
  }

  validateApplication(applicationId: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/applications/${applicationId}`, { status });
  }
}
