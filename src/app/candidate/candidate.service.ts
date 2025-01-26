import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private apiUrl = 'https://votre-api.com/api/candidates';

  constructor(private http: HttpClient) {}

  getCandidatures(): Observable<any> {
    return this.http.get(`${this.apiUrl}/candidatures`);
  }

  submitApplication(applicationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/apply`, applicationData);
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  updateProfile(profileData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile`, profileData);
  }
}
