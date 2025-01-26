import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  applications = []; // Liste des candidatures
  jobOffers = []; // Liste des offres d'emploi disponibles

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.getApplications();
    this.getJobOffers();
  }

  // Récupérer les candidatures
  getApplications(): void {
    this.candidateService.getApplications().subscribe({
      next: (data) => {
        this.applications = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des candidatures:', err);
      },
    });
  }

  // Récupérer les offres d'emploi
  getJobOffers(): void {
    this.candidateService.getJobOffers().subscribe({
      next: (data) => {
        this.jobOffers = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des offres d\'emploi:', err);
      },
    });
  }

  // Postuler à une offre
  applyToOffer(offerId: number): void {
    this.candidateService.applyToJob(offerId).subscribe({
      next: () => {
        alert('Candidature soumise avec succès !');
        this.getApplications(); // Met à jour la liste des candidatures
      },
      error: (err) => {
        console.error('Erreur lors de la soumission de la candidature:', err);
      },
    });
  }

  // Navigation vers la page du profil
  navigateToProfile(): void {
    // Exemple : Utilisation d'un routeur Angular pour naviguer
    window.location.href = '/candidate/profile';
  }

  // Obtenir la classe CSS pour le statut
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'acceptée':
        return 'accepted';
      case 'refusée':
        return 'rejected';
      default:
        return 'in-progress';
    }
  }
}
