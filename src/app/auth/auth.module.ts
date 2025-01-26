import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Pour les formulaires réactifs
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RecoveryComponent], // Déclarez ici le composant RecoveryComponent
  imports: [
    CommonModule,
    ReactiveFormsModule, // Obligatoire pour les formulaires réactifs
    MatFormFieldModule,  // Obligatoire pour <mat-form-field> et <mat-error>
    MatInputModule,      // Obligatoire pour <matInput>
    MatButtonModule,     // Obligatoire pour les boutons
    MatIconModule,       // Optionnel, pour des icônes si nécessaire
  ],
})
export class AuthModule {}
