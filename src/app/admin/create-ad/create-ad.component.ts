// src/app/admin/create-ad.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
})
export class CreateAdComponent {
  
  adForm: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.adForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      academicYear: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.adForm.valid) {
      this.adminService.createAd(this.adForm.value).subscribe(
        response => {
          console.log('Annonce créée avec succès', response);
          // Réinitialiser le formulaire ou rediriger l'utilisateur
          this.adForm.reset();
        },
        error => console.error('Erreur lors de la création de l\'annonce', error)
      );
    }
  }
}
