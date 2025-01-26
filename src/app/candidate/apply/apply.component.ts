import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent {
  applyForm: FormGroup;

  constructor(private fb: FormBuilder, private candidateService: CandidateService) {
    this.applyForm = this.fb.group({
      title: ['', Validators.required],
      cv: ['', Validators.required],
      motivationLetter: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.applyForm.valid) {
      this.candidateService.submitApplication(this.applyForm.value).subscribe({
        next: () => alert('Candidature soumise avec succès !'),
        error: (err) => console.error('Erreur lors de la soumission', err),
      });
    }
  }
}
