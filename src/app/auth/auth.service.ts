import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://votre-api.com/api/auth'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Vérifie si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; // Retourne vrai si un token est présent
  }

  // Vérifie si l'utilisateur est un administrateur
  isAdmin(): boolean {
    const userRole = localStorage.getItem('userRole');
    return userRole === 'admin';
  }

  // Inscription de l'utilisateur
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Connexion de l'utilisateur
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Déconnexion de l'utilisateur
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    alert('Vous êtes déconnecté.');
  }

  // Stocke les informations après connexion
  storeUserData(token: string, role: string): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userRole', role);
  }

  // Récupère le rôle de l'utilisateur connecté
  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  
