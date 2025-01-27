import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Application {
  id: number;
  status: string;
  // autres propriétés
}

interface Announcement {
  id: number;
  title: string;
  content: string;
  // autres propriétés
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  getAllApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.baseUrl}/applications`).pipe(
      catchError(this.handleError)
    );
  }

  getAllAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseUrl}/announcements`).pipe(
      catchError(this.handleError)
    );
  }

  updateApplicationStatus(applicationId: number, status: string): Observable<Application> {
    const url = `${this.baseUrl}/applications/${applicationId}`;
    const body = { status };
    return this.http.put<Application>(url, body).pipe(
      catchError(this.handleError)
    );
  }

  manageAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.http.post<Announcement>(`${this.baseUrl}/announcements`, announcement).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    // Log l'erreur ou effectue une action appropriée
    console.error('Une erreur est survenue', error);
    return throwError('Une erreur est survenue, veuillez réessayer plus tard.');
  }
}
