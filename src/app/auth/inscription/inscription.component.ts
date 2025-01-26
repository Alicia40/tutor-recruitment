import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {
  registrationForm: FormGroup; // Formulaire d'inscription
  errorMessage: string = ''; // Message d'erreur à afficher à l'utilisateur

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Initialisation du formulaire
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
    });
  }

  // Méthode pour soumettre le formulaire
  onRegister(): void {
    if (this.registrationForm.valid) {
      const { email, confirmEmail, ...userData } = this.registrationForm.value;

      if (email !== confirmEmail) {
        this.errorMessage = 'Les adresses e-mail ne correspondent pas.';
        return;
      }

      // Appel au service d'inscription
      this.authService.register(userData).subscribe({
        next: () => {
          alert('Inscription réussie ! Veuillez vérifier votre email pour activer votre compte.');
          this.registrationForm.reset(); // Réinitialisation du formulaire
        },
        error: (err: any) => {
          console.error('Erreur d\'inscription', err);
          this.errorMessage = 'Erreur d\'inscription. Veuillez réessayer plus tard.';
        },
      });
    } else {
      this.errorMessage = 'Veuillez remplir correctement tous les champs.';
    }
  }
}
