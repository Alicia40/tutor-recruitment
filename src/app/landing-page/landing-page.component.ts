import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  voirDetails(): void {
    console.log('Voir les détails de l\'annonce');
    alert('Détails de l\'annonce affichés ici.');
    // Implémenter la navigation ou modal pour afficher les détails.
  }

  postuler(): void {
    console.log('Redirection vers le formulaire de candidature');
    alert('Formulaire de candidature prêt à être rempli.');
    // Rediriger vers la page de candidature.
  }
}
