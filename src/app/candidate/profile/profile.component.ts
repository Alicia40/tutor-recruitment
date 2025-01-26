import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private candidateService: CandidateService) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      photo: [''],
    });
  }

  ngOnInit(): void {
    this.candidateService.getProfile().subscribe({
      next: (data) => this.profileForm.patchValue(data),
      error: (err) => console.error('Erreur lors du chargement du profil', err),
    });
  }

  onSave(): void {
    if (this.profileForm.valid) {
      this.candidateService.updateProfile(this.profileForm.value).subscribe({
        next: () => alert('Profil mis à jour avec succès !'),
        error: (err) => console.error('Erreur lors de la mise à jour', err),
      });
    }
  }
}
