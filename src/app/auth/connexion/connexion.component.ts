import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  loginForm: FormGroup; // Formulaire de connexion
  errorMessage: string = ''; // Message d'erreur pour affichage

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router // Service de navigation pour redirection
  ) {
    // Initialisation du formulaire avec des validateurs
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Méthode pour gérer la soumission du formulaire de connexion
  onLogin(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.authService.login(credentials).subscribe({
        next: (response) => {
          const { token, role } = response; // Récupère le token et le rôle depuis la réponse API
          this.authService.storeUserData(token, role);

          if (role === 'admin') {
            alert('Connexion réussie ! Bienvenue, Administrateur.');
            this.router.navigate(['/admin/dashboard']); // Redirige vers l'espace admin
          } else if (role === 'candidate') {
            alert('Connexion réussie ! Bienvenue, Candidat.');
            this.router.navigate(['/candidate/dashboard']); // Redirige vers l'espace candidat
          } else {
            alert('Connexion réussie, mais rôle non reconnu.');
            this.router.navigate(['/']); // Redirige vers la page d'accueil par défaut
          }
        },
        error: (err) => {
          console.error('Erreur de connexion:', err);
          this.errorMessage = 'Erreur de connexion. Veuillez vérifier vos informations.';
        },
      });
    } else {
      this.errorMessage = 'Veuillez remplir correctement tous les champs.';
    }
  }
}
