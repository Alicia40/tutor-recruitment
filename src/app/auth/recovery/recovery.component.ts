import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css'],
})
export class RecoveryComponent {
  recoveryForm: FormGroup; // Formulaire de récupération
  errorMessage: string = ''; // Message d'erreur
  successMessage: string = ''; // Message de succès

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Initialisation du formulaire avec des validateurs
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Méthode pour soumettre le formulaire de récupération
  onReset(): void {
    if (this.recoveryForm.valid) {
      const { email } = this.recoveryForm.value;

      // Appel au service pour effectuer la récupération
      this.authService.recoverPassword({ email }).subscribe({
        next: () => {
          this.successMessage = 'Un lien de réinitialisation a été envoyé à votre email.';
          this.errorMessage = '';
          this.recoveryForm.reset(); // Réinitialise le formulaire après succès
        },
        error: (err: any) => {
          console.error('Erreur de réinitialisation', err);
          this.errorMessage = 'Erreur de réinitialisation. Veuillez vérifier votre email.';
          this.successMessage = '';
        },
      });
    } else {
      this.errorMessage = 'Veuillez entrer une adresse email valide.';
      this.successMessage = '';
    }
  }
}
